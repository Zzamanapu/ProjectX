'use client'
import { GetUserData } from '@/services/dashboard'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DeleteCookie } from '@/utils/cookie-management'
import { Textarea } from '@/components/ui/textarea'


interface Iuser {
  _id: string
  name: string
  email: string
  iat: number
}


const Dashboard = () => {

  const [user, setUser] = useState<any>(undefined)
  const [postData, setPostData] = useState({
    title: '',
    details: ''
  })
  const router = useRouter()
  const userData = async () => {
    const data = await GetUserData()
    if (!data) {
      router.push('/')
    }
    setUser(data)
  }

  useEffect(() => {
    userData()
  }, [])

  const handleLogout = async () => {
    await DeleteCookie({ name: 'userToken' })
    router.push('/')
  }

  const handlePost = () => {
    console.log(postData)
  }

  return (
    <div>
      <div className='flex justify-between p-5'>
        <div>
          <h1 className='text-3xl font-bold'>Dashboard</h1>
        </div>
        <div>
          <Button variant={'outline'} onClick={handleLogout}>Logout</Button>
        </div>
      </div>
      <div className='flex p-5 gap-2'>
        <div className='w-[50%] h-[500px] border-2 rounded-lg'>

        </div>
        <div className=' flex flex-col gap-2 w-[50%] h-[500px]'>
          <div className='border-2 rounded-lg w-[100%] flex-[3] p-2'>
            <h3 className='text-base text-gray-500'>Profile</h3>
            <h3 className='text-lg font-bold mt-1'>{user?.name}</h3>
            <h3 className='text-md'>{user?.email}</h3>
          </div>
          <div className='border-2 rounded-lg w-[100%] flex-[7] p-2'>
            <h3 className='text-base  text-gray-500'>Post Your Thoughts</h3>
            <Input className="min-w-[300px] mt-3" type="text" placeholder="Title"
              value={postData.title}
              onChange={(e) => {
                setPostData(ex => ({
                  ...ex,
                  title: e.target.value
                }))
              }}
            />
            <Textarea className="min-w-[300px] mt-3" placeholder="Your discription.."
              value={postData.details}
              onChange={(e) => {
                setPostData(ex => ({
                  ...ex,
                  details: e.target.value
                }))
              }}
            />
            <Button onClick={handlePost}>Post</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard


//53:44 min