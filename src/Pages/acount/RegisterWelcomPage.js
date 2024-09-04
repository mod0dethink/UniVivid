//インポート
import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
//component
import HeaderLogo from '../../components/layout/layouts.js'
import FormButton from '../../components/common/formBotton.js'
import images from '../../assets/images.js'
import { UsernameContext } from '../../Contexts/UsernameContext.js'

//新規登録完了の画面
function RegisterWelcomPage() {
  const navigate = useNavigate('')
  const { username } = useContext(UsernameContext)
  const handleSubmit = (event) => {
    event.preventDefault()

    navigate('/LogoViwer1')
  }
  return (
    <div className="w-[100vw] h-screen flex justify-around items-center">
      <HeaderLogo />
      <section className="text-[36px] font-bold space-y-[50px]">
        <img src={images.WebImage2} alt="weimage2" width="400px" />
        <p>
          登録が完了しました。
          <br />
          こんにちは、<span className="text-[#427D9D]">{username}</span>さん
        </p>
      </section>
      <section>
        <FormButton text="UniVividへ進む>>" onSubmit={handleSubmit} />
      </section>
    </div>
  )
}

export default RegisterWelcomPage
