import React from 'react'
import { Link } from 'react-router-dom'
import ReturnImg from '../assets/images/return.png'
//ヘッダー
function Logotext() {
  return (
    <div>
      <span className="text-6xl">U</span>
      <span className="text-3xl">ni</span>
      <span className="text-6xl">V</span>
      <span className="text-3xl">ivid</span>
    </div>
  )
}
function EmptyHeader() {
  return (
    <section className="-z-[-2] text-[60px] fixed w-screen  bg-[#427d9d] text-white text-center font-bold py-5">
      <div>　　　</div>
    </section>
  )
}
function UnivividHeader(itemData) {
  return (
    <section className="text-6xl -z-[-2] fixed w-screen  bg-[#427d9d] text-white text-center font-bold py-5">
      {itemData.title}
    </section>
  )
}
function Unifooter() {
  return (
    <section className="w-screen bg-[#427d9d] text-white text-[60px] text-center font-bold py-5">
      <div>　　　</div>
    </section>
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
export { UnivividHeader, Unifooter, EmptyHeader, Logotext, WhiteHeader }
