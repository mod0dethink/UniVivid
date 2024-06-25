//ユーザ画面のコンポーネント

import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Dimensions.css'
//import PropTypes from 'prop-types'
import ImportImg from '../assets/images/imgImport.png'

// LectureDetails --------------------------------------------------------------------------
import uimg from '../assets/images/ecc_logo.jpg'  // 講義詳細で使用する例の画像
// Note ------------------------------------------------------------------------------------
import { BsPaperclip } from "react-icons/bs";                 // クリップ
import { MdOutlineFileUpload } from "react-icons/md";         // アップロードボタン
import { FaChevronRight } from "react-icons/fa";              // >
import { FaChevronLeft } from "react-icons/fa";               // <
import user_icon from "../assets/images/user_icon.png";       // アップしたユーザーのアイコン
import { AiFillLike } from "react-icons/ai";                  //　支援ボタンのアイコン
import img1 from '../assets/images/note2.png';                // 例の画像


//asideのユーザーメニュー
function UserMenu(itemData) {
  return (
    <aside className="aside flex-grow-[1] min-w-[300px] bg-[#427D9D] content-center flex flex-col items-center justify-between text-[#ffffff] text-2xl">
      <div className="text-center pt-[50px]">
        <div
          className="rounded-full bg-[#D9D9D9] w-[160px] h-[160px] flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${itemData.Pimage})`,
            backgroundSize: `cover`,
            backgroundPosition: `center center`,
          }}
        ></div>
        <div>{itemData.username}</div>
      </div>
      <div>
        <Link to={itemData.mypagepath}>マイページ</Link>
        <div className="py-3"></div>
        <Link to={itemData.settingpath}>ユーザー設定</Link>
      </div>
      <div></div>
      <div className="py-[50px]">
        <p>ログアウト</p>
      </div>
    </aside>
  )
}

//link
function RootUrl(itemData) {
  return (
    <Link
      to={itemData.linkpath}
      className="flex flex-col justify-center space-y-20 w-auto text-center items-center my-20"
    >
      <div className="flex justify-around items-center bg-[#D9D9D9] w-[80%] h-[196px] max-w-[700px] rounded-[20px] border-solid border-[#9BBEC8] border-[5px]">
        {/* <div className='border-dotted border-t mt-auto mb-10 border- border-main w-full'></div> */}
        <p className="text-[#164863] text-[36px] font-bold">{itemData.text}</p>
        <img className="w-[150px] -z-[-1]" src={itemData.name} alt="door" />
        {/* <div className="absolute border-t border-dotted border-[#9BBEC8] border-[10px] w-[55vw] max-w-[700px] top-[70%]"></div> */}
      </div>
    </Link>
  )
}

/*onChange 要素
            <p>ユーザー名</p>
                        <p>メールアドレス</p>
                                    <p>パスワード</p>
(e) => setUsername(e.target.value)
(e) => setEmail(e.target.value)
(e) => setPassword(e.target.value)

    value={username}
                value={email}
                              value={password}


*/

//フォーム入力用のinput
function InputField(InputData) {
  return (
    <div className="space-y-3">
      <p>{InputData.label}</p>
      <input
        className="border-b-[2px] border-[#427D9D] w-[100%] text-[2em]"
        type={InputData.type}
        value={InputData.value}
        onChange={InputData.onChange}
      />
    </div>
  )
}

//変更可能なProfile画像
function ProfileImageEditor(itemData) {
  const fileInputRef = useRef(null)
  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      // ファイルの処理（例：サーバーにアップロード）
      console.log('Selected file:', file)
    }
  }

  return (
    <section className="">
      <div
        className="relative rounded-full  w-[160px] h-[160px] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${itemData.Pimage})`,
          backgroundSize: `cover`,
          backgroundPosition: `center center`,
        }}
      >
        <button
          className="absolute inset-0 overflow-auto"
          onClick={handleButtonClick}
          style={{
            border: 'none',
            background: 'none',
            padding: 0,
            cursor: 'pointer',
          }}
        >
          <img
            className="absolute bottom-0 right-0 w-[60px] "
            src={ImportImg} // 適切な画像URLに変更
            alt="Click to upload"
          />
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }} // 完全に非表示にする
          onChange={handleFileChange}
        />
      </div>
    </section>
  )
}

//変更内容を保存するbtn
function SaveBtn() {
  return (
    <section>
      <button
        type="submit"
        className="bg-[#D9D9D9] text-[1.5em] font-bold w-[7em] h-[2em]"
      >
        編集を保存
      </button>
    </section>
  )
}

//前のページに戻るボタン
function ReturnBtn(pathData) {
  return (
    <Link to={pathData.linkpath} className="flex items-center pb-[50px]">
      <div className="text-[#ffffff] bg-[#164863] rounded-[50px] w-[40px] h-[40px] font-bold text-center content-center">
        <p>&#12296;</p>
      </div>

      <p className="pl-[20px] font-bold text-[#164863] text-[30px]">ホームへ</p>
    </Link>
  )
}

