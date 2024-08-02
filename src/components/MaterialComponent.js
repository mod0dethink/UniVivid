//ユーザ画面のコンポーネント

// ----------------------------------------インポート --------------------------------------------------
import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import '../assets/styles/Dimensions.css'
import ImportImg from '../assets/images/imgImport.png'
// LectureDetails----------------------------------------
import uimg from '../assets/images/ecc_logo.jpg'  // 講義詳細で使用する例の画像
// Note---------------------------------------------
import { BsPaperclip } from "react-icons/bs";                 // クリップ
import { MdOutlineFileUpload } from "react-icons/md";         // アップロードボタン
import { FaChevronRight } from "react-icons/fa";              // >
import { FaChevronLeft } from "react-icons/fa";               // <
import user_icon from "../assets/images/user_icon.png";       // アップしたユーザーのアイコン
import { AiFillLike } from "react-icons/ai";                  //　支援ボタンのアイコン
import img1 from '../assets/images/note2.png';                // 例の画像
import img2 from '../assets/images/note1.jpg';
// Board-------------------------------------------------
import { TbPencilPlus } from "react-icons/tb";  // 追加
import { OtherUserPage } from '../Pages/UserHomePage'
import { MainReturenBtn } from './LayoutComponent'
import {
  OpenNote,
} from "../assets/scripts/animation.js"

