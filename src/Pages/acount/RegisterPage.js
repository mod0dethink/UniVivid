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
    Type: 'user',
    Username: '',
    MailAddress: '',
    Password: '',
  })

  const inputValue = [
    { type: 'email', name: 'MailAddress', label: 'Email' },
    { type: 'password', name: 'Password', label: 'Password' },
    { type: 'text', name: 'Username', label: 'Username' },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setUsername(formData.Username)
    setRegisterPath(false)

    try {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        credentials: 'include', // クッキー
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const text = await response.text()
      console.log('デバッグ用、レスポンス:', text)

      let data
      try {
        data = JSON.parse(text)
      } catch (error) {
        console.error('JSONのエラー:', error)
        throw new Error('JSON応答が無効')
      }

      if (!response.ok) {
        throw new Error(`サーバーエラー: ${data.error || '知らんけどエラー'}`)
      }

      console.log('登録が成功しました:', data)
      setSuccess(true)
      setError(null)
      navigate('/category')
    } catch (error) {
      console.error('登録が失敗しました:', error)
      setError(error.message)
      setSuccess(false)
    }
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
          {error && (
            <p className="text-red-500">
              メールアドレスが既に使用されています。
            </p>
          )}
        </div>
        <FormButton text="登録" />
      </form>
    </section>
  )
}

export default RegisterPage
