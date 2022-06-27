import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {MdExpandMore} from 'react-icons/md'

export default function StudentComponent({student}) {
  const api = process.env.REACT_APP_API_KEY
  const [courses, setCourses] = useState([])
  useEffect(()=>{
    axios.get(`${api}documentos/consultas/matriculas?IdAluno=${student.id}`).then(response=>{
      let studentObjects = response.data
      let coursesProvisory = []
      studentObjects.forEach((st)=>{
        coursesProvisory.push(st.curso)
        setCourses(coursesProvisory)
      })
    })
  }, [])
  return (
    <div className='lg:text-xl text-sm border-4 mt-5 rounded-lg p-4 font-bold'>
        <div className='flex lg:justify-between lg:flex-row flex-col items-start lg:items-center'>
          <div className='flex w-full lg:w-1/2 items-center'>
              <FaUserCircle size={40} color='black'/>
              <p className='ml-2'>{student.nome}</p>
          </div>

          <div className='w-full ml-11 lg:ml-0 py-2 lg:w-1/3'>
              <p className='flex'> <span className='block lg:hidden'>CPF: </span>{student.cpf}</p>
          </div>

          <div className='w-full ml-11 lg:ml-0 lg:w-1/3'>
              <p>{student.nomePreposto}</p>
          </div>

          <MdExpandMore className='mt-0 m-auto' size={45} color='black'/>
        </div>

        <div className='mt-5 ml-11'>
          {courses.map((course, key)=>{
            return(
              <div key={key}>
                <p key={key}>{course.codigo} - {course.nome}</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}
