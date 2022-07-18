import React from 'react'
import {Link} from 'react-router-dom'

export default function LoginAccess() {
  return (
    <div className='bg-[#012060] flex items-center justify-center w-screen p-6'>
        <div className='flex lg:flex-row md:flex-row flex-col'>
            <div className=''>
                <label htmlFor="user-name" className='text-xl font-bold text-white'>Usuário</label> <br />
                <input placeholder='Nome de Usuário' id='user-name' type="text" className='p-2 outline-none lg:w-96 w-11/12 md:w-80 border-4 rounded-lg border-green-500'/>
            </div>

            <div className='mt-10 lg:mt-0 md:mt-0 lg:ml-10 md:ml-10'>
                <label htmlFor="user-password" className='text-xl font-bold text-white'>Senha</label> <br />
                <input placeholder='Senha' id='user-password' type="password" className='p-2 outline-none border-4 lg:w-96 md:w-80 w-11/12 rounded-lg border-green-500'/>
            </div>
            
              <button className='text-xl mt-5 md:ml-10 lg:ml-10 text-white border-4 px-4 rounded-lg hover:bg-green-500 transition-colors font-medium border-green-500'>
                <Link to={'/matriculas'}>
                  Acessar
                </Link>
              </button>
        </div>
    </div>
  )
}
