import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import images from '../../assets/images'
import HeaderLogo from '../../components/layout/layouts'
import UniSidebar from '../../components/common/UniSidebar'
import Input from '../../components/common/Input'
import FormButton from '../../components/common/formBotton'

const UniRegisterMovie = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [univid, setUnivid] = useState('')
  const [formData, setFormData] = useState({
    univ_id: 1,
    category_id: 1,
    url: '',
    upload_time: '2023-10-01 10:00:00',
  })
  const [file, setFile] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  useEffect(() => {
    fetch('http://localhost:8080/auth/univid', {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setUnivid(data.username)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    formData.category_id = parseInt(formData.category_id, 10) // ここで整数に変換

    console.log(formData)
    if (!file) {
      alert('ファイルを選択してください')
      return
    }

    const uploadData = new FormData()
    uploadData.append('url', formData.url)
    uploadData.append('category_id', formData.category_id)
    uploadData.append('univ_id', univid)

    fetch('http://localhost:8080/api/upload-video', {
      method: 'POST',
      body: uploadData,
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('アップロードに失敗しました')
        }
        alert('ファイルが正常にアップロードされました')
        navigate('/uniconfirmmovie')
      })
      .catch((error) => {
        console.error('アップロードエラー:', error)
        alert('ファイルのアップロードに失敗しました')
      })
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-[100vw] space-y-[50px]">
      <HeaderLogo />
      <UniSidebar />
      <div className="text-center">
        <p className="text-[50px]">動画作成</p>
        <p className="text-[20px]">投稿する動画の作成</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center space-y-[30px]"
      >
        <div className="w-[1030px] h-[360px] bg-[#f5f5f5]">
          <label className="flex flex-col justify-center items-center h-full">
            <img src={images.ImportPng} alt="upfile" width="200px" />
            <p className="text-[30px] font-bold text-[#b8b8b8]">
              画像をアップロード
            </p>
            <input
              className="hidden"
              type="file"
              name="file"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <Input label="動画URL" name="url" type="url" onChange={handleChange} />
        <Input
          label="ジャンル"
          name="category_id"
          type="number"
          onChange={handleChange}
        />
        <FormButton text="確認する" />
      </form>
    </div>
  )
}

export default UniRegisterMovie
