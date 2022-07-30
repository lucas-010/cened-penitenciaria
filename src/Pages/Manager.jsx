import React, { useState } from 'react'
import Filters from '../Components/Manager/Filters'
import Header from '../Components/Manager/Header'
import Table from '../Components/Manager/TableContent'
import Title from '../Components/Manager/Title'

export default function Manager() {
  const [searchValueChange, setSearchValueChange] = useState('')
  const [statusCourseChange, setStatusCourseChange] = useState('')
  const [date1, setDate1] = useState('')
  const [date2, setDate2] = useState('')
  const [date3, setDate3] = useState('')
  const [date4, setDate4] = useState('')
  const searchEnter = (value)=>{
    setSearchValueChange(value)
    setDate1('')
    setDate2('')
    setDate3('')
    setDate4('')
  }
  const filterData = (d1, d2, d3, d4, statusCourse)=>{
    d1 !== '' ? setDate1(new Date(d1).toLocaleDateString('en-us')) : setDate1('')
    d2 !== '' ? setDate2(new Date(d2).toLocaleDateString('en-us')) : setDate2('')
    d3 !== '' ? setDate3(new Date(d3).toLocaleDateString('en-us')) : setDate3('')
    d4 !== '' ? setDate4(new Date(d4).toLocaleDateString('en-us')) : setDate4('')
    setSearchValueChange('')
    setStatusCourseChange(statusCourse)
  }
  return (
    <div className=''>
        <Header/>
        <Title/>
        <Filters filterData={filterData} searchEnter={searchEnter}/>
        <Table statusCourse={statusCourseChange} date1={date1} date2={date2} date3={date3} date4={date4} searchValueChange={searchValueChange}/>
    </div>
  )
}
