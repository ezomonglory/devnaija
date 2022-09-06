import React from 'react'

function FormSelect({text, option, option2}) {
  return (
    <label className='text-left'>
        <h2 className='mb-2'>{text}</h2>
        <select placeholder='Select a session' className='w-full border border-gray-300 outline-none p-2'>
            <option disabled selected>--Please Select an Option--</option>
            <option value={option}>{option}</option>
            <option value={option2}>{option2}</option>
        </select>
    </label>
  )
}

export default FormSelect