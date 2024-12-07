'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createAccountHandle } from "@/services/auth";
import Link from "next/link";
import { useState } from "react";

export default function CreateAccount() {

  const CkeckFormet = () => {
    if (name.length > 0) {
      return true
    }
    else {
      return false
    }
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const ManageCreateAccout = () => {
    if (CkeckFormet()) {
      createAccountHandle({ name, email, password })
    }
    else {
      console.log("does not match the criteria")
    }

  }


  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-gray-200">
      <div className="p-5 shadow-xl border-[1px] rounded-lg bg-white text-center">
        <h1 className="text-3xl font-bold mb-8">Create Account</h1>
        <Input className="min-w-[300px]" type="text" placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input className="min-w-[300px] mt-3" type="email" placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input className="min-w-[300px] mt-3" type="password" placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="my-3 text-gray-500 text-sm">Already Have an Account? <Link href="/" className="text-blue-500">Login</Link></p>

        <Button onClick={ManageCreateAccout}>Create Account</Button>
      </div>
    </div>
  );
}
 