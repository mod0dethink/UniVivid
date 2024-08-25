// 大学側のページ

import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types';
// import axios from 'axios'
import { Axios } from 'axios'
import Door from '../assets/images/door.png'
import { FaBell } from "react-icons/fa";
import { Link } from 'react-router-dom'
import {
  UserMenu,
  RootUrl,
  InputField,
  ProfileImageEditor,
  SaveBtn,
  ArticlePart,
  ArticleSearch,
  BoxMenu,
  Note,
  LectureDetails,
  HomeReturnBtn,
  InputItems,
  ConnectLink,
  ComentDialog,
  OtherMenu,
  SwichPage,
} from '../components/MaterialComponent'
import { MainReturenBtn, UnivividHeader } from '../components/LayoutComponent'
import '../assets/styles/Dimensions.css'
import Imagepng from '../assets/images/IMG_4007.jpg'
import '../assets/styles/Dimensions.css'
//テスト
import BgImg from '../assets/images/IMG_4007.jpg'
import Lok from '../assets/images/lock_back.png'
import Ticon2 from '../assets/images/English.jpg'
import NoteImg from '../assets/images/note2.png'
import uni_img from "../assets/images/ECC_build.jpg";         // 大学画像
import { FaHandHoldingHeart } from "react-icons/fa6";         // 支援ボタンのマーク
import { AiFillLike } from "react-icons/ai";                  //　支援ボタンのアイコン
import { array, element } from 'prop-types';

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
  const Door1 = Door;
  // テスト用
  const data = true;    // データの有無

  // 通知表示するかの判定
  // if(data){
  //   setIsData(true);
  // } else {
  //   setIsData(false);
  // }

  return (
    <>
    <div className="flex w-[100vw] h-screen">
      {/*ユーザーのメニュー*/}
      <UserMenu
        username={username}
        settingpath='/unisetting'
        Pimage={ProImg}
        hidden={true}
      />
      <Link to='/applicationlist'>
        <FaBell className='absolute text-main-middle size-10 right-5 top-4'/>
        {(data) && <div className='absolute right-5 top-4 size-5 rounded-full bg-red-500'></div>}
      </Link>

      {/*記事メニュー*/}
      <section className="flex-grow-[7] content-center h-screen">
        <RootUrl name={Door1} text={'記事作成画面'} linkpath='/createarticle' />
        <RootUrl name={Door1} text={'公開記事一覧'} linkpath='/openarticles' />
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
  const url = 'http://localhost:3000/createchecked';
  const options = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      
    })
  }
  const data = new Array(7);
  // 送信時にすべてのデータをとってくるハンドラー
  function handle(item) {
    item.forEach((element, index) => {
      data[index] = element;
      console.log(element);
    })
  }

  // data.forEach(element,index => {
  //   <p>{index}: {element}</p>
  // });

  return (
    <>
    <UnivividHeader title="記事制作" returnCol={1} link="/unihome" bgCol={true} />
    <section className='pt-[105px] mb-[50px]'>
      <InputItems handle={handle}/>
    </section>
    <section className='flex justify-end pr-[6vw]'>
      <button 
      className='text-[#427D9D] font-bold text-[20px] mb-[30px]'
      >確認画面へ&gt;&gt;</button>
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
  const [isPage, setIsPage] = useState(0);
  const comment = ['comment','コメント','こめんと','comment','コメント','こめんと','comment','コメント','こめんと'];
  const note = ['oo講座','xx講座','△△講座','oo講座','xx講座','△△講座','oo講座','xx講座','△△講座'];

  return (
    <div className='bg-main-bg overflow-hidden'>
      <UnivividHeader title="申請一覧" returnCol={1} link="/unihome" bgCol={true} />
      <div className="grid pt-[98px] place-items-center w-screen">
        <section className="fixed flex justify-around border-b-[2px] border-[#838181] w-11/12 bg-main-bg pt-14">
          <button 
          id={isPage === 0 ? 'swichBar': ''}
          onClick={()=>{setIsPage(0)}}
          >
            コメント
          </button>
          <button 
          id={isPage === 1 ? 'swichBar': ''}
          onClick={()=>{setIsPage(1)}}
          >
            ノート
          </button>
        </section>
      </div>
      <section className="grid place-items-center pt-14">
        {(isPage === 0) && <SwichPage isPage={isPage} comment={comment} />}
        {(isPage === 1) && <SwichPage isPage={isPage} comment={note} />}
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
// 公開記事一覧
function OpenArtucles() {
  // ！テストデータ！
  const data = [
    [BgImg,Ticon2,'ECC Artist','ポートレート講座','2002/06/24'],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
  ]

  const detail = "ArduinoでRaspberry Piを用い、IoTに触れる。";  // 内容
  return (
    <>
    <div className='flex bg-main-bg'>
      <OtherMenu img={ProImg} name={username} link='/unihome' />
      <div className="space-y-5 w-3/4 ml-32 h-screen">
        <div className=" pt-12 space-y-10 h-full overflow-y-scroll">
          {
            data.map((item, index) =>
              <ArticlePart 
                key={index}
                BgImg={item[0]}
                Ticon={item[1]}
                groupname={item[2]}
                title={item[3]}
                date={item[4]}
                link={'/editonelecture'}
              />
            )
          }
        </div>
      </div>  
    </div>
    </>
  )
}
// 講義記事ごとのページ
const EditOneLecture = () => {
  // 講義関連(！テストデータ！)
  const lectureName = "IoT講座";              // 講義名
  const time = "2024/oo/xx　11:00 - 12:30";   // 講義日時
  const goodCount = 20;                       // いいね数
  const [isPageCount, setIsPageCount] = useState(0);      // ページ枚数管理の変数

  return (
    <>
    <div className='h-screen bg-main-bg font-bold'>
      <Link to='/editdetailes'>
      <button className='absolute right-10 bg-gray-700 rounded-md bottom-5 text-white py-2 px-10'>
        記事を編集する
      </button>
      </Link>
      <div className='flex'>
        <MainReturenBtn link='/openarticles' returnCol={0}/>
        <div className='bg-main text-white text-4xl py-2 px-28 rounded-xl mx-7 mt-5'>{lectureName}</div>
        <p className='text-main mt-auto mb-0'>{time}</p>
        <button id='favorite'></button>
      </div>
      <Note />
      <div className='flex justify-around'>
        <div className='w-1/2 ml-[10%]'>
          <LectureDetails />
          <button type='submit' className='bg-[#3BBC30] text-white text-xl px-10 py-1 rounded-md mt-8'>この講義に申し込む</button>
        </div>
        <div className='mt-5 w-1/2'>
          <ConnectLink />
        </div>
      </div>
    </div>
    <script src="../assets/scripts/animation.js"></script>
    </>
  )
}
// 記事編集
function EditDetails() {
  return(
  <>
  <UnivividHeader title='記事編集' returnCol={1} link='/editonelecture' bgCol={true} />
  <div className='pt-20'>
  <InputItems />
  </div>
  <Link to='/editonelecture'>
  <section className='flex justify-end pr-[6vw]'>
    <button className='font-bold text-[20px] mb-[30px] bg-main text-white py-1 px-10 rounded-md'>送信</button>
  </section>
  </Link>
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
  OpenArtucles,
  EditOneLecture,
  EditDetails,
}
