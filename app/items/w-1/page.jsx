"use client"
import React, { useContext } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { useState } from 'react';
import Image from 'next/image'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import wman1 from '../../../public/woman1.jpg'
import wman2 from '../../../public/woman2.jpg'
import wman3 from '../../../public/woman3.jpg'

import { context } from '../../../src/sher-context/context'


export default function page() {
     const slides = [wman1.src, wman2.src, wman3.src];

     const [index, setIndex] = useState(0);
     const [index1, setIndex1] = useState(1);
     const [color, setColor] = useState('');
     const [size, setSize] = useState('');


     const [cartItem, setCartItem] = useContext(context);///context




     const handelPrev = () => {
          setIndex((index + 1) % slides.length)
          setIndex1((index1 + 1) % slides.length)
     }
     const handelNext = () => {

          setIndex((index + 1) % slides.length)
          setIndex1((index1 + 1) % slides.length)
     }


     const handelchangcolor = (e) => {
          console.log(e.currentTarget.value);
          setColor(e.currentTarget.value);
     }
     const handelchangsize = (e) => {
          console.log(e.currentTarget.value);
          setSize(e.currentTarget.value);
     }

     const handelsubmit = () => {
          const product={title:'کفش زنانه ' ,Color:{color},Size:{size}  ,price:'8500',img:'../../public/woman1.jpg'}
          setCartItem((currState)=>{
               return[...currState,product]
          })
     
     }

     return (
          <div>
               <div className='flex w-full justify-center space-x-4 mt-16'>
                    <button className='h-auto w-10 font-extrabold text-3xl' onClick={handelPrev}>{"<"}</button>
                    <div className='relative w-96 border-2 h-56 overflow-hidden rounded-xl'>
                         <img className={'absolute z-20 w-full h-full p-4 te-x-full object-cover '} src={slides[index]} />
                         <img className={'absolute z-20 w-full h-full p-4 '} src={slides[index1]} />
                    </div>
                    <button className='h-auto w-10 font-extrabold text-3xl' onClick={handelNext}>{">"}</button>
               </div>

               <div dir='rtl' className='mt-5 mx-20 border p-5'>
                    <h1 className='text-4xl p-2'> کفش زنانه </h1>
                    <p>این کفش از الیاف پلی استرن تشکیل شده است جنس زیره این کفش بسیار مرغوب و از بهترین مواد اولیه است </p>
                    <p>این نوع از جدیدترین و بروز ترین کفش های  بازار محسوب میشود</p>
                    <p className="p-4 font-bold text-xl">قیمت :</p>
                    <div className="mr-10">
                         <div className="-mb-3">
                              <span className="bg-red-500 p-1 rounded-full text-white">20%</span>
                         </div>

                         <p className="bg-blue-500 py-3 px-4 mx-2 mb-2 w-24 rounded-full text-white"> 850000T</p>
                    </div>








                    <div className='m-5 p-2 space-x-10'>
                         <p className="m-4">لطفا رنگ مورد نظر خود را انتخاب کنید:</p>
                         <div className='m-5 p-2 space-x-10'>
                              <input type="radio" id="black" name="color" value="black" required checked={color === 'black'} onChange={handelchangcolor} />
                              <label htmlFor='black' >مشکی</label>
                              <input type="radio" id="white" name="color" value="white" onChange={handelchangcolor} checked={color === 'white'} />
                              <label htmlFor='white' >سفید</label>
                              <input type="radio" id="brown" name="color" value="brown" onChange={handelchangcolor} checked={color === 'brown'} />
                              <label htmlFor='brown' >قهوه ای</label>
                         </div>

                         <p className="m-4">لطفا سایز مورد نظر خود را انتخاب کنید:</p>

                         <input type="radio" id="size-small" name="size" value="34" required checked={size === '34'} onChange={handelchangsize} />
                         <label htmlFor="size-small">34</label>
                         <input type="radio" id="size-medum" name="size" value="38" onChange={handelchangsize} checked={size === '38'} />
                         <label htmlFor="size-medum">38</label>
                         <input type="radio" id="size-big" name="size" value="40" onChange={handelchangsize} checked={size === '40'} />
                         <label htmlFor="size-big">40</label>

                         <button class="bg-green-700 text-white p-4 rounded hover:bg-green-400" onClick={handelsubmit} >افزودن به سبد خرید</button>

                    </div>
               </div>
          </div>
     );
};


