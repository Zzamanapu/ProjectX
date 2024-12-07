'use server'

import { SetCookie } from "@/utils/cookie-management"
import axios from "axios"
import { redirect } from 'next/navigation'

interface ICUser {
    name: string
    email: string
    password: string
}

interface ILUser {
    email: string
    password: string
}

const BASE_URL = "http://localhost:5000"
export const createAccountHandle = async (user: ICUser) => {
    const res = await axios.post(`${BASE_URL}/user/create-account`, user)
    console.log(res)
}

export const LoginHandle = async (user: ILUser) => {
    
    const res = await axios.post(`${BASE_URL}/user/login`, user)
    if (res.status === 200) {
        console.log("Navigate to Home page")
        const userToken = res.data.userToken
        await SetCookie(({ name: 'userToken', value: userToken }))
        console.log(userToken)
        redirect('/dashboard')
    }
    // console.log(res)
}


