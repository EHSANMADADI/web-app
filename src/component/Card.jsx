import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Card({ src, title, body,name }) {
     return (
          <div className="max-w-sm  flex flex-col  shadow-lg border border-spacing-10 my-8 hover:border-blue-600 rounded-2xl">
               <Link href={`/items/${name}`}>
                    <div className=" overflow-clip h-full">
                         <Image className="overflow-hidden rounded-t-2xl p-5 cursor-pointer " src={src} alt='image Shoes' width={500} height={500} />
                    </div>

                    <div className="px-6 py-4">
                         <div className="font-bold text-xl mb-2">{title}</div>
                         <p className="text-gray-700 text-base">
                              {body}
                         </p>
                    </div>
               </Link>


          </div>
     )
}
