'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginHandle } from "@/services/auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Home() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-gray-200">
      <div className="p-5 shadow-xl border-[1px] rounded-lg bg-white text-center">
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <Input className="min-w-[300px]" type="email" placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input className="min-w-[300px] mt-3" type="password" placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="my-3 text-gray-500 text-sm">Don't Have an Account? <Link href="/create-account" className="text-blue-500">Create Account</Link></p>

        <Button variant={"secondary"} onClick={() => LoginHandle({ email, password })} >Sign in</Button>
      </div>
    </div>
  );
}
