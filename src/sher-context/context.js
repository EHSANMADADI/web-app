'use client'
import React, { createContext,useState } from "react";
export const context = createContext();
export const CartProvider = (props) => {
     const[cartItem,setCartItem] =useState([])
     return (
          <context.Provider value={[cartItem,setCartItem]}>
               { props.children }
          </context.Provider>
     
   )
}