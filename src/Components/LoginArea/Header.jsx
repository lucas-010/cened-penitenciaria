import React from 'react'
import wavesBlue from '../../Images/wavesBlue.png'
import logoCened from '../../Images/logoCened.png'

export default function Header() {
  return (
    <div style={{backgroundImage: `url(${wavesBlue})`, backgroundSize: 'cover'}} className='flex justify-center lg:justify-between items-center h-20 w-full font-bold'>
      <div className='lg:ml-5 md:ml-5 ml-0'>
        <img src={logoCened} className='h-20' alt="" />
      </div>

      <div className='lg:block md:block hidden mt-5 mr-2'>
        <span className='text-lg font-bold text-white'>Acesso restrito às Penitenciárias Conveniadas!</span>
      </div>
    </div>
  )
}
