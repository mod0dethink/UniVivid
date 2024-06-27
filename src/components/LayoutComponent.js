import React from 'react'
import { Link } from 'react-router-dom'
import ReturnImgW from '../assets/images/retunbtnw.png' // 戻るボタン白
import ReturnImg from '../assets/images/return.png'     // 戻るボタン紺
//テスト用
import Pen from '../assets/images/pen.png'

//ヘッダー
function Logotext() {
  return (
    <p>
      <span className="text-5xl">U</span>
      <span className="text-3xl">ni</span>
      <span className="text-5xl">V</span>
      <span className="text-3xl">ivid</span>
    </p>
  )
}
function EmptyHeader() {
  return (
    <section className="text-[60px] fixed w-screen  bg-[#427d9d] text-white text-center font-bold py-5">
      <div>　　　</div>
    </section>
  )
}

/**
 * 
 * @param {*ヘッダーに表示するタイトル} itemData 
 * @param {*戻るボタンの移動先} link 
 * @param {*戻るボタンの有無(引数でhiddenを渡したら隠れる)} hidden
 * @returns ヘッダー
 */
function UnivividHeader(itemData) {
  // 戻るボタンの色(　0 = 紺　1 = 白　)
  const ReturnBtn = [ReturnImg, ReturnImgW];

  return (
    <>
    <section className="flex fixed w-screen bg-main py-5">
      <Link to={itemData.link}>
        <button className='absolute size-14 ml-5' hidden={itemData.hidden} >
          <img src={ReturnBtn[itemData.returnCol]} alt='back' />
        </button>
      </Link>
      <p className='text-6xl m-auto text-white font-bold'>{itemData.title}</p>
    </section>
    </>
  )
}
// フッター
function Unifooter() {
  return (
    <footer className="w-screen bg-main text-white text-[60px] text-center font-bold py-5"></footer>
  )
}

function WhiteHeader(headerdata) {
  return (
    <section className="flex justify-between w-[100vw]">
      <Link to={headerdata.retunrpath} className="return-btn">
        <img className="w-[60px]" src={ReturnImg} alt="ReturnImg" />
      </Link>
      <div>
        <p className="text-[#164863] text-[30px] font-bold">ユーザー設定</p>
      </div>
      <div>　　　</div>
    </section>
  )
}
function UserHeader(itemData) {
  return (
    <section className="-z-[-2] fixed w-screen  bg-[#427d9d] text-white text-center font-bold py-5">
      <div>
        <span className="text-6xl">U</span>
        <span className="text-3xl">ni</span>
        <span className="text-6xl">V</span>
        <span className="text-3xl">ivid</span>
      </div>
      <section className="absolute left-[5vw] top-[20px]">
        <div
          className="relative rounded-full w-[160px] h-[160px] flex flex-col items-center justify-center"
          style={{
            background: `url(${itemData.iconpath}) center center no-repeat`,
            backgroundSize: `cover`,
          }}
        ></div>
      </section>
    </section>
  )
}

export {
  UnivividHeader,
  Unifooter,
  EmptyHeader,
  Logotext,
  WhiteHeader,
  UserHeader,
}
