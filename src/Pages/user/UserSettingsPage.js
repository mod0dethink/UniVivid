//インポート
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
//component
import UniSidebar from '../../components/common/UniSidebar.js'
import HeaderLogo from '../../components/layout/layouts'
import Input from '../../components/common/Input.js'
import FormButton from '../../components/common/formBotton'
import { UsernameContext } from '../../Contexts/UsernameContext'

//セッティングページ
function UserSettingsPage() {
  const navigate = useNavigate()
  const { setUsername } = useContext(UsernameContext)

  const [formData, setFormData] = useState({
    MailAddress: '',
    Password: '',
    Username: '',
    Type: 'user',
  })

  const inputValue = [
    { type: 'email', name: 'MailAddress', label: 'Email' },
    { type: 'text', name: 'Username', label: 'Username' },
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
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formData)
    try {
      const response = await fetch('http://localhost:8080/auth/profile', {
        method: 'PUT',
        credentials: 'include', // クッキー
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(`サーバーエラー: ${data.error || '知らんけどエラー'}`)
      }

      console.log('登録が成功しました:', data)
      setSuccess(true)
      setError(null)
      setUsername(formData.Username)
    } catch (error) {
      console.error('登録が失敗しました:', error)
      setError(error.message)
      setSuccess(false)
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        userImg: file,
      }))
    }
  }

  return (
    <div className="w-[100vw] h-screen flex flex-col justify-center items-center space-y-[20px]">
      <UniSidebar />
      <HeaderLogo />
      <div className="text-center">
        <p className="text-[50px]">ユーザー設定</p>
        <p>個人用アカウント編集</p>
        {success && <p className="text-green-500">更新に成功しました</p>}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center space-y-[50px]"
      >
        <label
          htmlFor="userImgUpload"
          className="flex flex-col items-center justify-center  w-[150px] h-[150px] bg-[#CCCCCC] rounded-[50%] overflow-hidden"
        >
          {' '}
          {/* 修正: htmlFor属性を追加 */}
          <img
            src={formData.userImg ? URL.createObjectURL(formData.userImg) : ''}
            alt="ユーザー画像" // 修正: alt属性を追加
            className="object-cover" // サイズを設定
          />
          <input
            id="userImgUpload" // 修正: id属性を追加してhtmlForと関連付け
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
        <div>
          {inputValue.map(({ type, name, label }) => (
            <Input
              key={name}
              type={type}
              name={name}
              label={label}
              value={formData[name]}
              onChange={handleChange}
            />
          ))}
        </div>
        <FormButton text="保存" />
      </form>
    </div>
  )
}

export default UserSettingsPage
