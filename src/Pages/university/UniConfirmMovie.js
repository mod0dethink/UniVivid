import React from 'react'
import { useNavigate } from 'react-router-dom'

import images from '../../assets/images'
import HeaderLogo from '../../components/layout/layouts'
import UniSidebar from '../../components/common/UniSidebar'
import Input from '../../components/common/Input'
import FormButton from '../../components/common/formBotton'

const UniConfirmMovie = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/unipostedmovielist')
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen w-[100vw] space-y-[50px]">
      <HeaderLogo />
      <UniSidebar />
      <div className="text-center">
        <p className="text-[50px]">動画確認</p>
        <p className="text-[20px]">投稿する動画の確認</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center space-y-[30px]"
      >
        <div className="w-[1030px] h-[360px] bg-[#f5f5f5]"></div>
        <Input label="動画URL" name="movieurl" type="url" />
        <FormButton text="投稿する" />
      </form>
    </div>
  )
}

export default UniConfirmMovie
