import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//component
import HeaderLogo from '../../components/layout/layouts'
import UniSidebar from '../../components/common/UniSidebar'
import images from '../../assets/images'
import Input from '../../components/common/Input'
import FormButton from '../../components/common/formBotton'

//　記事作成画面
const LectureEdite = () => {
  const navigate = useNavigate()
  const inputValue = [
    { type: 'text', name: 'lecturename', label: '講義名' },
    { type: 'text', name: 'teacher', label: '講師' },
    { type: 'date', name: 'date', label: '日付' },
    { type: 'url', name: 'applyurl', label: '申込URL' },
    { type: 'text', name: 'genre', label: 'ジャンル' },
  ]

  const [formData, setFormData] = useState({
    lecturename: '',
    teacher: '',
    date: '',
    applyurl: '',
    genre: '',
    themecolor: '',
    upNote: null,
    otherText: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
    navigate('/createchecked', { state: { formData } })
    // ここでformDataをバックエンドに送信するなどの処理を行います。
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        upNote: file, // 画像ファイルをformDataに格納
      }))
    }
  }

  return (
    <form
      className="w-[100vw] h-screen flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <UniSidebar />
      <HeaderLogo />
      <div className="text-center">
        <p className="text-[50px]">記事作成</p>
        <p className="text-[20px]">投稿する記事の作成</p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-[20px]">
        <div className="bg-[#f5f5f5] flex flex-col justify-center items-center w-[1030px] h-[360px]">
          <img src="" alt="img" />
        </div>
        <div className="flex w-full space-x-[20px] ">
          <div className="grid grid-cols-2 gap-[20px]">
            {inputValue.map(({ type, name, label }, index) => (
              <Input
                key={index}
                type={type}
                name={name}
                label={label}
                onChange={handleChange}
                value={formData[name]} // formDataの値をバインド
              />
            ))}
          </div>
          <div>
            <p>講義内容</p>
            <input
              className="bg-[#E4E4E4] h-[200px] w-[460px] rounded-[20px]"
              type="text"
              name="otherText"
              onChange={handleChange}
              value={formData.otherText} // formDataの値をバインド
            />
          </div>
        </div>
        <FormButton text="確認する" />
      </div>
    </form>
  )
}

export default LectureEdite