//asideのユーザーメニュー
function UserMenu(itemData) {
  return (
    <aside className="aside flex-grow-[1] min-w-[300px] bg-main content-center flex flex-col items-center justify-between text-white text-2xl">
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
        <Link to={itemData.mypagepath} hidden={itemData.hidden}>マイページ</Link>
        <div className="py-3"></div>
        <Link to={itemData.settingpath}>ユーザー設定</Link>
      </div>
      <Link to='/'>
        <div className="py-[50px]">
          <p>ログアウト</p>
        </div>
      </Link>
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
        <p className="text-[#164863] text-[36px] font-bold">{itemData.text}</p>
        <img className="w-[150px] -z-[-1]" src={itemData.name} alt="door" />
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
        className="border-b-[2px] border-main w-full text-2xl"
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
    <section>
      <div
        className="rounded-full size-[140px] items-center justify-center mt-16"
        style={{
          backgroundImage: `url(${itemData.Pimage})`,
          backgroundSize: `cover`,
          backgroundPosition: `center center`,
        }}
      >
        <button
          className="mt-24 ml-[80px]"
          onClick={handleButtonClick}
          style={{
            border: 'none',
            background: 'none',
            padding: 0,
            cursor: 'pointer',
          }}
        >
          <img
            className="w-[60px]"
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
function HomeReturnBtn(pathData) {
  return (
    <Link to={pathData.linkpath} className="flex items-center mb-8">
      <div className="text-white bg-main-dark rounded-full size-10 p-3">
        <FaChevronLeft />
      </div>
      <p className="ml-5 font-bold text-main-dark text-3xl">ホームへ</p>
    </Link>
  )
}

//検索エリア
function ArticleSearch(pathData) {
  return (
    // <aside className="fixed top-[200px] left-[20px]">
    <aside className="fixed w-full">
      <div className="bg-[#9BBEC822] flex flex-col justify-center items-left pl-[25px] py-3 w-3/12 border-b-[4px] border-t-[4px] border-main border-solid
        font-bold text-main-dark">
        <section className="space-y-1">
          <div className="space-y-2">
            <p>場所:</p>
            <input type="text" />
          </div>

          <div className="space-y-2">
            <p>日程:</p>
            <input type="text" />
          </div>
          <div className="space-y-2">
            <p>時間:</p>
            <input type="text" />
          </div>
          <div className="space-y-2">
            <p>ジャンル:</p>
            <input type="text" />
          </div>
          <div className="space-y-2">
            <p>キーワード:</p>
            <input type="text" />

            <div className="border-triangle"></div>
          </div>
        </section>
        <section className="pt-[20px]">
          <form className="flex justify-around">
            <div className="flex">
              <input
                className="border-solid border-[2px] w-4"
                type="checkbox"
                id="check"
              />
              <p className="text-2xl text-[#164863] font-bold ml-2">開講済</p>
            </div>
            <div>
              <button className="text-center text-2xl bg-[#427D9D] text-[#ffffff] w-[5em] rounded-[10px]">
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

/**
 * 講座バー
 * @param {*} PartData 
 * @param {*背景画像} BgImg
 * @param {*アイコン画像} Ticon
 * @param {*大学のユーザ名} groupname
 * @param {*講座名} title
 * @param {*日付} date
 * @returns 
 */
function ArticlePart(PartData) {
  return (
    <Link to={PartData.link}>
    <div
      className="gradient-vontainer pt-5 space-y-10 flex flex-col h-[158px] w-[55vw] max-w-[800px] mb-5"
      style={{
        background: `url(${PartData.BgImg}) center center no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <div className="space-x-2 flex pl-[20px] text-left items-center">
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
    </Link>
  )
}

// タブごとの内容
function SwichPage(item) {
  switch(item.isPage) {
    //コメント
    case 0:
      return(
        <section>
        {item.comment.map(element => 
        <div key={element} className=" flex justify-around border-b border-[#838181] w-[80vw] mb-[22px]">
          <div className="ml-2 flex-grow">
            <input
              type="text"
              placeholder={element}
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
        )}
        </section>
      )
    
    //ノート
    case 1:
      return(
        <section>
        {item.comment.map(element => 
          <div key={element} className="flex justify-around border-b border-[#838181] w-[80vw] mb-[22px]">
          <div className="ml-2 flex-grow">
            <p type="text" placeholder="" readOnly className="px-2 py-1 flex-grow mr-2 w-[55vw]">{element}</p>
          </div>
          <div className="flex space-x-2 mr-3 mb-1 text-[17px]">
            <button className="font-bold bg-[#E74646] px-4 py-1 ">
              削除
            </button>
          </div>
        </div>
        )}
        </section>
      )
  }
}

// 講義とノートで切り替えるバー
function SwichBar(handleButtonClick){
  return(
    <>
    <section className="pt-28 flex justify-around border-b-[2px] border-[#838181] w-[80vw]">
      <button id='lecture' className="border-b-[2px] border-[#229DF6] w-[15vw]"
      onClick={handleButtonClick(1)}>
        あ
      </button>
      <button id='note' className="border-b-[2px] border-[#229DF6] w-[15vw]">
        {/* {this.props.tab2} */}
      </button>
    </section>
    </>
  )
}
//Boxメニュー
function BoxMenu(itemData) {
  return (
    <Link
      to={itemData.linkpath}
      className="MenuBoxShadow max-w-[350px] max-h-[350px] w-[25vw] h-[25vw] bg-main-middle text-white flex items-center justify-center rounded-md font-bold text-3xl"
    >
      <p>{itemData.text}</p>
    </Link>
  )
}

// Uniの記事 作成・編集・確認 画面
const InputItems = ({ handle }) => {
  //入力値
  const [lectureName, setLectureName] = useState('');
  const [teacher, setTeacher] = useState('');
  const [date, setDate] = useState('');
  const [genre, setGenre] = useState('');
  const [img, setImg] = useState('');
  const [offer, setOffer] = useState('');
  const [detaile, setDetaile] = useState('');
  const data = [lectureName,teacher,date,genre,img,offer,detaile];

  //入力
  const inputErea = document.querySelectorAll('input');
  inputErea.addEventListener('change', (event) => {
    const itemData = null;
    switch(event.target.getElementById){
      case 'lectureName':
        setLectureName(event.target.value);
        itemData = lectureName;
        break;
      case 'teacher':
        setTeacher(event.target.value);
        itemData = teacher;
        break;
      case 'date':
        setDate(event.target.value);
        itemData = date;
        break;
      case 'genre':
        setGenre(event.target.value);
        itemData = genre;
        break;
      case 'img':
        setImg(event.target.value);
        itemData = img;
        break;
      case 'offer':
        setOffer(event.target.value);
        itemData = offer;
        break;
      case 'detail':
        setDetaile(event.target.value);
        itemData = detaile;
        break;
    }
    handle(data);
  })

  return (
    <div>
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
          htmlFor="teacher"
          className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
        >
          2.講師
        </label>
        <input
          id="teacher"
          className="w-full lg:w-[600px] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
          placeholder=""
        />
      </div>
      <div className="mx-auto max-w-[600px] mb-[1.5rem]">
        <label
          htmlFor="date"
          className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
        >
          3.日時
        </label>
        <input
          id="date"
          className="w-full lg:w-[600px] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
          placeholder=""
        />
      </div>
      <div className="mx-auto max-w-[600px] mb-[1.5rem]">
        <label
          htmlFor="genre"
          className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
        >
          4.ジャンル
        </label>
        <input
          id="genre"
          className="w-full lg:w-[600px] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
          placeholder=""
        />
      </div>
      <div className="mx-auto max-w-[600px] mb-[1.5rem]">
        <label
          htmlFor="img"
          className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
        >
          5.表示画像
        </label>
        <input
          id="img"
          className="w-full lg:w-[600px] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
          placeholder=""
        />
      </div>
      <div className="mx-auto max-w-[600px] mb-[1.5rem]">
        <label
          htmlFor="offer"
          className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
        >
          6.申込みURL
        </label>
        <input
          id="offer"
          className="w-full lg:w-[600px] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
          placeholder=""
        />
      </div>
      <div className="mx-auto max-w-[600px] mb-[1.5rem]">
        <label
          htmlFor="detaile"
          className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
        >
          7.講義内容
        </label>
        <textarea
          id="detaile"
          type="text"
          className="w-[600px] h-[10rem] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
          placeholder=""
        />
      </div>
    </div>
  )
}
InputItems.propTypes = {
  handle: PropTypes.func.isRequired, // 'handle'を関数として定義し、必須とする
};

//講義ごとのページ
const Note = () => {
  const noteImg = img1; // サムネ
  const noteImg2 = img2;
  const notePages = [noteImg, noteImg2];
  const upuser_img = user_icon; // アップしたユーザー画像
  const user_name = "kata__sk"; // アップしたユーザー名
  const [isGoodState, setIsGoodState] = useState(false);
  const [isGoodCount, setIsGoodCount] = useState(20);      // いいね数管理の変数
  const [isPageCount, setIsPageCount] = useState(1);      // ページ枚数管理の変数
  
  React.useEffect(() => {
    OpenNote(notePages[isPageCount-1]);
    console.log(document.readyState);
  })

  return (
    <>
    <div className='flex h-2/5 mt-5 justify-center'>
      <div id='noteImg' className='relative bg-gray-200 h-full w-4/5'>
        <BsPaperclip className='absolute size-16 right-0 -top-5 text-main'/>
        <img src={notePages[isPageCount-1]} alt="back" className='h-full w-5/6 m-auto object-cover'/>
        <div className=' bg-gradient-to-t from-slate-900 absolute h-1/2 w-full bottom-0'></div>
        <div className='flex -mt-16 ml-28'>
          <Link to='/otheruser'>
            <div className='flex size-14 bg-gray-500 rounded-full text-white'>
              <img src={upuser_img} alt="back" className='h-full w-auto rounded-full z-10'/>
              <p className='my-auto ml-3 z-10'>{user_name}</p>
            </div>
          </Link>
          <div className='flex my-auto ml-auto mr-28 z-10 text-white'>
            <button type='button' id='goodBtn' onClick={() => {setIsGoodState(!isGoodState) }}>
              <AiFillLike className={isGoodState ? 'size-8 text-main' : 'size-8 text-white'}
              onClick={() => {isGoodState ? setIsGoodCount(isGoodCount-1) : setIsGoodCount(isGoodCount+1)}}/>
            </button>
            <p className='my-auto ml-1'>{isGoodCount}</p>
          </div>
        </div>
      </div>
      <button id='testBtn' onClick={() => {
        console.log(document.getElementById("test_div"));
      }} className='absolute right-[8%] end-28 top-[50%] size-16 bg-gray-300 rounded-full shadow-lg' type="submit">
        <MdOutlineFileUpload className='size-14 m-auto text-main-dark'/>
      </button>
    </div>
    <div className='flex font-bold justify-center text-main-dark text-2xl'>
        <button className='mx-2' type='button'
        onClick={() => {if(isPageCount > 1)setIsPageCount(isPageCount-1)}}
        >
          <FaChevronLeft/>
        </button>
        <p className='mx-2'>{isPageCount}</p>
        <button className='mx-2' type='button'
        onClick={() => {if(isPageCount < notePages.length)setIsPageCount(isPageCount+1)}}
        ><FaChevronRight/></button>
      </div>
    </>
  )
}

//講義詳細
function LectureDetails() {
  const lecUimg = uimg;
  const uname = "ecc_comp";     // 大学ユーザ名
  const lname = "IoT講座";      // 講義名
  const teachname = "村上 慧";    // 講師名
  const detail = "ArduinoでRaspberry Piを用い、IoTに触れる。";  // 内容

  return (
    <>
      <Link to='/univercitypage'>
        <button type='submit' name="uni_account" className='flex size-12 rounded-full my-2'>
          <img src={lecUimg} alt='img' name='uimg' className='h-full w-auto rounded-full'/>
          <p className='my-auto ml-3'>{uname}</p>
        </button>
      </Link>
      <div className='font-bold'>
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
      </div>
    </>
  )
}

// 関連記事のリンク
const ConnectLink = () => {
  return (
    <div className=' border-main-middle border-2 border-dashed h-full w-9/12'>
      <p className='text-xl text-main-dark py-2 text-center'>関連情報</p>
      <ul className='ml-5 mt-2'>
        <li className='mb-2'>あああああああああああ</li>
        <li className='mb-2'>いいいいいいいいいいいいいいい</li>
      </ul>
    </div>
  )
}

// 掲示板コメントダイアログ
function ComentDialog(item) {
  return (
    <dialog 
    className='bg-black/50 h-screen w-screen content-center'
    open={item.open}
    >
      <form method='dialog' className='bg-white h-3/4 w-96 m-auto rounded-md'>
        <div name='title' className='flex h-14 w-full bg-main-dark text-white text-2xl rounded-t-md'>
          <p className='my-auto ml-[40%]'>コメント</p>
          <button className='font-normal ml-auto mr-5'>✕</button>
        </div>
        <div className='border-2 h-2/3 w-3/4 ml-12 mt-5'>
          <textarea className='h-full w-full resize-none' placeholder='コメントを入力してください。'></textarea>
        </div>
        <button className='bg-[#2D92C9] bg-gradient-to-t from-[#164863] text-white px-10 ml-[35%] mt-5 rounded-md py-1'>送信</button>
      </form>
    </dialog>
  )
}

// 他ユーザーの表示
function OtherMenu(itemData) {
  return(
    <>
    <div className='h-screen w-1/4 bg-main'>
      <MainReturenBtn returnCol={0} link={itemData.link}/>
      <div className="pt-10 w-full text-center">
        <div
          className="rounded-full mx-auto bg-[#D9D9D9] size-28"
          style={{
            backgroundImage: `url(${itemData.img})`,
            backgroundSize: `cover`,
            backgroundPosition: `center center`,
          }}
        ></div>
        <p className='mt-2 font-bold text-white'>{itemData.name}</p>
      </div>
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
  HomeReturnBtn,
  InputItems,
  ConnectLink,
  ComentDialog,
  OtherMenu,
  SwichBar,
  SwichPage,
}
