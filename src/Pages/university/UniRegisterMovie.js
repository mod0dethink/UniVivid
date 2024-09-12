import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import images from '../../assets/images'
import HeaderLogo from '../../components/layout/layouts'
import UniSidebar from '../../components/common/UniSidebar'
import Input from '../../components/common/Input'
import FormButton from '../../components/common/formBotton'

const UniRegisterMovie = () => {
  const now = new Date()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [univid, setUnivid] = useState('')
  const [thumbnail, setThumbnail] = useState('') // 画像のURLを状態として管理
  const formattedDate = now.toISOString() // ISO 8601形式に変換
  const [formData, setFormData] = useState({
    univ_id: 1,
    category_id: 1,
    url: '',
    upload_time: formattedDate,
    thumbnail: '', // 新しいフィールド
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
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      setFile(selectedFile)
      const reader = new FileReader()
      reader.onloadend = () => {
        const imageUrl = reader.result
        setThumbnail(imageUrl) // 画像のURLを状態に設定
        setFormData((prevData) => ({
          ...prevData,
          thumbnail: imageUrl.split(',')[1], // Base64エンコードされた画像データ
        }))
      }
      reader.readAsDataURL(selectedFile) // Base64エンコード
    }
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
    formData.category_id = parseInt(formData.category_id, 10)

    console.log(formData)

    navigate('/uniconfirmmovie', { state: { formData } })
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
        <div className="w-[1030px] h-[360px] bg-[#f5f5f5] flex flex-col justify-center items-center">
          <label className="flex flex-col justify-center items-center h-full">
            {thumbnail ? (
              <img src={thumbnail} alt="Selected thumbnail" width="200px" />
            ) : (
              <img src={images.ImportPng} alt="upfile" width="200px" />
            )}
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
