'use server'

import { cookies } from 'next/headers'

export const SetCookie = async ({ name, value }: { name: string, value: string }) => {
    (await cookies()).set(name, value, { maxAge: 60 * 30, httpOnly: true, secure: true, path: '/' })
}

export const GetCookie = async ({ name }: { name: string }) => {
    return (await cookies()).get(name)
}

export const DeleteCookie = async ({ name }: { name: string }) => {
   (await cookies()).delete(name)
}