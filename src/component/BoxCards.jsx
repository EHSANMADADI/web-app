import React from 'react'
import Card from './Card'
import katoni1 from '../../public/katoni_.jpg'
import katoni2 from '../../public/katoni2_.jpg'
import katoni3 from '../../public/kotoni3.jpg'
import man from '../../public/man4.jpg'
import woman from '../../public/woman1.jpg'

export default function BoxCards() {
     return (
          <div className="flex m-4 justify-center gap-4" dir='rtl'>
               <div>
                    <Card name='k-1' src={katoni1} title='کتانی چرخ دار' body='این نوع از جدید ترین انواع کتانی محسوب میشود که در بازار وجود دارد' />
                    <Card src={man} title='کتانی چرخ دار' body='این نوع از جدید ترین انواع کتانی محسوب میشود که در بازار وجود دارد' />
                    <Card src={woman} title='کتانی چرخ دار' body='این نوع از جدید ترین انواع کتانی محسوب میشود که در بازار وجود دارد' />
               </div>
               <div>
                    <Card src={man} title='کتانی چرخ دار' body='این نوع از جدید ترین انواع کتانی محسوب میشود که در بازار وجود دارد' />
                    <Card src={woman} title='کتانی چرخ دار' body='این نوع از جدید ترین انواع کتانی محسوب میشود که در بازار وجود دارد' />
                    <Card src={katoni1} title='کتانی چرخ دار' body='این نوع از جدید ترین انواع کتانی محسوب میشود که در بازار وجود دارد' />
               </div>

               <div>
                    <Card src={woman} title='کتانی چرخ دار' body='این نوع از جدید ترین انواع کتانی محسوب میشود که در بازار وجود دارد' />
                    <Card src={katoni1} title='کتانی چرخ دار' body='این نوع از جدید ترین انواع کتانی محسوب میشود که در بازار وجود دارد' />

                    <Card src={man} title='کتانی چرخ دار' body='این نوع از جدید ترین انواع کتانی محسوب میشود که در بازار وجود دارد' />

               </div>




          </div>



     )
}
