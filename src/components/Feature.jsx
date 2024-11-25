import React from 'react'
import { features } from "../constants";

const Feature = () => {
  return (
    <>
     <div className="mt-20  relative min-h-[100px]">

        <div className="flex flex-col space-y-10 lg:space-y-16  justify-center items-center">
            <h3 className='bg-neutral-900 text-orange-500 rounded-full h-6 font-medium px-2 py-1 uppercase text-sm'>Feature</h3>

            <h1 className='text-3xl text-center sm:text-5xl lg:text-6xl'>Easily build  <span className='bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent'> your code</span></h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map((item, key) => (
    <div key={key} className="flex">
      <div className="flex mx-6 p-2 rounded-full bg-neutral-900 w-10 h-10 text-orange-700 items-center justify-center">
        {item.icon}
      </div>
      <div>
        <h4 className="text-lg mt-1 mb-6">{item.text}</h4>
        <p className="text-md p-2 mb-20 text-neutral-500">{item.description}</p>
      </div>
    </div>
  ))}
</div>

    
        </div>

     </div>
    </>
  )
}

export default Feature
