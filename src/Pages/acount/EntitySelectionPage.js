//インポート
import React from 'react'
import { Link } from 'react-router-dom'
//assets
import PenImg from '../../assets/images/pen.png'
import TeacherImg from '../../assets/images/teacher.png'
//component
import {
  UnivividHeader,
  Unifooter,
  Logotext,
} from '../../components/LayoutComponent'

//新規登録 職種選択画面
function EntitySelectionPage() {
  return (
    <section>
    <div className="h-screen flex flex-col justify-between">
      <UnivividHeader title={<Logotext />} returnCol={1} link="/" bgCol={true} />
      <section className="flex flex-col items-center justify-center sw-screen h-full bg-[#FFFEF8]">
        {/*---個人or学校---*/}
        <div>
          <p>使用目的はどちらですか？</p>
        </div>
        <div className="flex">
          {/*個人*/}
          <Link
            to="/register"
            className="flex-1 w-1/3 min-w-[150px] w-[25vw] max-w-[500px]"
          >
            <div className="bg-scale-hover border border-solid border-[#164863] rounded-[50%]">
              <img src={PenImg} alt="pen" />
            </div>
            <p className="text-center font-bold">個人として使用</p>
          </Link>
          {/*Margin*/}
          <div className="px-[5vw]"></div>
          {/*学校*/}
          <Link
            to="/uniregister"
            className="flex-1 w-1/3 min-w-[150px] w-[25vw] max-w-[500px]"
          >
            <div className="bg-scale-hover border border-solid border-[#164863] rounded-[50%]">
              <img src={TeacherImg} alt="teacher" />
            </div>
            <p className="text-center font-bold">学校として使用</p>
          </Link>
        </div>
      </section>
      {/*---footer---*/}
      <section>
        <Unifooter />
      </section>
    </div>
    </section>
  )
}

export default EntitySelectionPage