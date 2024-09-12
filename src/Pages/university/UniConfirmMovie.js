//インポート
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import images from '../../assets/images'
import HeaderLogo from '../../components/layout/layouts'
import UniSidebar from '../../components/common/UniSidebar'
import Input from '../../components/common/Input'
import FormButton from '../../components/common/formBotton'

const UniConfirmMovie = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const { formData } = location.state || {} // 前のページから渡されたデータを取得

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)

    fetch('http://localhost:8080/api/upload-video', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`アップロードに失敗しました: ${text}`)
          })
        }
        navigate('/unipostedmovielist')
      })
      .catch((error) => {
        console.error('アップロードエラー:', error)
      })
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-[100vw] space-y-[50px]">
      <HeaderLogo />
      <UniSidebar />
      <div className="text-center">
        <p className="text-[50px]">動画確認</p>
        <p className="text-[20px]">投稿する動画の確認</p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-[30px]">
        <img
          src={`data:image/jpeg;base64,${formData.thumbnail}`}
          alt={'サムネ'}
          className="w-[1030px] h-[360px] bg-[#f5f5f5] object-cover"
        />
        <div>
          <p className="text-20px">動画URL</p>
          <p className="bg-[#E4E4E4] h-[45px] w-[460px] rounded-[20px]">
            {formData.url}
          </p>
        </div>
        <div>
          <p className="text-20px">カテゴリーID</p>
          <p className="bg-[#E4E4E4] h-[45px] w-[460px] rounded-[20px]">
            {formData.category_id}
          </p>
        </div>
        <FormButton text="投稿する" onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default UniConfirmMovie
