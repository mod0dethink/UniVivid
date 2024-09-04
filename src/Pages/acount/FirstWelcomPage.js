//インポート
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import images from '../../assets/images'
import HeaderLogo from '../../components/layout/layouts'
//aseets
//component

// 初期画面
function FirstWelcomPage() {
  return (
    <div>
      <HeaderLogo color="text-[#fff]" />
      <section className="gradient-background w-[100vw] h-screen flex justify-around items-center text-center">
        <img
          src={images.pen}
          className="absolute w-[200px] top-[221px] left-[638px]"
          alt="pen"
        />
        <div className="space-y-10">
          <div>
            <p className="text-[35px] font-bold">UniVividを始める</p>
          </div>
          <div className="space-y-[20px]">
            <Link
              to="/login"
              className="link-btn flex flex-col items-center w-full"
            >
              <div className="inner-text">
                <p className="font-black ">Login</p>
              </div>
              <div className="flex">
                <div className="black-circle"></div>
                <div className="black-border"></div>
                <div className="triangle-right"></div>
              </div>
            </Link>

            {/*アカウント作成画面へ*/}
            <Link
              to="/entityselection"
              className="link-btn flex flex-col items-center w-full py-10"
            >
              <div className="font-black inner-text">New Account</div>
              <div className="flex">
                <div className="triangle-left"></div>
                <div className="black-border"></div>
                <div className="black-circle"></div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <p className="text-[white] text-[15px] tracking-[30px]">
            学びなおしのきっかけに!
          </p>
          <img src={images.big_logo} className="w-[500px]" alt="BigLogo" />
        </div>
      </section>
      <section className="w-[100vw] h-screen flex justify-around items-center text-center">
        <div>
          <span className="text-[#427D9D] font-bold">
            <span className="text-[64px]">U</span>
            <span className="text-[48px]">ni</span>
            <span className="text-[64px]">V</span>
            <span className="text-[48px]">ivid</span>
            <span className="text-[24px] text-[#000]">とは</span>
          </span>
          <p className="txet-[20px] font-bold">
            Univividは
            <br />
            <span className="text-[#427D9D] text-[30px]">
              ``自分が本当に学びたいのは何なのか``
            </span>
            を本質的に理解でき、
            <br />
            第二のキャンパスライフを着実に計画できます
          </p>
        </div>
        <div></div>
      </section>
      <section className="bg-[#427D9D] w-[100vw] h-screen flex justify-around items-center text-center">
        <div>
          <img
            src={images.WebImage1}
            className="w-[800px] rounded-[20px]"
            alt="WebImage1"
          />
        </div>
        <div className="text-[#fff]">
          <span className="font-bold">
            <span className="text-[64px]">シンプル</span>
            <span className="text-[48px]">で</span>
            <span className="text-[64px]">使いやすい</span>
            <span className="text-[48px]">デザイン</span>
          </span>
          <p className="text-[20px] font-bold">
            ビジネス戦略をも見据えた、社会人の学びなおし特化webアプリ。
            <br />
            大学で開かれる公開講義を無料で受けて、
            <br />
            <span className="text-[#FFD2AA] text-[30px]">
              ``本当に学びたいもの``
            </span>
            を見つけよう！
          </p>
        </div>
      </section>
      <section className="font-bold w-[100vw] h-screen flex justify-around items-center text-center">
        <div className="flex flex-col items-center">
          <div>
            <img src={images.WebImage2} className="w-[400px]" alt="WebImage2" />
          </div>
          <div>
            <p className="text-[#427D9D] text-[64px]">目的</p>
            <p>
              本サイトは、大学が無料で開講されている公開講義を運用して、
              <br />
              どの大学・どの学部が自分の学びたいものにマッチしているかを利用者が見出すことをサポートします。
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <div>
            <img src={images.WebImage3} className="w-[400px]" alt="WebImage3" />
          </div>
          <div>
            <p className="text-[#427D9D] text-[64px]">寄付しよう！</p>
            <p>
              寄付金は研究費や設備費などに充てられ、
              間接的に社会や大学がより良くなります。
              <br /> いい講義を開講してくれる大学には寄附し、
              <br />
              いい講義を存続できるようにしましょう。
            </p>
          </div>
        </div>
      </section>
      <section className="font-bold text-white bg-[#427D9D] w-[100vw] h-screen flex flex-col justify-around items-center text-center">
        <div className="text-[64px]">大学側の利用</div>
        <div>
          <img src={images.WebImage4} className="w-[400px]" alt="WebImage4" />
        </div>
        <div>
          寄付金は研究費や設備費などに充てられ、間接的に社会や大学がより良くなります。
          <br />
          いい講義を開講してくれる大学には寄附し、いい講義を存続できるようにしましょう。
        </div>
      </section>
      <section className="w-[100vw] h-screen flex justify-around items-center text-center"></section>
      <section className="text-white bg-[#427D9D] w-[100vw] h-[50px] flex justify-around items-center text-center">
        Copyright 2024 - Hemi / N. All Rights Reserved.
      </section>
    </div>
  )
}

export default FirstWelcomPage
