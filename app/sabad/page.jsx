'use client'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { context } from '../../src/sher-context/context'
import Link from 'next/link'
export default function page(props) {
  // const [cartItem, setCartItem] = useContext(context);
  const product=useContext(context);
 const cartItems= JSON.parse(localStorage.getItem('item'));

  const handelplus = (index) => {
    const item = cartItem[index]
    setCartItem((prev) => {
      const out=[...prev,item]
      localStorage.setItem('item', JSON.stringify(out))
      return out
    })
  }

  const handelminez = (index) => {
    cartItem.splice(index, 1)
    setCartItem(() => {
      const out=cartItem;
      localStorage.setItem('item', JSON.stringify(out))
      return [...cartItem]
    })

  }
  const handelprice = () => {
    var p = 0;
    cartItem.map((item) => {
      p = p + item.price;
    })
    return p
  }
  return (
    <div>
      {cartItems && cartItems.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {cartItems && (
        cartItems.map((item, index) => (
          <div className="flex mx-8 mt-5 text-center justify-evenly items-center border border-black">
            <img src={item.src} className='w-1/5 py-3 rounded-2xl' alt="itemImage" />
            <h1 className="font-bold text-2xl mx-4">{item.title}</h1>
            <h5 className='mx-2 font-bold text-2xl'>Size:{item.Size.size}</h5>
            <h5 className='mx-2 font-bold text-2xl'>رنگ:{item.Color.color}</h5>
            <h4 className='mx-2 font-bold text-2xl'>قیمت:{item.price}تومان</h4>
            <div>
              <button className='p-4 m-2 rounded-full bg-green-600 text-white hover:bg-green-400' onClick={() => handelplus(index)}>+</button>
              <button className='p-4 m-2 rounded-full bg-red-600 text-white hover:bg-red-400' onClick={() => handelminez(index)} >-</button>
            </div>
          </div>
        ))
      )}
      <Link href='/'>
      <button className='p-2 bg-gray-600 text-white m-2 hover:bg-gray-400 rounded-xl'>برگشت به خانه</button>
      </Link>
      <button className=' p-2 text-white m-2  rounded-xl bg-green-600 hover:bg-green-300'>ادامه</button>
    </div>
  );
}




