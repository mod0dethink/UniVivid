// 大学側のページ

import React, { useRef, useState } from 'react'
// import axios from 'axios'
import { Axios } from 'axios'

import Door from '../assets/images/door.png'
import { Link } from 'react-router-dom'
import {
  UserMenu,
  RootUrl,
  InputField,
  ProfileImageEditor,
  SaveBtn,
  HomeReturnBtn,
  InputItems,
} from '../components/MaterialComponent'
import { MainReturenBtn, UnivividHeader, WhiteHeader } from '../components/LayoutComponent'

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
let articlepath = '/createarticle' //記事一覧へのLinkパス

//大学側のホームページ
function UniHomePage() {
  const Door1 = Door
  return (
    <div className="flex w-[100vw] h-screen">
      {/*ユーザーのメニュー*/}
      <UserMenu
        username={username}
        settingpath='/unisetting'
        Pimage={ProImg}
      />
      {/*記事メニュー*/}
      <section className="flex-grow-[7] content-center h-screen">
        <RootUrl name={Door1} text={'記事作成画面'} linkpath='/createarticle' />
        <RootUrl name={Door1} text={'公開記事一覧'} linkpath='/createarticle' />
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
      const response = await Axios.put(
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
    <>
      {/* <WhiteHeader /> */}
      <UnivividHeader title='ユーザー設定' link='/unihome' returnCol={1} bgCol={true}/>
      <form
        className="items-center flex flex-col"
        onSubmit={handleSubmit}
      >
        {/*変更可能なプロフィール画像*/}
        <div className='mt-20'>
          <ProfileImageEditor Pimage={ProImg}/>
        </div>

        {/*セッティングフォーム*/}
        <div className="w-[60vw] text-left text-[#427D9D] space-y-5 max-w-[800px]">
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
        </div>
        <div className='my-10'>
          <SaveBtn/>
        </div>
      </form>
    </>
  )
}

//　記事作成画面
function CreateArticlePage() {
  return (
    <>
      <UnivividHeader title="記事制作" returnCol={1} link='/unihome'/>
    </>
  )
}

// 作成した記事の確認画面
function CreateCheckedPage() {
  return (
    <div>
      <UnivividHeader title="記事制作" />

      <section className="fixed -z-[-3] top-[15px] left-[15px]">
        <MainReturenBtn link='/usermypage' returnCol={1} />
      </section>
      <UnivividHeader title="記事制作" returnCol={1} link="/createarticle" />
    </div>
  )
}

// 申請許諾画面
function ApplicationListPage() {
  return (
    <div>
      <UnivividHeader title="申請一覧" />

      <section className="fixed -z-[-3] top-[15px] left-[15px]">
        <MainReturenBtn link='/usermypage' returnCol={1} />
      </section>

      <div className="grid place-items-center">
        <section className="pt-[151px] flex justify-around border-b-[2px] border-[#838181] w-[90vw]">
          <button className="border-b-[2px] border-[#229DF6] w-[15vw] text-[#838181] px-4 py-2">
            コメント
          </button>
          <button className="border-b-[2px] border-[#229DF6] w-[15vw] text-[#838181] px-4 py-2">
            ノート
          </button>
        </section>
      </div>

      {/* コメントの部分 */}
      <section className="grid place-items-center pt-[100px]">
        <div className=" flex justify-around border-b border-[#838181] w-[80vw] mb-[22px]">
          <div className="ml-2 flex-grow">
            <input
              type="text"
              placeholder="コメント"
              readOnly
              className="px-2 py-1 flex-grow mr-2 w-[55vw]"
            />
          </div>
          <div className="flex space-x-2 mr-3 mb-1 text-[17px]">
            <button className="font-bold bg-[#D9D9D9] px-4 py-1 ">
              {' '}
              認証{' '}
            </button>
            <button className="font-bold bg-[#E74646] px-4 py-1 ">
              {' '}
              削除{' '}
            </button>
          </div>
        </div>

        <div className=" flex justify-around border-b border-[#838181] w-[80vw] mb-[22px]">
          <div className="ml-2 flex-grow">
            <input
              type="text"
              placeholder=""
              readOnly
              className="px-2 py-1 flex-grow mr-2 w-[55vw]"
            />
          </div>
          <div className="flex space-x-2 mr-3 mb-1 text-[17px]">
            <button className="font-bold bg-[#D9D9D9] px-4 py-1 ">
              {' '}
              認証{' '}
            </button>
            <button className="font-bold bg-[#E74646] px-4 py-1 ">
              {' '}
              削除{' '}
            </button>
          </div>
        </div>
      </section>

      {/* ノートの部分 */}

      <section className="grid place-items-center pt-[100px]">
        <div className=" flex justify-around border-b border-[#838181] w-[80vw] mb-[22px]">
          <div className="ml-2 flex-grow">
            <input
              type="text"
              placeholder=""
              readOnly
              className="px-2 py-1 flex-grow mr-2 w-[55vw]"
            />
          </div>
          <div className="flex space-x-2 mr-3 mb-1 text-[17px]">
            <button className="font-bold bg-[#E74646] px-4 py-1 ">
              {' '}
              削除{' '}
            </button>
          </div>
        </div>

        <div className=" flex justify-around border-b border-[#838181] w-[80vw] mb-[22px]">
          <div className="ml-2 flex-grow">
            <input
              type="text"
              placeholder=""
              readOnly
              className="px-2 py-1 flex-grow mr-2 w-[55vw]"
            />
          </div>
          <div className="flex space-x-2 mr-3 mb-1 text-[17px]">
            <button className="font-bold bg-[#E74646] px-4 py-1 ">
              {' '}
              削除{' '}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export {
  UniHomePage,
  UniSettingsPage,
  CreateArticlePage,
  CreateCheckedPage,
  ApplicationListPage,
}
