import React from 'react'
import { Link } from 'react-router-dom'

import ImportImg from '../assets/images/imgImport.png'
import ReturnImg from '../assets/images/return.png'
import '../assets/styles/Dimensions.css'

function UserSettingsPage() {
  return (
    <div className="items-center flex flex-col justify-around text-center h-screen">
      <section className="flex justify-between w-[100vw]">
        <Link to="/userhome" className="return-btn">
          <img className="w-[60px]" src={ReturnImg} alt="ReturnImg" />
        </Link>
        <div>
          <p className="text-[#164863] text-[30px] font-bold">ユーザー設定</p>
        </div>
        <div>　　　</div>
      </section>
      <section className="">
        <div className="relative rounded-full bg-[#D9D9D9] w-[160px] h-[160px] flex flex-col items-center justify-center">
          <div className="login-face"></div>
          <div className="py-1.5"></div>
          <div className="login-body "></div>
          <img
            className="absolute bottom-0 right-0 w-[60px]"
            src={ImportImg}
            alt="importimg"
          />
        </div>
      </section>
      <section className="w-[60vw] , text-left text-[#427D9D] space-y-5 max-w-[800px]">
        <div className="space-y-3">
          <p>ユーザー名</p>
          <input
            className="border-b-[2px] border-[#427D9D] w-[100%] text-[2em]"
            type="text"
          />
        </div>
        <div className="space-y-3">
          <p>メールアドレス</p>
          <input
            className="border-b-[2px] border-[#427D9D] w-[100%] text-[2em]"
            type="email"
          />
        </div>
        <div className="space-y-3">
          <p>パスワード</p>
          <input
            className="border-b-[2px] border-[#427D9D] w-[100%] text-[2em]"
            type="password"
          />
        </div>
      </section>
      <section>
        <button className="bg-[#D9D9D9] text-[1.5em] font-bold w-[7em] h-[2em]">
          編集を保存
        </button>
      </section>
    </div>
  )
}

export default UserSettingsPage
