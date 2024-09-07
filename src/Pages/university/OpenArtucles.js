//インポート
import React from 'react'
import ArticlePart from '../../components/materialComponent/ArticlePart.js'

import UniSidebar from '../../components/common/UniSidebar.js'
import HeaderLogo from '../../components/layout/layouts.js'
import images from '../../assets/images.js'
// 公開記事一覧
function OpenArtucles() {
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
      <p className="text-[50px]">公開記事一覧</p>
      <p className="text-[20px]">公開した記事の一覧が表示されます</p>
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

export default OpenArtucles
