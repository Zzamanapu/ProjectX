import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { GetCookie } from './utils/cookie-management'

export async function middleware(request: NextRequest) {

  if (request.nextUrl.pathname.endsWith('/') || request.nextUrl.pathname.endsWith('/create-account')) {
    const cookie = request.cookies.get('userToken')
    if (cookie) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const cookie = request.cookies.get('userToken')
    if (!cookie) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    const response = NextResponse.next()
    response.cookies.set('userToken', cookie.value, {
      maxAge: 60 * 30,
      httpOnly: true,
      secure: true,
    })
    return response
  }
}

// export const config = {
//   matcher: '/dashboard/:path*',
// }

// matcher: '/dashboard/:path*',
