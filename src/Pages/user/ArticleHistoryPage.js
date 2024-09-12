//インポート
import React from 'react'
//component
import ArticlePart from '../../components/materialComponent/ArticlePart.js'

//　テスト用

import images from '../../assets/images.js'
import UniSidebar from '../../components/common/UniSidebar.js'
import HeaderLogo from '../../components/layout/layouts.js'

// 受講履歴一覧
function ArticleHistoryPage() {
  // ！テストデータ！

  const data = [
    {
      bgimg: images.BgImg,
      icon: images.Ticon2,
      aName: 'ECC Artist',
      pName: 'ポートレート講座',
      date: '2002/06/24',
    },
  ]
  return (
    <div className="flex flex-col justify-start items-center w-[100vw] h-screen text-center pt-[100px]">
      <UniSidebar />
      <HeaderLogo />
      <p className="text-[50px]">受講履歴一覧</p>
      <div className="flex space-y-5 justify-center text-center">
        {data.map(({ bgimg, icon, aName, pName, date, index }) => (
          <ArticlePart
            key={index}
            BgImg={bgimg}
            Ticon={icon}
            groupname={aName}
            title={pName}
            date={date}
            link={'/editonelecture'}
          />
        ))}
      </div>
    </div>
  )
}

export default ArticleHistoryPage
