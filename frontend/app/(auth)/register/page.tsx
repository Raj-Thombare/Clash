import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-[550px] bg-white rounded-xl py-5 px-10 shadow-md'>
        <h1 className='text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text text-center'>
          Clash
        </h1>
        <h1 className='text-3xl font-bold mt-2'>Register</h1>
        <p>Welcome back</p>
        <form
          action='
    '>
          <div className='mt-4'>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              name='name'
              type='text'
              placeholder='Enter your name...'
            />
          </div>
          <div className='mt-4'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='Enter your email...'
            />
          </div>
          <div className='mt-4'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              name='password'
              type='password'
              placeholder='Enter your password...'
            />
          </div>
          <div className='mt-4'>
            <Label htmlFor='password'>Confirm Password</Label>
            <Input
              id='cpassword'
              name='confirm_password'
              type='password'
              placeholder='Confirm your password...'
            />
          </div>
          <div className='mt-4'>
            <Button className='w-full'>Submit</Button>
          </div>
        </form>
        <p className='mt-2 text-center'>
          Already have an account ?{" "}
          <strong>
            <Link href='/login'>Login</Link>
          </strong>
        </p>
      </div>
    </div>
  );
}

export default page;