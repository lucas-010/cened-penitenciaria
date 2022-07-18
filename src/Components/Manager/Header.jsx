import React from 'react'
import {FaBookReader} from 'react-icons/fa'

export default function Header() {
  return (
    <div className='bg-[#594ae1] w-full p-4'>
        <div className='text-white flex items-center text-xl'>
            <FaBookReader size={30}/>
            <h1 className='ml-2'>CENED Qualificando</h1>
        </div>
    </div>
  )
}
