import React from 'react'

export default function Cards({title, description, imageUrl}) {
  return (
    <div id = "card-container" className='mx-4 min-h-[30vh] group relative w-auto bg-black rounded-lg   text-white mt-10
    shadow-lg transition-transform duration-500 hover:scale-110
    flex flex-col h-auto'>
      <img className='rounded-lg h-full w-full' src={imageUrl} />
      
      <div className= 'h-auto absolute inset-0 flex flex-col items-center justify-center px-4 '>
      <h2 className='mb-10 text-[clamp(1rem,1.5vw,5rem)]'>{title}</h2>
      <p className="opacity-0 text-[clamp(1.2rem,1.5vw,5rem)] ">{description}</p>
      </div>
    </div>
  )
}
