import React from 'react'
import Bottom from './Bottom'
import Header from './Header'
import LoginAccess from './LoginAccess'
import SubBottom from './SubBottom'
import Top from './Top'

export default function LoginHome() {
  return (
    <div className='bg-gray-200'>
      <Header/>
      <Top/>
      <LoginAccess/>
      <Bottom/>
      <SubBottom/>
    </div>
  )
}
