//インポート
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
//component
import UniSidebar from '../../components/common/UniSidebar.js'
import HeaderLogo from '../../components/layout/layouts'
import Input from '../../components/common/Input.js'
import FormButton from '../../components/common/formBotton'
import images from '../../assets/images.js'
//セッティングページ
function UserSettingsPage() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    userImg: null,
  })

  const inputValue = [
    { type: 'text', name: 'username', label: 'Username' },
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('type', 'user')
      formDataToSend.append('mailaddress', formData.email)
      formDataToSend.append('username', formData.username)
      formDataToSend.append('password', formData.password)
      if (formData.userImg) {
        formDataToSend.append('userImg', formData.userImg)
      }

      const response = await axios.put(
        'http://localhost:8080/auth/profile',
        formDataToSend,
        { withCredentials: true },
      )
      alert(response.data.message)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error)
      } else {
        alert('エラーが発生しました。')
      }
    }
    navigate('/userhome')
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
