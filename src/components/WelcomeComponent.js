import React from 'react'
import '../assets/styles/UnivividStyle.css'
import '../assets/styles/Dimensions.css'
import '../assets/styles/Animations.css'

import { Link } from 'react-router-dom'

function WelcomeComponent() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <section className="w-screen  bg-[#427d9d] text-white text-center font-bold py-5">
        <div>
          <span className="text-6xl">U</span>
          <span className="text-3xl">ni</span>
          <span className="text-6xl">V</span>
          <span className="text-3xl">ivid</span>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center sw-screen h-full">
        <div className="h-1/5 text-3xl">
          <p className="font-black">ようこそ、UniVividへ！</p>
        </div>

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
      <section className="w-screen bg-[#427d9d] text-white text-6xl text-center font-bold py-5">
        <div>　　　</div>
      </section>
    </div>
  )
}

export default WelcomeComponent
