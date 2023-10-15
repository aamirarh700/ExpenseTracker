import React from 'react'
import { UserPlusIcon } from '@heroicons/react/24/solid';

function Hero () {
  return (
 <div className='grid grid-cols-1 md:grid-cols-2 pt-20 items-center '>
  <div className='mb-10'>
       <p className='text-black font-serif text-[50px]'>
               Take Control of</p>
        <p className='text-green-700 font-serif text-[50px]'>Your Money</p>
        <p className='text-black font-serif text-[20px]'>
           Personal budgeting is the secret to finencial freedom.
      </p>
        <p className='text-black font-serif text-[20px]'>Start your journey today.</p>
       <div className='text-[20px] px-3 pb-3 py-5 rounded-full mt-4 '>
           <button className= 'bg-black text-white font-serif border-[5px] hover:border-green-700 flex items-center gap-4 text-base outline-4'>
        <p>Get Started</p>
         <UserPlusIcon width={20} /></button>
    </div>
    </div>
    <div>
    <img src="../src/assets/illustration.jpg " alt="person with money"/>

   
  </div>
  <div className='fixed bottom-0 left-0 w-screen h-15'>
  <img className='' src="../src/assets/wave.svg" alt="wave" />
  </div>
  
  </div>
  
 
  
  )
}

export default Hero