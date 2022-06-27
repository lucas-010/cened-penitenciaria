import React from 'react'
import {ImBook} from 'react-icons/im'
import {FaUser} from 'react-icons/fa'
import {AiOutlinePoweroff} from 'react-icons/ai'
import wavesBlue from '../../Images/1.jpg'

export default function Header() {
  return (
    <div style={{backgroundImage: `url(${wavesBlue})`, backgroundSize: 'cover'}} className='w-full flex justify-between p-4'>
        <div className='flex items-center'>
            <ImBook size={40} color='#fff'/>
            <h2 className='text-white text-xl font-bold'>SPCENED</h2>
            <div className='text-gray-100 font-semibold p-2'>
                <p className='lg:block hidden'>- ÁREA DO AGENTE PENITENCIÁRIO / PDF 1 - PENITENCIÁRIA DO DISTRITO FEDERAL I</p>
                <p className='block font-bold text-right lg:hidden'>ÁREA DO AGENTE PENITENCIÁRIO</p>
            </div>
        </div>
        
        <div className='lg:flex hidden items-center justify-between'>
            <FaUser size={25} color='#fff'/>
            <p className='text-xl p-2 text-white font-bold'>USUÁRIO</p>
            <div className='p-2 bg-red-500 rounded-lg'>
                <AiOutlinePoweroff size={30} color='#fff'/>
            </div>
        </div>
    </div>
  )
}
