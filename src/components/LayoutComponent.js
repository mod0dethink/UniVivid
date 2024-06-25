import React from 'react'
import { Link } from 'react-router-dom'
import ReturnImg from '../assets/images/return.png'
//テスト用
import Pen from '../assets/images/pen.png'

//ヘッダー
function Logotext() {
  return (
    <section className="fixed w-screen  bg-[#427d9d] text-white text-center font-bold py-2">
      <span className="text-5xl">U</span>
      <span className="text-3xl">ni</span>
      <span className="text-5xl">V</span>
      <span className="text-3xl">ivid</span>
    </section>
  )
}
function EmptyHeader() {
  return (
    <section className="text-[60px] fixed w-screen  bg-[#427d9d] text-white text-center font-bold py-5">
      <div>　　　</div>
    </section>
  )
}

function UnivividHeader(itemData) {
  return (
    <section className="text-6xl fixed w-screen  bg-[#427d9d] text-white text-center font-bold py-5">
      {itemData.title}
    </section>
  )
}
function Unifooter() {
  return (
    <footer className="w-screen bg-[#427d9d] text-white text-[60px] text-center font-bold py-5"></footer>
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
