import React from 'react'
import about from './about.module.css'
export default function page() {
  return (
    <div className={about.about} dir="rtl">
    <h1 className={about.title}>در باره ی ما </h1>
    <div className={about.description}>
         <p>
              <strong className="text-bold"> شرکت کیف و کفش آریا</strong> از سال 1350 فعالیت خود را آغاز کرده است و در طی
              این مدت همواره باعث رضایت کامل مشتریان خود گردیده است
         </p>
         <p>این شرکت نزدیک به نیم قرن سابقه درخشان آماده ارائه کیف و کفش خاص و با کیفیت به شماست.</p>

    </div>
</div>
  )
}
