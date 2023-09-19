import React from 'react'
import Image from 'next/image'   

const Card = ({backgroundImage, Title}) => {
  return (
    <div className='w-[500px] h-[700px] bg-cover flex justify-center items-end  hover:shadow-md rounded-xl hover:shadow-black hover:cursor-pointer p-4 max-sm:w-[300px] max-sm:h-[500px]' style={{ backgroundImage: `url(${backgroundImage})`}}>
        <h1 className='text-white text-5xl font-bold hover:underline'>{Title}</h1>
    </div>  
  )
}

export default Card