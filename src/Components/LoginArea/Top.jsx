import React from 'react'
import imageBrasil from '../../Images/imageBrasil.png'

export default function Top() {
  return (
    <div className='bg-gray-200 border-t-2 border-black p-4'>
       <div className='flex flex-col lg:flex-row md:flex-row justify-center items-center'>
          <img className='w-44' src={imageBrasil} alt="" />
          <div className='ml-5 text-center lg:text-left md:text-left'>
          <h2 className='text-2xl font-bold'>Programa de Qualificação Profissional ás Pessoas Privadas de Liberdade</h2>
          <p className='text-lg font-semibold'>Legislação Aplicada: </p>
          </div>
        </div> 
    </div>
  )
}
