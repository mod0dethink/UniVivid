//インポート
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
//component
import HeaderLogo from '../../components/layout/layouts'
import Input from '../../components/common/Input'
import FormButton from '../../components/common/formBotton'
import { UsernameContext } from '../../Contexts/UsernameContext'

//学校用登録フォーム
function UniRegisterPage() {
  const navigate = useNavigate('')
  const { setUsername, setRegisterPath } = useContext(UsernameContext)

  const [formData, setFormData] = useState({
    email: '',
    pass: '',
    username: '',
  })
  const inputValue = [
    { type: 'email', name: 'email', label: 'Email' },
    { type: 'password', name: 'password', label: 'Password' },
    { type: 'text', name: 'username', label: 'Username' },
    { type: 'text', name: 'uniname', label: '学校名' },
    { type: 'url', name: 'uniurl', label: '大学URL' },
    { type: 'url', name: 'unidonate', label: '寄付ページURL' },
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
    setUsername(formData.username) // 修正: ユーザー名をコンテキストに保存
    setRegisterPath('/unihome')
    navigate('/registerwelcom')
  }
  return (
    <section className="bg-[#DDF2FD] h-screen flex flex-col items-center justify-center">
      <HeaderLogo />
      <form
        onSubmit={handleSubmit}
        className="bg-[#fff] w-[700px] min-h-[700px] flex flex-col items-center justify-evenly rounded-[50px]"
      >
        <div>
          <p className="text-[50px] font-bold">新規登録</p>
          <p>大学用アカウントの作成</p>
        </div>
        <div className="flex flex-col space-y-[10px]">
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
        <FormButton text="登録" />
      </form>
    </section>
  )
}

export default UniRegisterPage
