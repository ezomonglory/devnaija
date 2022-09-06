import React from 'react'

function TeamMember({Name, Title, text, image}) {
  return (
    <div className='flex space-x-4 align-text-bottom w-full flex-col justify-center  items-center'>
            <img src={image} className="w-[150px] h-[150px] rounded-full" />
            <div className='text-center'>
                <h2 className='text-black text-lg font-bold'>{Name}</h2>
                <p className='text-gray-400'>{Title}</p>
                {/* <p>{text}  </p> */}
            </div>
        </div>
  )
}

export default TeamMember