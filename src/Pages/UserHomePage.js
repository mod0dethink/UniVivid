import React, { useRef, useState } from 'react'

import Door from '../assets/images/door.png'
import { Link } from 'react-router-dom'
import {
  UserMenu,
  RootUrl,
  InputField,
  ProfileImageEditor,
  SaveBtn,
  ArticleSearch,
  ArticlePart,
  BoxMenu,
} from '../components/MaterialComponent'
import {
  WhiteHeader,
  UserHeader,
  EmptyHeader,
  Logotext,
} from '../components/LayoutComponent'

import '../assets/styles/Dimensions.css'
import '../assets/styles/bg-images.css'

import axios from 'axios'

import ImportImg from '../assets/images/imgImport.png'
import ReturnImg from '../assets/images/return.png'
import Imagepng from '../assets/images/IMG_4007.jpg'
import '../assets/styles/Dimensions.css'
//テスト用
import Pen from '../assets/images/pen.png'
import BgImg from '../assets/images/IMG_4007.jpg'
import Lok from '../assets/images/lock_back.png'
import Ticon2 from '../assets/images/English.jpg'
/*
path変数一覧
  Pimage=プロフィール画像
 */
let ProImg = Imagepng
let linkpath = '/usersetting'
let returnpath = '/userhome'

function UserHomePage() {
  const Door1 = Door
  let UserImgPath = './images/test.png'
  let username = '瀬那'

  return (
    <div className="flex w-[100vw] h-screen">
      <UserMenu
        username={username}
        settingpath={linkpath}
        mypagepath={'/usermypage'}
        Pimage={ProImg}
      />
      <section className="main flex-grow-[7] flex content-center  h-screen ">
        <div className="flex flex-col justify-center space-y-20 w-[100%] text-center items-center ">
          <RootUrl name={Door1} text={'動画へ'} />
          <RootUrl
            name={Door1}
            text={'記事一覧へ'}
            linkpath={'/userarticlelist'}
          />
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
function UserSettingsPage() {
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
        </section>
        <SaveBtn />
      </form>
    </div>
  )
}

function UserArticleList() {
  return (
    <div>
      <section>
        <UserHeader iconpath={ProImg} />
      </section>
      <section className=" mx-[65vw]">
        <ArticleSearch linkpath={'/userhome'} />
        <div className="flex space-y-5 justify-center pt-[101px] text-center">
          <div className="pt-[50px] space-y-10">
            {/*
          <ArticlePart
          BgImg={Lok} メインの背景画像
          Ticon={Ticon2} 団体のアイコン画像
          groupname={'ECC comp'} 団体名
          title={'ポートレート講座'} 講座名
          date={'2024/08/29'} 当日の日付
        />
        */}
            <ArticlePart
              BgImg={BgImg}
              Ticon={Ticon2}
              groupname={'ECC Artist'}
              title={'ポートレート講座'}
              date={'2002/06/24'}
            />
            <ArticlePart
              BgImg={Lok}
              Ticon={Ticon2}
              groupname={'ECC comp'}
              title={'ポートレート講座'}
              date={'2024/08/29'}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function UserMyPage() {
  return (
    <div className="flex h-screen items-start overflow-hidden">
      <section>
        <UserHeader iconpath={ProImg} />
      </section>
      <section className="flex h-full pt-[101px] text-[#000] bg-[#000000] justify-center items-center overflow-auto whitespace-nowrap">
        <div className="w-[300px] h-[300px] bg-[#fff] m-5">text</div>
        <div className="w-[300px] h-[300px] bg-[#fff] m-5">text</div>
        <div className="w-[300px] h-[300px] bg-[#fff] m-5">text</div>
        <div className="w-[300px] h-[300px] bg-[#fff] m-5">text</div>
      </section>
    </div>
  )
}

export { UserHomePage, UserSettingsPage, UserArticleList, UserMyPage }
