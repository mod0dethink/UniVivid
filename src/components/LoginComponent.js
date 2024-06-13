import React from 'react'
import '../assets/styles/UnivividStyle.css'
import {
  Unifooter,
  EmptyHeader,
  UnivividHeader,
} from '../components/LayoutComponent'

import { LoginForm } from './GateMaterial'

function LoginComponent() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <UnivividHeader title="ログイン" />

      <LoginForm />

      <Unifooter />
    </div>
  )
}

export default LoginComponent
