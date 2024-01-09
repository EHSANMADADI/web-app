'use client'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { context } from '../../src/sher-context/context'
export default function page(props) {
  // const[product,setProduct]=useState(0);

  const [cartItem, setCartItem] = useContext(context);

  return (
    <div className="flex">
      {cartItem.map((item) => {
        <><div>
          {item.title}
        </div><div>
            {item.Size}
          </div><div>
            {item.Color}
          </div></>
      })}

    </div>

  )


  
}
