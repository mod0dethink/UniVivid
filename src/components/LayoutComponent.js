import React from 'react'
import { Link } from 'react-router-dom'
import ReturnImgW from '../assets/images/retunbtnw.png' // 戻るボタン白
import ReturnImg from '../assets/images/return.png'     // 戻るボタン紺

// タイトルロゴ
function Logotext() {
  return (
    <p>
      <span className="text-3xl">U</span>
      <span className="text-xl">ni</span>
      <span className="text-3xl">V</span>
      <span className="text-xl">ivid</span>
    </p>
  )
}

/**
 * ヘッダー
 * @param {*ヘッダーに必要なデータ} itemData
 * @param {*タイトル} title
 * @param {*ReturnBtnのリンク} link
 * @param {*背景色} bgCol true:bg-main false:bg-main-bg
 * @param {*ReturnBtnの有無} hidden 
 * @returns 
 */
function UnivividHeader(itemData) {
  return (
    <>
    <div className='flex fixed w-screen h-14 z-50'
    style={{backgroundColor: itemData.bgCol?'#427D9D':'#FFFEF8'}}>
      <div className='absolute'>
        <MainReturenBtn link={itemData.link} returnCol={itemData.returnCol} hidden={itemData.hidden}/>
      </div>
      <p className='text-3xl m-auto text-white font-bold'>{itemData.title}</p>
    </div>
    </>
  )
}

// 前画面に戻るボタン
function MainReturenBtn(itemData) {
  // ボタンの色(　0 = 紺　1 = 白　)
  const ReturnBtn = [ReturnImg, ReturnImgW];
  return (
    <Link to={itemData.link}>
        <button className='size-12 ml-5 pt-2' hidden={itemData.hidden}>
          <img src={ReturnBtn[itemData.returnCol]} alt='back' />
        </button>
    </Link>
  )
}

// フッター
function Unifooter() {
  return (
    <footer className="fixed w-screen bg-main text-white text-[60px] text-center font-bold py-6 bottom-0"></footer>
  )
}

// ユーザーヘッダー
function UserHeader(itemData) {
  return (
    <section className="-z-[-2] fixed w-screen bg-[#427d9d] text-white text-center font-bold h-14 pt-2">
      <Logotext />
      <section className="absolute left-[5vw] top-[20px]">
        <div
          className="relative rounded-full size-24 flex flex-col items-center justify-center"
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
  MainReturenBtn,
  Unifooter,
  Logotext,
  UserHeader
}
