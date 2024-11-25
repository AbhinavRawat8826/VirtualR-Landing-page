import React from 'react'
import { CheckCircle2 } from "lucide-react";
import codeImg from '../assets/code.jpg'
import { checklistItems } from '../constants'

const Workflow = () => {
  return (
   <>
   <div className="min-h-[100vh] mt-20 text-center">
      <h2 className='text-3xl sm:text-5xl lg:text-6xl'>Accelerate <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>your coding</span></h2>

      <div className='flex flex-wrap justify-center mt-12'>
         <div className="p-2 w-full lg:w-1/2">

         <img src={codeImg} alt="" />


         </div>

         <div className="p-12 w-full lg:w-1/2">

         {checklistItems.map((item,index)=>(
            <div key={index} className='flex mb-12'>
                <div className='text-green-400 bg-neutral-900 mx-6 h-10 w-10 p-2 justify-center items-center rounded-full'>
                    <CheckCircle2/>
                </div>

                <div>
                    <h5 className='mt-1 text-xl text-left'>{item.title}</h5>
                    <p className='text-md text-neutral-500 text-left'>{item.description}</p>
                </div>


            </div>
         ))}

         </div>
      </div>
   </div>
   </>
  )
}

export default Workflow
