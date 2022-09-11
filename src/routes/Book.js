import React from 'react'
import Logo from "../assets/logo.png"

function Book() {
  return (
    <div className="bg-white shadow-md shadow-gray-300 overflow-hidden w-[80%] mx-auto md:w-[30rem] rounded-2xl flex flex-col space-y-4 mt-4">
       <div className='p-2 flex-col flex space-y-4'>
       <div className='flex md:space-x-2 justify-center items-center '>
				<img src={Logo} alt='logo' className='w-12' />
				<div>
					<p className='md:text-3xl text-lg uppercase font-bold'>
						DevNaija Academy{" "}
					</p>
					<p>Coding and financial literacy school</p>{" "}
				</div>
			</div>
            <h1 className='text-black uppercase font-bold'> Book Now and Get Certified</h1>
            <label>
                <h1>Parent Mobile No</h1>
                <input type="number" placeholder="Parent Mobile No" className='border border-gray-300 w-full py-2 px-4 rounded-lg outline-none' />
            </label>
       </div>
            <div className='bg-red text-white text-center cursor-pointer hover:bg-red-500 py-4 px-8 font-bold uppercase '> Schedule a Free Class </div>
    </div>
  )
}

export default Book