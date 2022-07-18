import React from 'react'
import Filters from '../Components/Manager/Filters'
import Header from '../Components/Manager/Header'
import Table from '../Components/Manager/TableContent'
import Title from '../Components/Manager/Title'

export default function Manager() {
  return (
    <div className=''>
        <Header/>
        <Title/>
        <Filters/>
        <Table/>
    </div>
  )
}
