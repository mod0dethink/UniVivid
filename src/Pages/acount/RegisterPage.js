// インポート
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// コンポーネント
import HeaderLogo from '../../components/layout/layouts'
import Input from '../../components/common/Input'
import FormButton from '../../components/common/formBotton'
import { UsernameContext } from '../../Contexts/UsernameContext'

// 個人のアカウント登録フォーム
function RegisterPage() {
  const navigate = useNavigate('')
  const { setUsername, setRegisterPath } = useContext(UsernameContext) // 修正: コンテキストから値を取得

  const [formData, setFormData] = useState({
    email: '',
    pass: '',
    username: '',
  })

  const inputValue = [
    { type: 'email', name: 'email', label: 'Email' },
    { type: 'password', name: 'pass', label: 'Password' }, // 修正: name属性と一致するように変更
    { type: 'text', name: 'username', label: 'Username' },
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
    setRegisterPath(false)
    navigate('/category') // 修正: 画面遷移先を修正
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
          <p>個人用アカウントの作成</p>
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
        <FormButton text="登録" /> {/* 修正: onSubmitを追加 */}
      </form>
    </section>
  )
}

export default RegisterPage
