import React from 'react'

function Card({Name, Title, image, text}) {
  return (
    <div className='lg:w-full w-full border border-black rounded-lg py-6 px-6 space-y-6'>
        <p>
       {text}
        </p>
        <div className='flex space-x-2'>
            <div className='rounded-full bg-gray-400 h-16 w-16 overflow-hidden'><img src={image} className="" /></div>
            <div>
                <h2 className='text-black text-lg font-bold'>{Name}</h2>
                <p className='text-gray-400'>{Title}</p>
            </div>
        </div>
    </div>
  )
}

export default Card