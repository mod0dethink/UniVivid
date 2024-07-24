// ログイン後のユーザーの画面

//必要なlibraryをインポート
import React, { useRef, useState, useEffect } from 'react'
import { Axios } from 'axios'
import axios from 'axios';
import { Children } from 'react';
//必要なアセットをインポート
import Imagepng from '../assets/images/IMG_4007.jpg'
import Door from '../assets/images/door.png'
import BgNote from '../assets/images/bgnote.jpg'
import '../assets/styles/Dimensions.css'
import '../assets/styles/bg-images.css'
import { TbPencilPlus } from "react-icons/tb";  // 追加
import { MainReturenBtn } from '../components/LayoutComponent.js'; // 戻るボタン
import { BsPaperclip } from "react-icons/bs";                 // クリップ
//　テスト用
import BgImg from '../assets/images/IMG_4007.jpg'
import Lok from '../assets/images/lock_back.png'
import Ticon2 from '../assets/images/English.jpg'
import NoteImg from '../assets/images/note2.png'
import { Link } from 'react-router-dom'
import uni_img from "../assets/images/ECC_build.jpg";         // 大学画像
import { FaHandHoldingHeart } from "react-icons/fa6";         // 支援ボタンのマーク
import { AiFillLike } from "react-icons/ai";                  //　支援ボタンのアイコン
import uimg from '../assets/images/ecc_logo.jpg'  // 講義詳細で使用する例の画像


// 処理
import {
  OpenNote,
} from "../assets/scripts/animation.js"
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
  ComentDialog,
  OtherMenu,
  SwichBar,
} from '../components/MaterialComponent.js'
import {
  UserHeader,
  Logotext,
  UnivividHeader,
} from '../components/LayoutComponent.js'
import { type } from '@testing-library/user-event/dist/type/index.js';

/*------ユーザーのデータ変数------*/
let ProImg = Imagepng //プロフィール画像
/*------Linkパス------*/
let settinglinkpath = '/usersetting' //ユーザーメニュー画面へのLinkパス
let returnpath = '/userhome' //戻るボタンのLinkパス
let mypagepath = '/usermypage' //マイページのLinkパス
let articlepath = '/userarticlelist' //記事一覧へのLinkパス

