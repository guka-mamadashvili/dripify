import React from 'react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='grid grid-cols-3 pt-6 max-sm:flex max-sm:flex-col max-sm:space-y-4'>
      <div className='flex justify-center max-sm:justify-around'>
        <Link href="/"><h1 className='text-xl mt-2 cursor-pointer max-sm:mt-2'>Dripify</h1></Link>
     </div>
      <div className='flex justify-center'>
        <ul className='flex space-x-4 text-xl justify-center'>
            <a href="/" className='p-2 hover:bg-mtavari hover:text-white'>Home</a>
            <a href="gallery" className='p-2 hover:bg-mtavari hover:text-white'>Gallery</a>
            <a href="" className='p-2 hover:bg-mtavari hover:text-white'>Contact</a>
        </ul>
      </div>
      <div className='flex justify-center space-x-8 max-sm:flex max-sm:flex-col max-sm:items-center'>
        <div className='flex space-x-2  justify-center items-center'>
          <h1 className='text-xl'>Cart Empty</h1>
          <Link href="cart"><Image src="/shopping-cart.svg" width="50" height="50"/></Link>
        </div>
        <div className='flex space-x-2  justify-center items-center'>
        <Switch />
        <h3>Dark Mode</h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar
