'use client'
import React, { useEffect } from 'react'
import stayle from './styles.module.css'
import Modal from './Modal'
import { useState, useRef } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import Link from 'next/link'
import { useContext } from 'react'
import { context } from '../../src/sher-context/context'
import Swal from 'sweetalert2'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [cartItem, setCartItem] = useContext(context);
  const Name = useRef(null);
  const PasswordRegister = useRef(null);
  const Email = useRef(null);
  const LoginName = useRef(null);
  const PasswordLogin = useRef(null);
  const [user, setUser] = useState([])
  const [show, setShow] = useState(true)
  const[person,setPerson] = useState('')


  const handelregister = (e) => {
    e.preventDefault();
    const Inputvalue = { 'username': Name.current.value, 'password': PasswordRegister.current.value, 'email': Email.current.value, 'confrimpassword': PasswordRegister.current.value }

    setUser((currState) => {
      const out = [...currState, Inputvalue];
      localStorage.setItem('Users', JSON.stringify(out))
      return out;
    })

  }

  const handelLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('Users'));
    
    users.map((user) => {
      (LoginName.current.value === user.username && PasswordLogin.current.value === user.password) ?
        (
         setPerson(LoginName.current.value),
          setOpen(false),
          setShow(false),
          Swal.fire({
            title: `عزیز ${user.username} خوش آمدی `,
            icon: "success"
          })) :

        (Swal.fire({
          title: "شما ثبت نام نکرده اید",
          icon: "warning"
        })
        )
    })
  }



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
        {show ?(
          <div className="flex justify-evenly">

            {/* <Link href='/sabad' className="m-2">
              <button className='bg-blue-500 text-white p-3 text-4xl m-2 rounded-full'><CiShoppingCart /></button>
              <span className='p-2 bg-red-500 rounded-full text-white -ml-8 '>{cartItem.length}</span>
            </Link> */}
            
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
                  <form className="p-4 md:p-5" onSubmit={(e) => handelLogin(e)}>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-2">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input ref={LoginName} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type name" required />
                      </div>
                      <div className="col-span-2">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Passwprd</label>
                        <input ref={PasswordLogin} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Password " required />
                      </div>
                    </div>
                    <div>
                      <button className='p-2 m-2 bg-blue-500 text-white' onClick={() => {

                      }}>ورود</button>
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

                  <form className="p-4 md:p-5" onSubmit={(e) => handelregister(e)}>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-2">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input ref={Name} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type name" required />
                      </div>

                      <div className="col-span-2">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
                        <input ref={Email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type name" required />
                      </div>

                      <div className="col-span-2">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Passwprd</label>
                        <input ref={PasswordRegister} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Password " required />
                      </div>
                    </div>
                    <div>
                      <button onClick={() => {
                        (Name.current.value && Email.current.value && PasswordRegister.current.value) ?
                          Swal.fire({
                            title: "با موفقیت انجام شد",
                            icon: "success"
                          }) : (0)
                      }} type='submit' className='bg-green-600 text-white p-4 m-2 rounded'>عضویت</button>
                    </div>
                  </form>
                </div>
              </div>
            </Modal>

          </div>):
          (
            <div className="flex justify-evenly items-center">

            <Link href='/sabad' className="m-2">
              <button className='bg-blue-500 text-white p-3 text-4xl m-2 rounded-full'><CiShoppingCart /></button>
              <span className='p-2 bg-red-500 rounded-full text-white -ml-8 '>{cartItem.length}</span>
            </Link>
             <h2 className='text-gray-600 text-2xl p-5 border border-gray-500 mx-2 rounded-2xl'>{person}</h2>
            </div>

          )
        }
      
        

      </div>


    </>

  )
}
