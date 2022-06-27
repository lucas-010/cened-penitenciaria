import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StudentComponent from './StudentComponent'
const api = process.env.REACT_APP_API_KEY

export default function Table() {
    const [allStudents, setAllStudents] = useState([])
    useEffect(()=>{
        axios.get(`${api}/alunos?page=1`).then(response=>{
            setAllStudents(response.data.data)
        })
    }, [])
  return (
    <div className='w-11/12 border-4 mb-5 p-4 rounded-lg mt-5 m-auto border-blue-500'>
        <div className='lg:flex hidden justify-between text-2xl p-4'>
            <p className='w-1/2'>NOME</p>
            <p className='w-1/3 -ml-10'>CPF</p>
            <p className='w-1/3 -ml-10'>PREPOSTO</p>
        </div>
        {allStudents.map((student, key)=>{
            return(
                <StudentComponent key={key} student={student}/>
            )
        })}
    </div>
  )
}
