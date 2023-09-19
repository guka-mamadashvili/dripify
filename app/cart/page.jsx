import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <>
    <Navbar />
    <Header />
    <div className='flex flex-col space-y-5 justify-center items-center'>
    <h1 className='text-3xl font-semibold text-center mt-2'>Shopping Cart</h1>
    <Button>Go To Check Out</Button>
    </div>
    </>
  )
}

export default page