import React from 'react'
import Item from'./Item'
import { IoChatbox } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
export default function Boxitem() {
  return (
    <div className="flex mx-2 justify-center mt-16">
     <Item title='درباره ما' href='./about' icon={<IoChatbox/>}/>

     <Item title='تماس با ما' href='./contact' icon={<MdEmail/>}/>
     <Item title='راهنمای انتخاب سایز کفش' href='./guid' icon={<FaQuestion/>}/>
     <Item title='تقاضای همکاری' href='./person' icon={<IoPerson/>}/>

        
          
        
     

     {/* <Item title='درباره ما' href='/about'>
     <IoChatbox/>
     </Item>

     <Item title='درباره ما'>
     <IoChatbox/>
     </Item>


     <Item title='درباره ما'>
     <IoChatbox/>
     </Item> */}

     
    </div>
  )
}
