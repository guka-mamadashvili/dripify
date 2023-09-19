import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'

import { products } from "../products"


const page = () => {
  return (
    <>
    <Navbar />
    <Header />
    <h1 className='text-3xl font-semibold text-center mt-2'>Women Products</h1>
    <div className='flex flex-wrap space-x-6 mt-4 justify-center space-4 px-6 pb-4'>
    {products
    .filter((product) => product.sex === 'Women')
    .map((product) => (
      <ProductCard imgUrl={product.imgUrl} title={product.title} price={product.price} />
    ))}
    </div>
    </>
  )
}

export default page