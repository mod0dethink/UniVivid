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

//　記事作成画面
function CreateArticlePage() {
  return (
    <div>
      <UnivividHeader title="記事制作" />
      <section className="fixed -z-[-3] top-[15px] left-[15px]">
        {/* <MainReturenBtn link='/usermypage' returnCol={1} /> */}
      </section>
      <UnivividHeader title="記事制作" returnCol={1} link="/usermypage" />

      <section className='pt-[105px] mb-[50px]'>
      <InputItems />
      </section>
      
      <section className='flex justify-end pr-[6vw]'>
        <button className='text-[#427D9D] font-bold text-[20px] mb-[30px]'>確認画面へ&gt;&gt;</button>
      </section>

    </div>
  )
}

// 作成した記事の確認画面
function CreateCheckedPage() {
  return (
    <div>
      <UnivividHeader title="記事制作" />

      <section className="fixed -z-[-3] top-[15px] left-[15px]">
        {/* <MainReturenBtn link='/usermypage' returnCol={1} /> */}
      </section>
      <UnivividHeader title="記事制作" returnCol={1} link="/createarticle" />
    
      <section className='pt-[105px] mb-[50px]'>
      <InputItems />
      </section>

      <section className='flex justify-end pr-[6vw] mb-[30px]'>
        <button className='text-white text-[18px] font-bold  font-bold bg-[#427D9D] px-12 py-3 rounded-md'>送信</button>
      </section>

    </div>
  )
}

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


function ApprovalScreenPage(){
  const Door1 = Door

  return(
    <div>

      <UnivividHeader title="承認画面" />

      <section className="fixed -z-[-3] top-[15px] left-[15px]">
        {/* <WhiteReturnBtn linkpath="/usermypage" /> */}
      </section>

      {/* コメント承認画面 */}

      {/* ノート承認画面 */}

      <div className='pt-[105px]'>
        <section>
          {/* <UserHeader iconpath={ProImg} /> */}
          {/* <ProfileImageEditor Pimage={ProImg} /> */}

        {/* <UserMenu
        username={username}
        settingpath={settinglinkpath}
        Pimage={ProImg}
         />   */}
         {/* アイコン */}
          <div className='flex items-center space-x-4'>
            <img src={ProImg} className='w-[150px] h-[150px] rounded-full ml-[5vw]' alt='Profile'/>
            <p className='text-lg font-semibold'>user_name</p>
          </div>

        </section>

        <section className=''>
          <div className='mt-5 '>
            <div className=' border-main-middle border-2 border-dashed h-[30vw] w-[90vw] ml-[4vw]'>
              {/* 画像 */}
              <img src="/static/media/note2.c64b1c5a9cc38667d261.png" className='w-[50vw] h-[25vw] ml-[20vw] mt-[2.3vw]'  alt='ノートの画像'/>
            </div>
          </div>
        </section>

        <section className='pt-[105px]'>

          <div className=' w-[90vw] ml-[10%] font-bold'>
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

            {/* ボタン */}
            <div className='flex space-x-2 mr-3 mb-1 text-[17px] justify-end mb-[50px] mr-[8vw]'>
              <button className='font-bold bg-[#D9D9D9] px-4 py-1 '>承認</button>
              <button className='font-bold bg-[#E74646] px-4 py-1'>削除</button>
            </div>

          </div>
        </section>
       

      </div>


      </div>

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
