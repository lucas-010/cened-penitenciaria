import React from 'react'
import Bottom from './Bottom'
import Header from './Header'
import LoginAccess from './LoginAccess'
import Top from './Top'

export default function LoginHome() {
  return (
    <div>
      <Header/>
      <Top/>
      <LoginAccess/>
      <Bottom/>
    </div>
  )
}