//ユーザーのホーム画面
function UserHomePage() {
  const [username, setUsername] = useState(''); // 初期値を空文字列に設定

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get('http://localhost:8080/auth/username', { withCredentials: true });
        setUsername(response.data.username);
      } catch (error) {
        console.error('ユーザー名の取得に失敗しました:', error);
        setUsername('ゲスト'); // エラー時のフォールバック
      }
    };

    fetchUsername();
  }, []); // 空の依存配列で、コンポーネントのマウント時に一度だけ実行

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
        <RootUrl name={Door} text={'動画へ'} linkpath="" />
        <RootUrl name={Door} text={'記事一覧へ'} linkpath={articlepath} />
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
      const response = await axios.put(
        'http://localhost:8080/auth/profile',
        {
          type: 'user',
          mailaddress: email,
          username: username,
          password: password,
        },
        { withCredentials: true },
      )
      alert(response.data.message)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error)
      } else {
        alert('エラーが発生しました。')
      }
    }
  }

  return (
    <div>
      <UnivividHeader title='ユーザー設定' returnCol={1} link='/userhome' bgCol={true}/>
      <form
        className="items-center flex flex-col justify-around text-center h-screen"
        onSubmit={handleSubmit}
      >
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

// 記事一覧
function UserArticleList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/get-seminars', { withCredentials: true });
        setData(response.data.seminars);
      } catch (error) {
        console.error('セミナー情報の取得に失敗しました:', error);
        setError('セミナー情報の取得に失敗しました.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <UserHeader iconpath={ProImg} />
      <div className='fixed mt-32 ml-10 '>
        <HomeReturnBtn linkpath='/userhome' />
      </div>

      <div className="flex justify-between">
        <div className='mt-48 ml-10'><ArticleSearch /></div>
        <div className="mr-32 mt-20">
          {error && <p className="text-red-500">{error}</p>}
          {
            data.map((item, index) =>
              <ArticlePart 
                key={index}
                BgImg={item.thumbnail}
                Ticon={uimg}
                groupname={item.university_name}
                title={item.seminar_name}
                date={item.start_date}
                link={'/onelecturepage'}
              />
            )
          }
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
// 受講履歴一覧
function ArticleHistoryPage() {
   // ！テストデータ！
   const data = [
    [BgImg,Ticon2,'ECC Artist','ポートレート講座','2002/06/24'],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
  ]
  return (
    <div>
      <UnivividHeader title="受講履歴一覧" returnCol={1} link='/usermypage' bgCol={true}  />
      <section>
        <div className="flex space-y-5 justify-center pt-[101px] text-center">
          <div>
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
      </section>
    </div>
  )
}
// アップロードしたノート一覧
function UpNoteListPage() {
   // ！テストデータ！
   const data = [
    [BgImg,Ticon2,'ECC Artist','ポートレート講座','2002/06/24'],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
  ]
  return (
    <div>
        <UnivividHeader title="アップロードしたノート一覧" returnCol={1} link='/usermypage' bgCol={true} />
        <div className="flex space-y-5 justify-center pt-[101px] text-center">
          <div className="pt-[50px] space-y-10">
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
  )
}
// お気に入りページ
function FavoriteListPage() {
   // ！テストデータ！
   const data = [
    [BgImg,Ticon2,'ECC Artist','ポートレート講座','2002/06/24'],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
  ]
  const [isPage, setIsPage] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <UnivividHeader title="お気に入り" returnCol={1} link='/usermypage' bgCol={true} />
      <div className="grid pt-[98px] place-items-center w-screen">
        <section className="fixed flex justify-around border-b-[2px] border-[#838181] w-11/12 bg-main-bg pt-14">
        <button 
        id={isPage==0 ? 'swichBar': ''}
        onClick={()=>{setIsPage(0)}}
        >
          講座
        </button>
        <button 
        id={isPage==1 ? 'swichBar': ''}
        onClick={()=>{setIsPage(1)}}
        >
          ノート
        </button>
      </section>
    </div>
      <section>
        <div className="flex space-y-5 justify-center text-center">
          <div className="pt-[50px] space-y-10">
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
      </section>
    </div>
  )
}

// 講義記事ごとのページ
const OneLecturePage = () => {
  // 講義関連
  const lectureName = "IoT講座";              // 講義名
  const time = "2024/oo/xx　11:00 - 12:30";   // 講義日時
  const [isFavorite, setIsFavorite] = useState(false);    // お気に入りボタンの状態
  const [isGoodCount, setIsGoodCount] = useState(0);      // いいね数管理の変数
  const [isPageCount, setIsPageCount] = useState(0);      // ページ枚数管理の変数
  const [Is_Init,setInit] = useState(true);

  return (
    <>
    {/* Todo:ダイアログ */}
    <dialog className='bg-black '>

    </dialog>
    <div className='h-screen bg-main-bg font-bold'>
      <div id='test_div'></div>
      <div className='flex'>
        <MainReturenBtn link='/userarticlelist' returnCol={0}/>
        <div className='bg-main text-white text-4xl py-2 px-28 rounded-xl mx-7 mt-5'>{lectureName}</div>
        <p className='text-main mt-auto mb-0'>{time}</p>
        <button id={isFavorite ? 'favorite_star_on' : 'favorite'} onClick={() => {setIsFavorite(!isFavorite) }}></button>
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

// 大学ごとのページ
const UnivercityPage = () => {
  // テストデータ
  const uni_name = "ECCコンピュータ専門学校";                     // 大学名
  const tags = ['IT','CG','経営'];                               // タグ
  const place = '〒530-0015 大阪府大阪市北区中崎西2丁目3番35号';  // 住所
  const hp = 'https://comp.ecc.ac.jp/';                         // 大学リンク
  const connectLink = ['@university_name　HTML,CSS講座','@university_name　React講座']; // 関連記事リンク
  const coment = ['校舎がきれいだった！','階段が狭杉！'];        // 掲示板コメント

  const [isDialog, setIsDialog] = useState(false);  // ダイアログ開閉の変数

  return (
    <>
    <div className='h-screen font-bold bg-main-bg'>
      <ComentDialog open={isDialog}/>
      <div name='header' className='flex'>
        <MainReturenBtn link='/onelecturepage' returnCol={0}/>
        <div className='bg-main font-bold h-96 w-5/6 rounded-[50%] mx-auto -mt-72 text-white text-4xl text-center pt-[315px]'>
          {uni_name}
        </div>
      </div>
      <div name='screen_1' className='flex h-[35%] w-5/6 mt-8 mx-auto'>
        <img src={uni_img} alt='uni_img' className=' w-1/3'/>
        <div className=' ml-[20%]'>

          <p className=' text-main'>分野:</p>
          <div className='flex'>
            {tags.map(element => <p key={element} className='mr-4 text-[#4C4C4C]'>#{element}</p>)}
          </div>
          <p className='text-main mt-2'>住所:</p>
          <p className='text-[#4C4C4C]'>{place}</p>
          <p className='text-main mt-2'>HP:</p>
          <p><a href={hp} className='text-[#4C4C4C]'>{hp}</a></p>

          <button type='submit' className='flex mt-6 bg-[#3AE110] bg-gradient-to-t from-[#358D1F] text-white py-3 px-20 text-xl rounded-md'>
            この学校を支援する<FaHandHoldingHeart className='size-6 ml-2'/>
          </button>
        </div>
      </div>

      <div name='screen_2' className='flex w-5/6 mx-auto h-[30%] mt-14 bolder-[#D9D9D9]'>
      <div className='w-5/12 h-full border-2 bg-white'>
        <p className=' text-main text-center mb-3'>～ 掲示板 ～</p>
        {coment.map((element,index) => <p key={index} className=' font-normal border-b-2 w-5/6 mx-auto'>{element}</p>)}
      </div>
      <button 
      className='size-14 rounded-full bg-main -ml-16 mt-auto mb-3'
      onClick={() => {setIsDialog(!isDialog)}}
      >
        <TbPencilPlus className='size-11 ml-1 -mt-1 text-white'/>
      </button>
        <div className='w-5/12 h-full border-2 ml-[12%]'>
          <p className='bg-white text-main text-center mb-3'>～ 講義一覧 ～</p>
          {connectLink.map((element,index) => <p key={index} className=' underline mb-2 w-5/6 mx-auto'>{element}</p>)}
        </div>
      </div>
    </div>
    </>
  )
}

// 他ユーザーのノート一覧
function OtherUserPage() {
  // ！テストデータ！
  const data = [
    [BgImg,Ticon2,'ECC Artist','ポートレート講座','2002/06/24'],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
  ]
  return (
  <>
  <div className='flex bg-main-bg'>
    <OtherMenu image={uni_img} name={'kata_sk'} link='/onelecturepage' />
    <div className="space-y-5 w-3/4 ml-32">
      <div className="pt-12 space-y-10">
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

// 他ユーザーの各ノート
function OtherUserNotePage(itemData) {
  const lectureName = 'IoT講座';
  const date = '2024/oo/xx';
  const time = '16:00';
  const goodCount = 20;
  return(
    <>
    <div className='absolute'><MainReturenBtn returnCol={0} link={'/otheruser'} /></div>
    <div className='flex h-dvh bg-main-bg justify-center'>
      <BsPaperclip className='absolute size-16 mt-20 left-[12%] text-main-middle'/>
      <div className='h-96 w-1/3 bg-gray-200 content-center mt-24'>
        <img src={NoteImg} alt='userNoteImg'/>
      </div>
      <div className='mt-20 ml-10 w-5/12 font-bold'>
        <div className='text-2xl rounded-lg py-2 text-center text-white bg-main'>
          {lectureName}
        </div>
        <p className='my-5'>{date}　{time} に更新 </p>
        {/* ToDo:値の受渡 */}
        <LectureDetails />
        <div className='flex items-center text-main-middle float-right'>
          <AiFillLike className='size-8' />
          <p >{goodCount}</p>
        </div>
      </div>
    </div>
    </>
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
  UnivercityPage,
  OtherUserPage,
  OtherUserNotePage,
}