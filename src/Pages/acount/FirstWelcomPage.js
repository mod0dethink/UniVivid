//インポート
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
//aseets
import images from '../../assets/images'
//component
import HeaderLogo from '../../components/layout/layouts'

// 初期画面
function FirstWelcomPage() {
  return (
    <div>
      <HeaderLogo color="text-white"/>
      <section className="gradient-background w-dvw h-dvh flex justify-around items-center text-center">
        <div className="space-y-10 h-full">
          <div className='flex h-2/5 items-end'>
            <p className="text-[35px] font-bold ml-auto mr-5">UniVividを始める</p>
            <img
            src={images.pen}
            className=" size-48 -mr-44"
            alt="pen"
            />
          </div>
          <div className="space-y-[20px]">
            {/*ログイン画面へ*/}
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
          <p className="text-white text-[15px] tracking-[30px]">
            学びなおしのきっかけに!
          </p>
          <img src={images.big_logo} className="w-[500px]" alt="BigLogo" />
        </div>
      </section>
      {/* 説明文1 */}
      <section>
      <div className='w-dvw'>
        <div className='font-bold w-1/2 h-dvh content-center text-center'>
          <p className='text-main mb-8'>
            <span className="text-5xl">U</span>
            <span className="text-3xl">ni</span>
            <span className="text-5xl">V</span>
            <span className="text-3xl">ivid</span>
            <span className='text-black'>とは</span>
          </p>
          <p>Univividは</p>
          <p><span className='text-main text-xl'>“自分が本当に学びたいのは何なのか”</span>を本質的に理解でき、</p>
          <p>第二のキャンパスライフを着実に計画できます</p>
        </div>
      </div>
      </section>
      {/* 説明文2 */}
      <section>
      <div className='bg-main h-dvh w-dvw flex font-bold'>
        <div className='w-1/2 content-center'>
          <img src={images.WebImage1} alt="web" title="web" className='rounded-2xl w-5/6 mx-auto'/>
        </div>
        <div className='w-1/2 text-white content-center text-center'>
          <p className='text-3xl mb-8 tracking-wide'>
            <span className='text-6xl'>シンプル</span>で
            <span className='text-6xl'>使いやすい</span>デザイン
          </p>
          <div className='text-sm'>
            <p>ビジネス戦略をも見据えた、社会人の学びなおし特化webアプリ。</p>
            <p> 大学で開かれる公開講義を無料で受けて、</p>
            <p><span className='text-xl text-[#FFD2AA]'>“本当に学びたいモノ”</span>を見つけよう！</p>
          </div>
        </div>
      </div>
      </section>
      {/* 説明文3 */}
      <section>
      <div className='h-dvh w-dvw font-bold flex items-center text-center'>
        <div className='w-1/2 h-full px-20'>
          <div className='h-3/5 content-end'>
            <img src={images.WebImage2}
              alt=""
              className='w-96 mx-auto'
            />
          </div>
          <div className='mt-10'>
            <p className='text-main text-5xl mb-5'>目的</p>
            <p>本サイトは、大学が無料で開講されている公開講義を運用して、どの大学・どの学部が自分の学びたいものにマッチしているかを利用者が見出すことをサポートします。</p>
          </div>
        </div>
        <div className='w-1/2 h-full px-20'>
          <div className='h-3/5 content-end'>
          <img src={images.WebImage3}
            alt=""
            className='w-96 mx-auto'
          />
          </div>
          <div className='mt-10'>
            <p className='text-main text-5xl mb-5'>寄附をしよう！</p>
            <p>寄付金は研究費や設備費などに充てられ、 間接的に社会や大学がより良くなります。 いい講義を開講してくれる大学には寄附し、いい講義を存続できるようにしましょう。</p>
          </div>
        </div>
      </div>
      </section>
      {/* 説明文4 */}
      <section className="font-bold text-white bg-main w-[100vw] h-screen flex flex-col justify-around items-center text-center">
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
      <section className="text-white bg-main w-[100vw] h-[50px] flex justify-around items-center text-center">
        Copyright 2024 - Hemi / N. All Rights Reserved.
      </section>
    </div>
  )
}

export default FirstWelcomPage
