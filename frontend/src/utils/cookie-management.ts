import { cookies } from 'next/headers'



 export const SetCookie = async ({ name, value }: { name: string, value: string }) => {
    (await cookies()).set(name, value, { maxAge: 60 * 30 })
}


export const GetCookie = async ({ name }: { name: string }) => {
    return (await cookies()).get(name)
}