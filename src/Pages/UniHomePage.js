import React, { useRef, useState } from 'react'

import Door from '../assets/images/door.png'
import { Link } from 'react-router-dom'
import {
  UserMenu,
  RootUrl,
  InputField,
  ProfileImageEditor,
  SaveBtn,
} from '../components/MaterialComponent'
import { WhiteHeader } from '../components/LayoutComponent'

import '../assets/styles/Dimensions.css'

import axios from 'axios'

import ImportImg from '../assets/images/imgImport.png'
import ReturnImg from '../assets/images/return.png'
import Imagepng from '../assets/images/IMG_4007.jpg'
import '../assets/styles/Dimensions.css'
/*
path変数一覧
  Pimage=プロフィール画像
 */
let ProImg = Imagepng
let linkpath = '/unisetting'
let returnpath = '/unihome'
let username = '瀬那通信大学'

function UniHomePage() {
  const Door1 = Door

  return (
    <div className="flex w-[100vw] h-screen">
      <UserMenu username={username} linkpath={linkpath} Pimage={ProImg} />
      <section className="main flex-grow-[7] flex content-center  h-screen ">
        <div className="flex flex-col justify-center space-y-20 w-[100%] text-center items-center ">
          <RootUrl name={Door1} text={'記事作成画面'} />
          <RootUrl name={Door1} text={'公開記事一覧'} />
        </div>
      </section>
    </div>
  )
}

{
  /* 
  設定変数一覧
  returnpath=戻るボタンのパス
  */
}
function UniSettingsPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.put(
        'http://localhost:8080/auth/profile',
        {
          type: 'user', // ここは大学用のコンポーネントでuniversityに変える
          mailaddress: email,
          username: username,
          password: password,
        },
        { withCredentials: true },
      ) // withCredentials を追加
      alert(response.data.message)
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  return (
    <div>
      <form
        className="items-center flex flex-col justify-around text-center h-screen"
        onSubmit={handleSubmit}
      >
        <WhiteHeader retunrpath={returnpath} />
        <ProfileImageEditor Pimage={ProImg} />

        <section className="w-[60vw] , text-left text-[#427D9D] space-y-5 max-w-[800px]">
          <InputField
            label="ユーザー名"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            label="メールアドレス"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="パスワード"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField label="学校名" type="text" value={null} />
          <InputField label="大学URL" type="text" value={null} />
          <InputField label="寄付用ページURL" type="text" value={null} />
        </section>
        <SaveBtn />
      </form>
    </div>
  )
}

export { UniHomePage, UniSettingsPage }
