import React, { useState } from 'react'
import Filters from '../Components/Manager/Filters'
import Header from '../Components/Manager/Header'
import Table from '../Components/Manager/TableContent'
import Title from '../Components/Manager/Title'

export default function Manager() {
  const [searchValueChange, setSearchValueChange] = useState('')
  const searchEnter = (value)=>{
    setSearchValueChange(value)
  }
  return (
    <div className=''>
        <Header/>
        <Title/>
        <Filters searchEnter={searchEnter}/>
        <Table searchValueChange={searchValueChange}/>
    </div>
  )
}