//詳細
function ArticleSearch(pathData) {
  return (
    <aside className="fixed top-[200px] left-[20px]">
      {/*前のページに戻るボタン*/}
      <ReturnBtn linkpath={pathData.linkpath} />
      <div className="bg-[#9BBEC822] flex flex-col justify-center items-left pl-[25px]  h-[35em] w-[30vw] max-w-[400px] border-b-[4px] border-t-[4px] border-[#427D9D] border-solid">
        <section className="space-y-3">
          <div className="space-y-2">
            <p className="text-[#164863] font-bold text-[1.5em]">場所:</p>
            <input type="text" />
          </div>

          <div className="space-y-2">
            <p className="text-[#164863] font-bold text-[1.5em]">日程:</p>
            <input type="text" />
          </div>
          <div className="space-y-2">
            <p className="text-[#164863] font-bold text-[1.5em]">時間:</p>
            <input type="text" />
          </div>
          <div className="space-y-2">
            <p className="text-[#164863] font-bold text-[1.5em]">ジャンル:</p>
            <input type="text" />
          </div>
          <div className="space-y-2">
            <p className="text-[#164863] font-bold text-[1.5em]">キーワード:</p>
            <input type="text" />

            <div className="border-triangle"></div>
          </div>
        </section>
        <section className="pt-[20px]">
          <form className="flex justify-around">
            <div className="flex justify-center">
              <p className="text-[1.5em] text-[#164863] font-bold">開講済</p>
              <input
                className="rounded-[50px] border-solid border-[2px] w-[25px]"
                type="checkbox"
                id="check"
              />
            </div>
            <div>
              <button className="text-center text-[1.5em] bg-[#427D9D] text-[#ffffff] w-[5em] rounded-[10px]">
                検索
              </button>
            </div>
          </form>
        </section>
      </div>
      <div></div>
    </aside>
  )
}

//講座バー
function ArticlePart(PartData) {
  return (
    <div
      className="pt-[20px] space-y-10 flex flex-col gradient-vontainer h-[158px] w-[55vw] max-w-[800px]"
      style={{
        background: `url(${PartData.BgImg}) center center no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <div className="space-x-2   flex pl-[20px] text-left items-center">
        <div>
          <img className="w-[50px] h-[50px]" src={PartData.Ticon} alt="ticon" />
        </div>
        <div className="font-bold">{PartData.groupname}</div>
      </div>
      <div className="items-end -z-[-1] text-[white] flex justify-between mx-[15px]">
        <div className="font-bold text-[2em]">{PartData.title}</div>
        <div>{PartData.date}</div>
      </div>
    </div>
  )
}

//Boxメニュー
function BoxMenu(itemData) {
  return (
    <td className="MenuBoxShadow max-w-[350px] max-h-[350px] w-[25vw] h-[25vw] bg-[#9BBEC8] text-[white] flex items-center justify-center rounded-[5px] font-bold text-[2vw]">
      {itemData.text}
    </td>
  )
}

//講義ごとのページ
const Note = () => {
  const noteImg = img1; // サムネ
  const upuser_img = user_icon; // アップしたユーザー画像
  const user_name = "kata__sk"; // アップしたユーザー名
  let good_count = 20;          // いいね数

  return (
    <>
    <div className='flex h-2/5 mt-5 justify-center '>
      <div className=' bg-gray-200 h-full w-4/5'>
        <BsPaperclip className='absolute flex end-[10%] size-16 -mt-7 text-main-middle'/>
        <img src={noteImg} alt="back" className='h-full w-5/6 m-auto'/>
        {/* 画像にかぶせるグラデーション */}
        {/* <div className='h-full w-auto bg-gradient-to-t from-blue-500'> </div> */}
        <div className='flex -mt-16 ml-28'>
          <div className='flex size-14 bg-gray-500 rounded-full'>
            <img src={upuser_img} alt="back" className='h-full w-auto rounded-full'/>
            <p className='my-auto ml-3 bg-white'>{user_name}</p>
          </div>
          <div className='flex my-auto ml-auto mr-28 '>
            <button type='button'><AiFillLike className='text-black size-8'/></button>
            <p className='my-auto ml-1'>{good_count}</p>
          </div>
        </div>
      </div>
      <button className='absolute right-[8%] end-28 top-[50%] size-20 bg-gray-300 rounded-full shadow-lg' type="submit">
        <MdOutlineFileUpload className='size-16 m-auto text-main-dark'/>
      </button>
    </div>
    <div className='flex font-bold justify-center text-main-dark text-2xl'>
        <button className='mx-2' type='button'><FaChevronLeft/></button>
        <p className='mx-2 '>1</p>
        <button className='mx-2' type='button'><FaChevronRight/></button>
      </div>
    </>
  )
}

//講義詳細
const LectureDetails = () => {
  const lecUimg = uimg;
  const uname = "ecc_comp";     // 大学ユーザ名
  const lname = "IoT講座";      // 講義名
  const teachname = "村上 慧";    // 講師名
  const detail = "ArduinoでRaspberry Piを用い、IoTに触れる。";  // 内容

  return (
    <>
      <div name="uni_account" className='flex size-12 rounded-full my-2'>
        <img src={lecUimg} alt='img' name='uimg' className='h-full w-auto rounded-full'/>
        <p className='my-auto ml-3'>{uname}</p>
      </div>

      <div name="lname" className='flex my-2'>
        <div className=' bg-main text-white text-center px-3'>講義</div>
        <p className='my-auto ml-3'>{lname}</p>
      </div>

      <div name="teachname" className='flex my-2'>
        <div className=' bg-main text-white text-center px-3'>講師</div>
        <p className='my-auto ml-3'>{teachname}</p>
      </div>

      <div name="detail" className='flex my-2'>
        <div className=' bg-main text-white text-center px-3'>内容</div>
        <p className='my-auto ml-3'>{detail}</p>
      </div>
    </>
  )
}

export {
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
}
