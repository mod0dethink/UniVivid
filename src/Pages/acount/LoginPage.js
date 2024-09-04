//インポート
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//component

import Input from '../../components/common/Input'
import HeaderLogo from '../../components/layout/layouts'
import FormButton from '../../components/common/formBotton'

//ログインフォーム
function LoginPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
  })
  const inputValue = [
    { type: 'email', name: 'email', label: 'Email' },
    { type: 'password', name: 'password', label: 'Password' },
  ]
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    navigate('/userhome')
  }
  return (
    <section className="bg-[#DDF2FD] h-screen flex flex-col items-center justify-center">
      <HeaderLogo />
      <form
        onSubmit={handleSubmit}
        className="bg-[#fff] w-[700px] min-h-[700px] flex flex-col items-center justify-evenly rounded-[50px]"
      >
        <p className="text-[50px] font-bold">ログイン</p>
        <div className="flex flex-col space-y-[20px]">
          {inputValue.map(({ name, type, label }) => (
            <Input
              key={name}
              name={name}
              type={type}
              label={label}
              value={formData[name]}
              onChange={handleChange}
            />
          ))}
        </div>
        <FormButton text="ログイン" />
      </form>
    </section>
  )
}

export default LoginPage
