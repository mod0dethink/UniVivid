//インポート
import React, { useState, useContext, useEffect } from 'react'
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
  const { setRegisterPath, setUsername } = useContext(UsernameContext) // 修正: コンテキストから値を取得

  const handleClick = (e) => {
    e.preventDefault()
    setSwapped(!swapped)
  }
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    MailAddress: '',
    Password: '',
    Type: '',
  })
  const inputValue = [
    { type: 'email', name: 'MailAddress', label: 'Email' },
    { type: 'password', name: 'Password', label: 'Password' },
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
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const handleSubmit = async (event) => {
    event.preventDefault()

    // Type を設定
    const updatedFormData = {
      ...formData,
      Type: swapped ? 'university' : 'user',
    }

    setRegisterPath(swapped)

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        credentials: 'include', // クッキー
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      })

      if (!response.ok) {
        throw new Error(
          'サーバーエラー: ' + (response.statusText || '不明なエラー'),
        )
      }

      const data = await response.json()
      console.log('ログインが成功しました:', data)

      // ユーザー名を取得
      const usernameResponse = await fetch(
        'http://localhost:8080/auth/username',
        {
          method: 'GET',
          credentials: 'include', // クッキーを含める設定
        },
      )

      if (!usernameResponse.ok) {
        throw new Error('Network response was not ok')
      }

      const usernameData = await usernameResponse.json()
      setUsername(usernameData.username) // 正しく username をセット

      // 画面遷移
      if (swapped) {
        navigate('/unihome')
      } else {
        navigate('/userhome')
      }
    } catch (error) {
      console.error('ログインが失敗しました:', error)
      setError(error.message)
      setSuccess(false)
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
              {error && (
                <p className="text-red-500">
                  メールアドレスまたはユーザー名が間違っています。
                </p>
              )}
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
              {error && (
                <p className="text-red-500">
                  メールアドレスまたはユーザー名が間違っています。
                </p>
              )}
            </div>
            <FormButton text="ログイン" />
          </form>
        </>
      )}
    </section>
  )
}

export default LoginPage
