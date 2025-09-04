import React from 'react'

export default function Loader() {
  return (
    <div className='h-screen w-full'>
        <div className='flex justify-center items-center h-full'>
        <img className='h-[80px] w-[80px] animate-[spin_1s_ease-in-out_infinite]' 
        src='../../public/images/logo4.png'>

        </img>
        </div>
    </div>
  )
}
