import React, { useState } from 'react'
import axios from 'axios'

import '../assets/styles/UnivividStyle.css'
import {
  Unifooter,
  EmptyHeader,
  UnivividHeader,
} from '../components/LayoutComponent'

import { LoginForm } from './GateMaterial'

function LoginComponent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [accountType, setAccountType] = useState('user') // デフォルトを 'user' に設定

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/auth/login',
        {
          type: accountType, // select の値に基づいて設定
          mailaddress: email,
          password: password,
        },
        { withCredentials: true },
      ) // withCredentials を追加
      alert(response.data.message)
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  return (
    <div className="h-screen flex flex-col justify-between">
      <UnivividHeader title="ログイン" />
      <LoginForm />
      <Unifooter />
    </div>
  )
}

export default LoginComponent
