'use server'

import { GetCookie } from "@/utils/cookie-management"
import { jwtDecode, JwtPayload } from "jwt-decode"

export const GetUserData = async () => {
    const token = await GetCookie({ name: 'userToken' })

    if (token)
        return jwtDecode<JwtPayload>(token.value)

    return undefined
}