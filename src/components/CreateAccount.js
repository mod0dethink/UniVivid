import React from 'react'
import '../assets/styles/UnivividStyle.css'
import { EmptyHeader, Unifooter, UnivividHeader } from './LayoutComponent'

import {
  LoginForm,
  CreateAccountForm,
  CreateUniAccountForm,
} from './GateMaterial'

function CreateAccount() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <UnivividHeader title="新規登録" />
      <CreateAccountForm />
      <Unifooter />
    </div>
  )
}

function CreateSchoolAccount() {
  return (
    <div className="from-container">
      <UnivividHeader title="新規登録" />

      <CreateUniAccountForm />

      <Unifooter />
    </div>
  )
}

export default CreateAccount
export { CreateSchoolAccount }
