import React from 'react'

export default function Modal({ Open, onClose, children }) {
     console.log('props=' + Open);
     if (!Open) return null;

     const Handelclose = (e) => {
          if (e.target.id === 'wrapper') onClose();

     }
     return (

          <div className='fixed inset-0 flex justify-center items-center transition-colors bg-opacity-25 backdrop-blur-sm  border-black' id='wrapper' onClick={Handelclose}>
               <div className='w-[600px] flex flex-col'>
                    <button className='text-black text-xl place-self-end rounded border  p-2 mb-1' onClick={() => onClose()}>X</button>
                    <div className='bg-white  rounded '>
                         <div className='w-full'>
                              {children}
                         </div>

                    </div>
               </div>
          </div>


     )
}
