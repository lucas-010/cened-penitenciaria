import React from 'react'
import ponteJk from '../../Images/ponteJk.jpg'
import dfFlag from '../../Images/dfFlag.png'

export default function SubBottom() {
  return (
    <div className='w-full h-96' style={{backgroundImage: `url(${ponteJk})`, backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
        <div className='flex items-center lg:items-start  p-4 flex-col'>
            <img className='w-28' src={dfFlag} alt="" />
            <p className='text-white ml-1 text-xl'>Brasília - DF</p>
        </div>
    </div>
  )
}
