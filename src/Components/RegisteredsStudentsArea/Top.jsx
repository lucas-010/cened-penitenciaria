import React from 'react'
import {FaListAlt, FaSearch} from 'react-icons/fa'

export default function Top() {
  return (
    <div>
        <div className='flex items-center justify-center p-6'>
            <FaListAlt size={70} color='#6e7879'/>
            <h1 className='text-4xl font-bold text-[#6e7879]'>Cadastro de Alunos</h1>
        </div>

        <div className='p-6 lg:ml-20 text-white flex flex-col items-center text-sm lg:flex-row font-bold'>
            <button className='p-4 mr-0 lg:mr-10 rounded-lg hover:bg-blue-400 w-3/4 lg:w-44 md:w-60 transition-colors bg-blue-600'>Alunos Cadastrados</button>
            <button className='p-4 mr-0 lg:mr-10 rounded-lg hover:bg-blue-600 mt-10 lg:mt-0 bg-blue-400 transition-colors'>Relatório de Alunos e Cursos por Situação</button>
        </div>

        <div className='p-6 mt-0 m-auto flex flex-col justify-center items-center lg:flex-row w-11/12'>
            <div className='w-11/12 lg:w-1/2'>
                <input placeholder='Nome do Interno ou Solicitante' className='border-4 rounded-md focus:border-gray-500 w-full p-4 border-blue-500 outline-none' type="text" />
            </div>

            <div className='w-11/12 lg:w-1/2 flex items-center flex-col lg:flex-row'>
                <input placeholder='CPF do Interno ou Solicitante' className='border-4 rounded-md focus:border-gray-500 w-full p-4 border-blue-500 lg:ml-10 ml-0 mt-10 lg:mt-0 outline-none' type="text" />

                <div className='bg-blue-500 hover:bg-gray-500 mt-5 lg:mt-0 transition-colors p-4 flex items-center text-white ml-0 lg:ml-5 rounded-full'>
                    <FaSearch size={30}/>
                </div>
            </div>
        </div>
    </div>
  )
}
