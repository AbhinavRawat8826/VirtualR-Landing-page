
import React from 'react'
import { testimonials } from '../constants'

const Testimonals = () => {
  return (
    <>
     <div className=" mt-20 justify-center min-h-[100vh] p-4">
          <h1 className='text-4xl text-center sm:text-5xl lg:text-6xl'> <span className='bg-gradient-to-br from-teal-300 to-pink-500 bg-clip-text text-transparent'>What people are Saying</span></h1>

          <div className='flex flex-wrap  mt-10 lg:mt-20'>
               {testimonials.map((item,index)=>(
                   <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>

                    <div className="flex flex-col bg-neutral-900 border border-neutral-800 font-thin  p-6 rounded-lg">
                       <p >{item.text}</p>

                       <div className="flex mt-10 space-x-5">
                        <img src={item.image}  className="w-10 h-10 rounded-full border-neutral-300 border" alt="" />

                        <div className="flex flex-col space-y-2">
                          <h3>{item.user}</h3>
                          <p className='text-sm text-neutral-200'>{item.company}</p>
                        </div>
                       </div>
                    </div>

                   </div>
               ))}
          </div>
     </div>
    </>
  )
}

export default Testimonals
