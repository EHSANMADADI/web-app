'use client'
import React from 'react'
import stayle from './styles.module.css'
import Modal from './Modal'
import { useState } from 'react'
import Sabad from '../../app/sabad/page'
import { CiShoppingCart } from "react-icons/ci";
import Link from 'next/link'
export default function Header() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  return (
    <>
      <div className='mx-auto mb-5 p-5 text-center text-4xl font-bold font-serif'>
        <h1>Shoes Shop</h1>
      </div>
      <div className='flex justify-between mx-5'>
        <form className="w-1/5">

          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm border border-black rounded-3xl focus:border-none" placeholder="Search..." required />
          </div>
        </form>

        <div className="flex justify-evenly">
        <Link href='/sabad'>
          <button className='bg-blue-500 text-white p-2 text-3xl m-2 rounded-full'><CiShoppingCart/></button>
        </Link>
          <button onClick={() => setOpen(true)} className={stayle.inputbtn}>ورود</button>
          {console.log('open' + open)}
          <Modal Open={open} onClose={() => setOpen(false)}>

            <div className="relative max-h-full">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    LogIn
                  </h3>
                </div>
                {/* <!-- Modal body --> */}
                <form className="p-4 md:p-5">
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                      <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type name" required />
                    </div>
                    <div className="col-span-2">
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Passwprd</label>
                      <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Password " required />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-blue-500 cursor-pointer" dir='rtl' >اگر تاکنون عضو نشده اید کلیک کنید</h4>
                  </div>
                </form>
              </div>
            </div>

          </Modal>
          {/* /////////////////////////////////////////////////////////////////////////////////// */}
          <button className={stayle.loginbtn} onClick={() => setOpen2(true)} >عضویت</button>
          {console.log('open2' + open)}
          <Modal Open={open2} onClose={() => setOpen2(false)}>

            

            <div className="relative max-h-full">

              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Registr
                  </h3>
                </div>

                <form className="p-4 md:p-5">
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                      <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type name" required />
                    </div>

                    <div className="col-span-2">
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type name" required />
                    </div>

                    <div className="col-span-2">
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Passwprd</label>
                      <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Password " required />
                    </div>
                  </div>
                  <div>
                    <button className='bg-green-600 text-white p-4 m-2 rounded' >عضویت</button>
                  </div>
                </form>
              </div>
            </div>
          </Modal>

        </div>

      </div>


    </>
  )
}
