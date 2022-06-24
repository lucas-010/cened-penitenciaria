import React from 'react'
import Bottom from '../Components/LoginArea/Bottom'
import Header from '../Components/LoginArea/Header'
import LoginAccess from '../Components/LoginArea/LoginAccess'
import SubBottom from '../Components/LoginArea/SubBottom'
import Top from '../Components/LoginArea/Top'

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
