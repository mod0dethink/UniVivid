//インポート
import React from 'react'
import { Link } from 'react-router-dom'

import images from '../../assets/images.js'

import UniSidebar from '../../components/common/UniSidebar.js'
import HeaderLogo from '../../components/layout/layouts'

//ユーザーのホーム画面
function UserHomePage() {
  return (
    <div className="flex items-center justify-evenly w-[100vw] h-screen  font-bold">
      <UniSidebar />
      <HeaderLogo />
      <Link
        to="/umovielist"
        className="flex flex-col items-center justify-center"
      >
        <div className="w-[500px] h-[500px] border-solid border-[#9BBEC8] border-[5px] rounded-[20px] flex items-center justify-center">
          <img
            src={images.U1}
            alt="U1"
            width="300px"
            className="scale-hover-baw"
          />
        </div>
        <p className="text-[36px]">動画へ</p>
      </Link>
      <Link
        to="/userarticlelist"
        className="flex flex-col items-center justify-center"
      >
        <div className="w-[500px] h-[500px] border-solid border-[#9BBEC8] border-[5px] rounded-[20px] flex items-center justify-center">
          <img
            src={images.U2}
            alt="U2"
            width="300px"
            className="scale-hover-baw"
          />
        </div>
        <p className="text-[36px]">記事一覧へ</p>
      </Link>
    </div>
  )
}

export default UserHomePage
