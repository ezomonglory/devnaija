import React from 'react'

function FormInput({text, type, width, glory}) {
  const T = text.toString()
  // console.log(text.toString());
  return (
    <label className='text-left space-y-2'>
        <h2>{text}</h2>
        <input  type={type} placeholder={text}className="border w-[100%] border-gray-300 outline-none text-black p-2 "  size={width } />
    </label>
  )
}

export default FormInput


// {...register({text})}