//インポート
import React, { useState } from 'react'
//component

import Input from '../../components/common/Input'
import HeaderLogo from '../../components/layout/layouts'
import FormButton from '../../components/common/formBotton'

//ログインフォーム
function LoginPage() {
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
  return (
    <section className="bg-[#DDF2FD] h-screen flex flex-col items-center justify-center">
      <HeaderLogo />
      <form className="bg-[#fff] w-[700px] min-h-[700px] flex flex-col items-center justify-evenly rounded-[50px]">
        <p className="text-[50px] font-bold">ログイン</p>
        <div className="mb-4">
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
