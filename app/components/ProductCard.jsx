"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"



const ProductCard = ({imgUrl, title, price}) => {
  return (
    <>
        <div className='w-[300px] border-2 border-primary rounded-lg p-1 flex flex-col  items-center space-y-1 pb-2 m-2'>
            <Image src={imgUrl} width="300" height="500" alt={title} className="rounded-lg " />
            <h1 className="text-center text-xl">{title}</h1>
            <h2 className="text-center text-lg">{`${price}GEL`}</h2>
            <Button>Add To Cart</Button>
        </div>
    </>
  )
}

export default ProductCard