import React from 'react'
import { IoChatbox } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import box from './box.module.css'
import Link from 'next/link'
export default function Item({title,icon,href}) {
  return (
     <div className={box.box}>

             <div className='m-2 text-4xl'>{icon}</div>
             <Link href={href}> <p>{title}</p></Link>  
          </div>
  )
}
