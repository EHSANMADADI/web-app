'use client'
import React from 'react'
import { IoLogoGoogleplus } from "react-icons/io"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
export default function Footer() {
  return (
    <div className="footer">
      <div className="clint-servis">
        <ul>
          <li className="bold">خدمات مشتریان</li>
          <li>سوالات متداول</li>
          <li>بازگرداندن کالا</li>
          <li> شرایط استفاده</li>
          <li>حریم شخصی</li>
        </ul>
      </div>
      <div clasNames="clint-servis">
        <ul>
          <li className="bold">اطلاعات ما</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>

      </div>
      <div className="Linker">
        <h5>به ما در رسانه های اجتماعی بپیوندید</h5>
        <div className="footer-icons">
          <div className='flex'>
            <FaTwitter className='text-white text-4xl p-1 hover:text-blue-600  cursor-pointer' />
            <IoLogoGoogleplus className='text-white text-4xl p-1 hover:text-blue-600 cursor-pointer' />
            <FaFacebook className='text-white text-4xl p-1 hover:text-blue-600 cursor-pointer' />

          </div>
          <div className='flex'>
            <FaTwitter className='text-white text-4xl p-1 hover:text-blue-600  cursor-pointer' />
            <IoLogoGoogleplus className='text-white text-4xl p-1 hover:text-blue-600 cursor-pointer' />
            <FaFacebook className='text-white text-4xl p-1 hover:text-blue-600  cursor-pointer' />

          </div>
        </div>

      </div>
      <div className="w-30">
        <p dir="rtl">تمامی حقوق این سایت متعلق به دانشگاه بوده و هرگونه استفاده از منابع و طراحی های این سایت
          توسط نهاد های
          خارج
          از دانشگاه با پیگرد قانونی همراه خواهد بود.</p>
      </div>
    </div>

  )
}
