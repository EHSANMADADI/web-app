'use client'
import React, { createContext,useState } from "react";
export const context = createContext();
export const CartProvider = (props) => {
     const[cartItem,setCartItem] =useState([])
     const [show,setShow] = useState('true')
     return (
          <context.Provider value={[cartItem,setCartItem]}>
               { props.children }
          </context.Provider>
     
   )
}