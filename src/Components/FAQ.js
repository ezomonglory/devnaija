import React from 'react'
import { Faq } from './Data'
import FaqCard from './FaqCard'

function FAQ() {
  return (
    <div className='lg:w-[60%] mx-auto w-full p-2'>
        <h1 className='red font-bold text-3xl text-center mb-4'>Frequently Asked Questions</h1>        
        <div className='space-y-4'>{Faq.map((data)=> <FaqCard text={data.text} ToggleText={data.option} />)}</div>
    </div>
  )
}

export default FAQ