import React, { useRef, useState } from 'react'
import axios from 'axios'

import Door from '../assets/images/door.png'
import { Link } from 'react-router-dom'
import {
  UserMenu,
  RootUrl,
  InputField,
  ProfileImageEditor,
  SaveBtn,
  ReturnBtn,
  WhiteReturnBtn,
} from '../components/MaterialComponent'
import { UnivividHeader, WhiteHeader } from '../components/LayoutComponent'

import '../assets/styles/Dimensions.css'

import Imagepng from '../assets/images/IMG_4007.jpg'
import '../assets/styles/Dimensions.css'
/*
path変数一覧
  ProImg=プロフィール画像
  likpath
 */

/*------ユーザーのデータ変数------*/
let username = '瀬那通信大学' //ログインアカウントのユーザーネーム
let ProImg = Imagepng //プロフィール画像
/*------Linkパス------*/
let settinglinkpath = '/unisetting' //ユーザーメニュー画面へのLinkパス
let returnpath = '/unihome' //戻るボタンのLinkパス
let mypagepath = '/unimypage' //マイページのLinkパス
let articlepath = '/userarticlelist' //記事一覧へのLinkパス

//大学側のホームページ
function UniHomePage() {
  const Door1 = Door

  return (
    <div className="flex w-[100vw] h-screen">
      {/*ユーザーのメニュー*/}
      <UserMenu
        username={username}
        settingpath={settinglinkpath}
        Pimage={ProImg}
      />
      {/*記事メニュー*/}
      <section className="main flex-grow-[7] flex content-center  h-screen ">
        <div className="flex flex-col justify-center space-y-20 w-[100%] text-center items-center ">
          <RootUrl name={Door1} text={'記事作成画面'} />
          <RootUrl name={Door1} text={'公開記事一覧'} />
        </div>
      </section>
    </div>
  )
}
//セッティングページ
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
        {/*header*/}
        <WhiteHeader retunrpath={returnpath} />
        {/*変更可能なプロフィール画像*/}
        <ProfileImageEditor Pimage={ProImg} />

        {/*セッティングフォーム*/}
        <section className="w-[60vw] text-left text-[#427D9D] space-y-5 max-w-[800px]">
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
        {/*submitボタン*/}
        <SaveBtn />
      </form>
    </div>
  )
}

function CreateArticlePage() {
  return (
    <div>
      <UnivividHeader title="記事制作" />

      <section className="fixed -z-[-3] top-[15px] left-[15px]">
        <WhiteReturnBtn linkpath="/usermypage" />
      </section>

      <section className="pt-[101px]">
        <div className="text-center pt-[3.5rem]">
          <div className="mx-auto max-w-[600px] mb-[1.5rem]">
            <label
              htmlFor="lectureName"
              className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
            >
              1.講義名
            </label>
            <input
              id="lectureName"
              className="w-full lg:w-[600px] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
              placeholder=""
            />
          </div>

          <div className="mx-auto max-w-[600px] mb-[1.5rem]">
            <label
              htmlFor="lectureName"
              className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
            >
              2.講師
            </label>
            <input
              className="w-full lg:w-[600px] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
              placeholder=""
            />
          </div>

          <div className="mx-auto max-w-[600px] mb-[1.5rem]">
            <label
              htmlFor="lectureName"
              className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
            >
              3.日時
            </label>
            <input
              className="w-full lg:w-[600px] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
              placeholder=""
            />
          </div>

          <div className="mx-auto max-w-[600px] mb-[1.5rem]">
            <label
              htmlFor="lectureName"
              className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
            >
              4.ジャンル
            </label>
            <input
              className="w-full lg:w-[600px] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
              placeholder=""
            />
          </div>

          <div className="mx-auto max-w-[600px] mb-[1.5rem]">
            <label
              htmlFor="lectureName"
              className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
            >
              5.表示画像
            </label>
            <input
              className="w-full lg:w-[600px] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
              placeholder=""
            />
          </div>

          <div className="mx-auto max-w-[600px] mb-[1.5rem]">
            <label
              htmlFor="lectureName"
              className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
            >
              6.申込みURL
            </label>
            <input
              className="w-full lg:w-[600px] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
              placeholder=""
            />
          </div>

          <div className="mx-auto max-w-[600px] mb-[1.5rem]">
            <label
              htmlFor="lectureName"
              className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
            >
              7.講義内容
            </label>

            <textarea
              type="text"
              className="w-[600px] h-[10rem] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
              placeholder=""
            />
          </div>
        </div>
      </section>

      <section className="flex justify-end pr-[5rem] mt-[5rem] mb-[3rem]">
        <div className="text-[1.2rem] text-[#427D9D] font-bold">
          確認画面へ&gt;&gt;
        </div>
      </section>
    </div>
  )
}

export { UniHomePage, UniSettingsPage, CreateArticlePage }
