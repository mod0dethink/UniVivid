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
import { MainReturenBtn, UnivividHeader } from '../components/LayoutComponent'

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
    <>
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
    </>
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
    <UnivividHeader title="記事制作" returnCol={1} link="/usermypage" bgCol={true} />
    <section className='pt-[105px] mb-[50px]'>
      <InputItems />
    </section>
    <section className='flex justify-end pr-[6vw]'>
      <button className='text-[#427D9D] font-bold text-[20px] mb-[30px]'>確認画面へ&gt;&gt;</button>
    </section>
    </>
  )
}

// 作成した記事の確認画面
function CreateCheckedPage() {
  return (
    <>
      <UnivividHeader title="記事制作" returnCol={1} link="/createarticle" bgCol={true}/>
      <section className='pt-[105px] mb-[50px]'>
      <InputItems />
      </section>
      <section className='flex justify-end pr-[6vw] mb-[30px]'>
        <button className='text-white text-[18px] font-bold bg-[#427D9D] px-12 py-3 rounded-md'>送信</button>
      </section>
    </>
  )
}

// 申請許諾画面
function ApplicationListPage() {
  return (
    <div>
      {/* <UnivividHeader title="申請一覧" /> */}
      <UnivividHeader title="申請一覧" returnCol={1} link="/createarticle" />

      {/* <section className="fixed -z-[-3] top-[15px] left-[15px]">
        <MainReturenBtn link='/usermypage' returnCol={1} />
      </section> */}

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
              認証
            </button>
            <button className="font-bold bg-[#E74646] px-4 py-1 ">
              削除
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
              認証
            </button>
            <button className="font-bold bg-[#E74646] px-4 py-1 ">
              削除
            </button>
          </div>
        </div>
      </section>

      {/* ノートの部分 */}

      <section className="grid place-items-center pt-[100px]">
        <div className=" flex justify-around border-b border-[#838181] w-[80vw] mb-[22px]">
          <div className="ml-2 flex-grow">
            <p type="text" placeholder="" readOnly className="px-2 py-1 flex-grow mr-2 w-[55vw]">
              
            </p>
          </div>
          <div className="flex space-x-2 mr-3 mb-1 text-[17px]">
            <button className="font-bold bg-[#E74646] px-4 py-1 ">
              削除
            </button>
          </div>
        </div>

        <div className=" flex justify-around border-b border-[#838181] w-[80vw] mb-[22px]">
          <div className="ml-2 flex-grow">
          <p type="text" placeholder="" readOnly className="px-2 py-1 flex-grow mr-2 w-[55vw]">
            
          </p>
          </div>
          <div className="flex space-x-2 mr-3 mb-1 text-[17px]">
            <button className="font-bold bg-[#E74646] px-4 py-1 ">
              削除
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}


function ApprovalScreenPage(){
  const Door1 = Door
  //ToDo:引数で名前渡す処理
  // const isUserName = userName;
  const isUserName = 'あああ';

  return(
    <>
      <UnivividHeader title="承認画面" returnCol={1} link='/applicationlist' bgCol={true}/>
      <div className='pt-16'>
        <div className='flex items-center space-x-4'>
          <img src={ProImg} className=' size-20 rounded-full ml-[5vw]' alt='Profile'/>
          <p className='text-lg font-semibold'>{isUserName}</p>
        </div>

        <section className=''>
          <div className='mt-5 '>
            {/* 枠線 */}
            <div className=' border-main-middle border-2 border-dashed h-[30vw] w-[90vw] ml-[4vw]'>
              {/* 画像 */}
              <img src="/static/media/note2.c64b1c5a9cc38667d261.png" className='w-[40vw] h-[20vw] ml-[25vw] mt-[5vw]'  alt='ノートの画像'/>
            </div>
          </div>
        </section>

        <section className='pt-[30px]'>

          <div className=' w-[90vw] ml-[10%] font-bold ml-[5vw]'>
            {/* 詳細 */}
            <div className='flex my-2' name="lname">
              <div className=' bg-main text-white text-center px-3'> 講義 </div>
              <p className='my-auto ml-3'>Iot講座</p>
            </div>
            <div className='flex my-2' name="lname">
              <div className=' bg-main text-white text-center px-3'> 講師 </div>
              <p className='my-auto ml-3'>村上 慧</p>
            </div>
            <div className='flex my-2' name="lname">
              <div className=' bg-main text-white text-center px-3'> 内容 </div>
              <p className='my-auto ml-3'>ArduinoでRaspberry Piを用い、IoTに触れる。</p>
            </div>
            <div className='flex my-2' name="lname">
              <div className=' bg-main text-white text-center px-3'> 日時 </div>
              <p className='my-auto ml-3'>2024/〇〇/✕✕  11:00-12:30</p>
            </div>            
          </div>
        </section>
      {/*----▲▲▲▲▲▲▲▲----- ノート承認画面----▲▲▲▲▲▲▲▲----- */}

        
      {/* ボタン */}
        <div className='flex space-x-4 text-[17px] justify-end mb-[50px] mr-[1.5vw]'>
          <button className='font-bold bg-[#D9D9D9] px-4 py-1 '>承認</button>
          <button className='font-bold bg-[#E74646] px-4 py-1'>削除</button>
        </div>
      </div>
    </>
  )
}

export {
  UniHomePage,
  UniSettingsPage,
  CreateArticlePage,
  CreateCheckedPage,
  ApplicationListPage,
  ApprovalScreenPage,
}
