//必要なlibraryをインポート
import React, { useRef, useState } from 'react'
import { Axios } from 'axios'

//componentをインポート
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

//必要なアセットをインポート
import Imagepng from '../assets/images/IMG_4007.jpg'
import Door from '../assets/images/door.png'
import backBtnImg from "../assets/images/back.png"           // 戻るボタン

import '../assets/styles/Dimensions.css'
import '../assets/styles/bg-images.css'
//テスト用
import BgImg from '../assets/images/IMG_4007.jpg'
import Lok from '../assets/images/lock_back.png'
import Ticon2 from '../assets/images/English.jpg'

/*------ユーザーのデータ変数------*/
let username = '瀬那' //ログインアカウントのユーザーネーム
let ProImg = Imagepng //プロフィール画像
/*------Linkパス------*/
let settinglinkpath = '/usersetting' //ユーザーメニュー画面へのLinkパス
let returnpath = '/userhome' //戻るボタンのLinkパス
let mypagepath = '/usermypage' //マイページのLinkパス
let articlepath = '/userarticlelist' //記事一覧へのLinkパス

//ユーザーのホーム画面
function UserHomePage() {
  return (
    <div className="flex w-[100vw] h-screen">
      {/*ユーザーのメニュー*/}
      <UserMenu
        username={username}
        settingpath={settinglinkpath}
        mypagepath={mypagepath}
        Pimage={ProImg}
      />
      {/*記事メニュー*/}
      <section className="main flex-grow-[7] flex content-center  h-screen ">
        <div className="flex flex-col justify-center space-y-20 w-[100%] text-center items-center ">
          <RootUrl name={Door} text={'動画へ'} linkpath="" />
          <RootUrl name={Door} text={'記事一覧へ'} linkpath={articlepath} />
        </div>
      </section>
    </div>
  )
}

//セッティングページ
function UserSettingsPage() {
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
        {/*submitボタン*/}
        <SaveBtn />
      </form>
    </div>
  )
}

//記事一覧
function UserArticleList() {
  return (
    <div>
      {/*header*/}
      <section>
        <UserHeader iconpath={ProImg} />
      </section>

      {/*リスト*/}
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

//マイページ
function UserMyPage() {
  return (
    <div className="flex flex-col h-screen w-[100vw] justify-center">
      {/*header*/}
      <section>
        <UserHeader iconpath={ProImg} />
      </section>
      {/*マイページメニュー*/}
      <section className="flex w-full h-full pt-[101px] text-[#fff] text-center items-center justify-around overflow-x-auto">
        <table className="w-[100%]">
          <tr className="flex justify-around">
            <BoxMenu text="受講履歴一覧" />
            <BoxMenu text={'お気に入り\nいいねしたノート'} />
            <BoxMenu text={'アップロードノート一覧'} />
          </tr>
        </table>
      </section>
    </div>
  )
}


export { UserHomePage, UserSettingsPage, UserArticleList, UserMyPage}
