import React from 'react'
import { useNavigate } from 'react-router-dom'

import images from '../../assets/images'
import HeaderLogo from '../../components/layout/layouts'
import UniSidebar from '../../components/common/UniSidebar'
import Input from '../../components/common/Input'
import FormButton from '../../components/common/formBotton'

const UniRegisterMovie = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/uniconfirmmovie')
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
            <input className="hidden" type="file" name="upNote" />
          </label>
        </div>
        <Input label="動画URL" name="movieurl" type="url" />
        <FormButton text="確認する" />
      </form>
    </div>
  )
}

export default UniRegisterMovie
