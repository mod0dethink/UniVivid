//インポート
import React from 'react'
import { Link } from 'react-router-dom'

import images from '../../assets/images.js'
import HeaderLogo from '../../components/layout/layouts.js'

//新規登録 職種選択画面
function EntitySelectionPage() {
  const ChoceData = [
    { link: '/register', img: images.pen, text: '個人として使用' },
    { link: '/uniregister', img: images.teacher, text: '学校として使用' },
  ]
  return (
    <div className="bg-[#DDF2FD] w-[100vw] h-screen flex flex-col justify-center items-center">
      <HeaderLogo />
      <div className="bg-[#fff] w-[1500px] h-[700px] rounded-[50px] flex flex-col justify-center items-center">
        <p>使用目的はどちらですか？</p>
        <div className="flex justify-around  w-[100%]">
          {ChoceData.map(({ link, img, text, index }) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <Link
                to={link}
                className="bg-scale-hover border border-solid border-[#164863] rounded-[50%] w-[400px] h-[400px]"
              >
                <img src={img} alt={`${img}`} width="400px" />
              </Link>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EntitySelectionPage
