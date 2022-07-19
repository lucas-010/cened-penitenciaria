import React from 'react'
import ponteJk from '../../Images/ponteJk.jpg'
import dfFlag from '../../Images/dfFlag.png'

export default function SubBottom() {
  return (
    <div className='w-full' style={{background: `url(${ponteJk}), rgba(0, 0, 0, 0.7)`,backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat', backgroundBlendMode: 'darken', height: '400px'}}>
        <div className='flex items-center lg:items-start p-4 flex-col'>
            <img className='w-28' src={dfFlag} alt="" />
            <p className='text-white ml-1 text-xl'>Brasília - DF</p>
        </div>
    </div>
  )
}
