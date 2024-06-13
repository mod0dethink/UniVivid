//libraryのインポート
import React from 'react'
import { Link } from 'react-router-dom'
//アセットのインポート
import '../assets/styles/UnivividStyle.css'
import '../assets/styles/Dimensions.css'
import '../assets/styles/Animations.css'
//componentのインポート
import { UnivividHeader, Unifooter } from './LayoutComponent'

function WelcomeComponent() {
  return (
    <div className="h-screen flex flex-col justify-between">
      {/*header*/}
      <section>
        <UnivividHeader />
      </section>

      {/*main*/}
      <section className="flex flex-col items-center justify-center sw-screen h-full">
        <div className="h-1/5 text-3xl">
          <p className="font-black">ようこそ、UniVividへ！</p>
        </div>
        {/*ログイン画面へ*/}
        <Link
          to="/login"
          className="link-btn flex flex-col items-center w-full py-10"
        >
          <div className="inner-text">
            <p className="font-black ">Login</p>
          </div>

          <div className="w-1/2 justify-end flex">
            <div className="black-circle"></div>
            <div className="black-border"></div>
            <div className="triangle-right"></div>
          </div>
        </Link>

        {/*アカウント作成画面へ*/}
        <Link
          to="/entitiyselection"
          className="link-btn flex flex-col items-center w-full py-10"
        >
          <div className="font-black inner-text">NewAccount</div>
          <div className="w-1/2 justify-end flex">
            <div className="triangle-left"></div>
            <div className="black-border"></div>
            <div className="black-circle"></div>
          </div>
        </Link>
      </section>

      {/*footer*/}
      <section className="">
        <Unifooter />
      </section>
    </div>
  )
}

export default WelcomeComponent
