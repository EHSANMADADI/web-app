import React from 'react'

export default function page() {
  return (
   <div>
    <form className="flex flex-col w-1/3 mx-auto mt-20 border border-blue-400 p-2" >
      <h3 className="mx-auto font-bold text-2xl p-2 m-2 border-b-4">با ما در ارتباط باشید</h3>
       <input type="text" className="rounded-full p-3 m-4 border-none font-bold focus:outline-blue-400" style={{backgroundColor:'#E6E6E6'}} placeholder='Name' required/>
       <input type="email"className="rounded-full p-3 m-4 border-none font-bold focus:outline-blue-400" style={{backgroundColor:'#E6E6E6'}} placeholder='Email' required/>
       <input type='text' className="rounded-full p-3 m-4 border-none font-bold focus:outline-blue-400" style={{backgroundColor:'#E6E6E6'}}  placeholder='Subject' required/>
       <textarea className="rounded-2xl p-3 m-4 border-none font-bold focus:outline-blue-400" style={{backgroundColor:'#E6E6E6'}} placeholder='Massage' name="massage" id="massage" cols="30" rows="10" required></textarea>
       <button className="p-4 my-2 rounded-xl w-1/2 mx-auto bg-blue-300 text-white hover:bg-blue-800" >Send</button>
    </form>
   </div>

  )
}
