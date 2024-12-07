'use client'
import { GetUserData } from '@/services/dashboard'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


interface Iuser {
  _id: string
  name: string
  email: string
  iat: number
}

const Dashboard = () => {

  const [user, setUser] = useState<any>(undefined)
  const router = useRouter()
  const userData = async () => {
    const data = await GetUserData()
    if(!data) {
      router.push('/')
    }
    setUser(data)
  }



  useEffect(() => {
    userData()
  }, [])


  return (
    <div>
      <h1 className='text-5xl font-bold'>Dashboard</h1>
      <h3>{user?.name}</h3>
      <h3>{user?.email}</h3>
    </div>
  )
}

export default Dashboard