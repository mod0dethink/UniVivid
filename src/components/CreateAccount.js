import React, { useState } from 'react'
import '../assets/styles/UnivividStyle.css'
import { EmptyHeader, Unifooter, UnivividHeader } from './LayoutComponent'
import axios from 'axios'
import {
  LoginForm,
  CreateAccountForm,
  CreateUniAccountForm,
} from './GateMaterial'

function CreateAccount() {
  const [formData, setFormData] = useState({
    mailaddress: '',
    password: '',
    username: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:8080/auth/register',
        {
          type: 'user',
          ...formData,
        },
        { withCredentials: true },
      )
      alert(response.data.message)
    } catch (error) {
      alert('ユーザーアカウントの登録に失敗しました')
    }
  }

  return (
    <div className="h-screen flex flex-col justify-between">
      <UnivividHeader title="新規登録" />
      <CreateAccountForm />
      <Unifooter />
    </div>
  )
}

function CreateSchoolAccount() {
  const [formData, setFormData] = useState({
    mailaddress: '',
    password: '',
    username: '',
    univname: '',
    univurl: '',
    donateurl: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:8080/auth/register',
        {
          type: 'university',
          ...formData,
        },
        { withCredentials: true },
      )
      alert(response.data.message)
    } catch (error) {
      alert('大学アカウントの登録に失敗しました')
    }
  }

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
