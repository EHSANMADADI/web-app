import React from 'react'
import about from './about.module.css'
import man2 from '../../public/man2.jpg'
export default function page() {
  return (
    <div className={about.about} dir="rtl">
      <h1 className="m-5 p-2 text-5xl">در باره ی ما </h1>
      <div className={about.description}>
        <div>
          <p>
            <strong className="text-bold"> شرکت کیف و کفش آریا</strong> از سال 1350 فعالیت خود را آغاز کرده است و در طی
            این مدت همواره باعث رضایت کامل مشتریان خود گردیده است
          </p>
          <p>این شرکت نزدیک به نیم قرن سابقه درخشان آماده ارائه کیف و کفش خاص و با کیفیت به شماست.</p>
          <p>این شرکت در تلاش است بهترین کیفیت را با نازل ترین قیمت برای شما مشتریان گرانقدر فراهم کند</p>

        </div>

        <div className="ml-5">
          <img className="rounded-full border border-blue-800 shadow-2xl bg-slate-50 p-2 " src={man2.src} />
        </div>


      </div>
    </div>
  )
}
