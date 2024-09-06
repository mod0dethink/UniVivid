//インポート
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
//component

import Input from '../../components/common/Input'
import HeaderLogo from '../../components/layout/layouts'
import FormButton from '../../components/common/formBotton'
import images from '../../assets/images'
import { UsernameContext } from '../../Contexts/UsernameContext'

//ログインフォーム
function LoginPage() {
  const [swapped, setSwapped] = useState(false) //falseの時学生のログインフォーム
  const { setRegisterPath } = useContext(UsernameContext) // 修正: コンテキストから値を取得

  const handleClick = (e) => {
    e.preventDefault()
    setSwapped(!swapped)
  }
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
    setRegisterPath(swapped)
    if (swapped === true) {
      navigate('/unihome')
    } else {
      navigate('/userhome')
    }
  }
  return (
    <section className="bg-[#DDF2FD] h-screen flex items-center justify-around">
      <HeaderLogo />
      {swapped === false ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="bg-[#fff] w-[700px] min-h-[700px] flex flex-col items-center justify-evenly rounded-[50px]"
          >
            <div>
              {' '}
              <p className="text-[50px] font-bold">ログイン</p>
              <p className="text-[20px] font-bold">学生のログインフォーム</p>
            </div>
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
          <div className="flex flex-col justify-center items-center space-y-[30px]">
            <img src={images.User} alt="user" className="h-[300px]" />
            <FormButton text="大学としてログイン" onSubmit={handleClick} />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center space-y-[30px]">
            <img src={images.School} alt="Scool" className="h-[300px]" />
            <FormButton text="学生としてログイン" onSubmit={handleClick} />
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-[#fff] w-[700px] min-h-[700px] flex flex-col items-center justify-evenly rounded-[50px]"
          >
            <div>
              <p className="text-[50px] font-bold">ログイン</p>
              <p className="text-[20px] font-bold">大学側のログインフォーム</p>
            </div>
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
        </>
      )}
    </section>
  )
}

export default LoginPage
