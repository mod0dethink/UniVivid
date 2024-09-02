//インポート
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
//aseets
import Logo from '../../assets/images/start_logo.png'
//component
import {
  UnivividHeader,
  Unifooter,
  Logotext
} from '../../components/LayoutComponent'

// 初期画面
function FirstWelcomPage() {
  const pageLoadingRef = useRef(null)
  const pageStartRef = useRef(null)
  const pageImgRef = useRef(null)

  const none = () => {
    if (pageStartRef.current) pageStartRef.current.style.display = 'none'
    if (pageLoadingRef.current) pageLoadingRef.current.style.display = 'none'
  }

  const startAnimation = () => {
    if (pageStartRef.current) {
      pageStartRef.current.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 2000,
        fill: 'forwards',
      })
    }
  }

  const loadAnimation = () => {
    if (pageLoadingRef.current) {
      pageLoadingRef.current.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 500,
        fill: 'forwards',
      })
    }
  }

  const loadImg = () => {
    if (pageImgRef.current) {
      pageImgRef.current.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 500,
        fill: 'forwards',
      })
    }
  }

  useEffect(() => {
    startAnimation()
    const imgTimeout = setTimeout(loadImg, 3000)
    const loadTimeout = setTimeout(loadAnimation, 5000)
    const noneTimeout = setTimeout(none, 6500)

    return () => {
      clearTimeout(imgTimeout)
      clearTimeout(loadTimeout)
      clearTimeout(noneTimeout)
    }
  }, [])

  return (
    <section>
    <div className="h-screen flex flex-col justify-between">
      <div id="loading_start" ref={pageStartRef} style={{ opacity: 1 }}></div>
      <div id="loading" ref={pageLoadingRef} style={{ opacity: 1 }}>
        <img
          id="loading_img"
          ref={pageImgRef}
          src={Logo}
          alt="Loading"
          style={{ opacity: 0 }}
        />{' '}
      </div>
      <UnivividHeader title={<Logotext />} returnCol={0} hidden="hidden" />
      <section className="flex flex-col items-center justify-center sw-screen h-full bg-main-bg">
        <div className="h-1/5 text-2xl mt-24">
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
          to="/entityselection"
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
      <Unifooter />
    </div>
    </section>
  )
}

export default FirstWelcomPage