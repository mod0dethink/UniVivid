//インポート
import React from 'react'
import { Link } from 'react-router-dom'
//component
import images from '../../assets/images.js'

import UniSidebar from '../../components/common/UniSidebar.js'
import HeaderLogo from '../../components/layout/layouts.js'

/*------ユーザーのデータ変数------*/

//マイページ
function UserMyPage() {
  const MyPageContents = [
    { img: images.U3, text: '受講履歴一覧', link: '/articlehistory' },
    {
      img: images.U4,
      text: 'お気に入りいいねしたノート',
      link: '/favoritelist',
    },
    { img: images.U5, text: 'アップロードノート一覧', link: '/upnotelist' },
  ]
  return (
    <div className="flex justify-around items-center w-[100vw] h-screen text-center">
      <UniSidebar />
      <HeaderLogo />

      {MyPageContents.map(({ img, text, link, index }) => (
        <Link
          to={link}
          key={index}
          className="flex flex-col justify-center items-center text-[36px] "
        >
          <img
            src={img}
            alt="U"
            width="300px"
            className="scale-hover-baw border-solid border-[#9BBEC8] border-[5px] rounded-[20px]"
          />
          <p>{text}</p>
        </Link>
      ))}
    </div>
  )
}

export default UserMyPage
