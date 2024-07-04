// ログイン後のユーザーの画面

// インポート --------------------------------------------------------

//必要なlibraryをインポート
import React, { useRef, useState } from 'react'
import { Axios } from 'axios'
//必要なアセットをインポート
import Imagepng from '../assets/images/IMG_4007.jpg'
import Door from '../assets/images/door.png'
import '../assets/styles/Dimensions.css'
import '../assets/styles/bg-images.css'
import starBefore from "../assets/images/star_before.png";    // お気に入りボタン追加前
import starAfter from "../assets/images/star_after.png";      // お気に入りボタン追加後
import { MainReturenBtn } from '../components/LayoutComponent'; // 戻るボタン
//　テスト用
import BgImg from '../assets/images/IMG_4007.jpg'
import Lok from '../assets/images/lock_back.png'
import Ticon2 from '../assets/images/English.jpg'
import { Link } from 'react-router-dom'
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
  HomeReturnBtn,
  Note,
  LectureDetails,
  ConnectLink,
} from '../components/MaterialComponent'
import {
  WhiteHeader,
  UserHeader,
  EmptyHeader,
  Logotext,
  UnivividHeader,
} from '../components/LayoutComponent'

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
      <section className="flex-grow-[7] content-center h-screen">
        {/* <div className="flex flex-col justify-center space-y-20 w-[100%] text-center items-center "> */}
          <RootUrl name={Door} text={'動画へ'} linkpath="" />
          <RootUrl name={Door} text={'記事一覧へ'} linkpath={articlepath} />
        {/* </div> */}
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

const testData = [
  {BgImg,Ticon2,},
  {}
]

//記事一覧
function UserArticleList() {
  return (
    <div>
      <UserHeader iconpath={ProImg} />
      <div className='absolute mt-32 ml-10'>
        <HomeReturnBtn linkpath='/userhome' />
      </div>

      <div className="flex justify-between">
        <div className='mt-56 ml-10'><ArticleSearch /></div>
        <div className="space-y-5 mt-24 mr-32">
          <div className="pt-[50px] space-y-10">
          <Link to='/onelecturepage'>
            <ArticlePart
              BgImg={BgImg}
              Ticon={Ticon2}
              groupname={'ECC Artist'}
              title={'ポートレート講座'}
              date={'2002/06/24'}
            />
          </Link>
          <ArticlePart
            BgImg={Lok}
            Ticon={Ticon2}
            groupname={'ECC comp'}
            title={'ポートレート講座'}
            date={'2024/08/29'}
          />
          </div>
        </div>
      </div>
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
      {/* <section className="pt-[201px] pl-[10vw]"> */}
      <section className='mt-32 ml-10'>
        <HomeReturnBtn linkpath='/userhome'/>
      </section>
      {/*マイページメニュー*/}
      <table className="w-full h-full text-white text-center items-center justify-around">
        <tr className="flex justify-around">
          <BoxMenu text="受講履歴一覧" linkpath="/articlehistory" />
          <BoxMenu text={'お気に入り\nいいねしたノート'} linkpath="/favoritelist" />
          <BoxMenu text="アップロードノート一覧" linkpath="/upnotelist" />
        </tr>
      </table>
    </div>
  )
}
/*マイページからの遷移先以下三つ*/

//受講履歴一覧
function ArticleHistoryPage() {
  return (
    <div>
      <UnivividHeader title="受講履歴一覧" returnCol={1} link='/usermypage'/>
      <section>
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
function UpNoteListPage() {
  return (
    <div>
        <UnivividHeader title="アップロードしたノート一覧" returnCol={1} link='/usermypage'/>
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
    </div>
  )
}
function FavoriteListPage() {
  return (
    <div className="flex flex-col items-center">
      <UnivividHeader title="お気に入り" returnCol={1} link='/usermypage'/>
      <section className="pt-[151px] flex justify-around border-b-[2px] border-[#838181] w-[80vw]">
        <button className="border-b-[2px] border-[#229DF6] w-[15vw]">
          講義
        </button>
        <button className="border-b-[2px] border-[#229DF6] w-[15vw]">
          ノート
        </button>
      </section>
      <section>
        <div className="flex space-y-5 justify-center text-center">
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

// 講義記事ごとのページ
const OneLecturePage = () => {
  // 講義関連
  const lectureName = "IoT講座";              // 講義名
  const time = "2024/oo/xx　11:00 - 12:30";   // 講義日時

  return (
    <div className='h-screen bg-main-bg font-bold'>
      <div className='flex'>
        <MainReturenBtn link='/userarticlelist' returnCol={0}/>
        <div className='bg-main text-white text-4xl py-2 px-28 rounded-xl mx-7 mt-5'>{lectureName}</div>
        <p className='text-main mt-auto mb-0'>{time}</p>
        <button className=' ml-auto mr-20'><img src={starBefore} alt="star" /></button>
      </div>
      <Note />
      <div className='flex justify-around'>
        <div className=' w-1/2 ml-[10%]'>
          <LectureDetails />
          <button type='submit' className='bg-[#3BBC30] text-white text-xl px-10 py-1 rounded-md mt-8'>この講義に申し込む</button>
        </div>
        <div className='mt-5 w-1/2'>
          <ConnectLink />
        </div>
      </div>
    </div>
  )
}

export {
  UserHomePage,
  UserSettingsPage,
  UserArticleList,
  UserMyPage,
  ArticleHistoryPage,
  UpNoteListPage,
  FavoriteListPage,
  OneLecturePage,
}
