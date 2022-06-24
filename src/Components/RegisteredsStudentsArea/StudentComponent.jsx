import React from 'react'
import {FaUserCircle} from 'react-icons/fa'

export default function StudentComponent({name, cpf, agent, index}) {
  return (
    <div className='flex justify-between items-center border-4 mt-5 rounded-lg p-4 font-bold'>
        <div className='flex w-1/2 items-center'>
            <FaUserCircle size={40} color='black'/>
            <p className='text-xl ml-2'>{name}</p>
        </div>

        <div className='text-xl w-1/4'>
            <p>{cpf}</p>
        </div>

        <div className='text-xl w-1/3'>
            <p>{agent}</p>
        </div>
    </div>
  )
}
