import React from 'react'
import '../assets/styles/UnivividStyle.css'
import '../assets/styles/Dimensions.css'
import '../assets/styles/Animations.css'

import { Link } from 'react-router-dom'
import PenImg from '../assets/images/pen.png'
import TeacherImg from '../assets/images/teacher.png'
import { UnivividHeader, Unifooter } from './LayoutComponent'

function EntitySelection() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <section>
        <UnivividHeader />
      </section>
      <section className="flex flex-col items-center justify-center sw-screen h-full bg-[#FFFEF8]">
        <div>
          <p>使用目的はどちらですか？</p>
        </div>
        <div className="flex">
          <Link
            to="/createaccount"
            className="flex-1 w-1/3 min-w-[150px] w-[25vw] max-w-[500px]"
          >
            <div className="bg-scale-hover border border-solid border-[#164863] rounded-[50%]">
              <img src={PenImg} alt="pen" />
            </div>
            <p className="text-center font-bold">個人として使用</p>
          </Link>
          <div className="px-[5vw]"></div>
          <Link
            to="/createschoolaccount"
            className="flex-1 w-1/3 min-w-[150px] w-[25vw] max-w-[500px]"
          >
            <div className="bg-scale-hover border border-solid border-[#164863] rounded-[50%]">
              <img src={TeacherImg} alt="teacher" />
            </div>
            <p className="text-center font-bold">学校として使用</p>
          </Link>
        </div>
      </section>
      <section>
        <Unifooter />
      </section>
    </div>
  )
}

export default EntitySelection
