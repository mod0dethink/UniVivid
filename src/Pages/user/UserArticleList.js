//インポート
import React, { useState, useEffect } from 'react'
import axios from 'axios'
//assets
import Imagepng from '../../assets/images/IMG_4007.jpg'
import '../../assets/styles/Dimensions.css'
import '../../assets/styles/bg-images.css'

import SearchBar from '../../components/specific/SearchBar.js'
import UniSidebar from '../../components/common/UniSidebar.js'
import HeaderLogo from '../../components/layout/layouts.js'
import images from '../../assets/images.js'

import ArticlePart from '../../components/materialComponent/ArticlePart.js'

//　テスト用
/*------ユーザーのデータ変数------*/
let ProImg = Imagepng //プロフィール画像

// 記事一覧
function UserArticleList() {
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const articleData = [
    {
      bgimg: images.BgImg,
      icon: images.Ticon2,
      aName: 'ECC Artist',
      pName: 'ポートレート講座',
      date: '2002/06/24',
    },
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/get-seminars',
          { withCredentials: true },
        )
        setData(response.data.seminars)
      } catch (error) {
        console.error('セミナー情報の取得に失敗しました:', error)
        setError('セミナー情報の取得に失敗しました.')
      }
    }

    fetchData()
  }, [])

  return (
    <div className="flex flex-col justify-center items-center w-[100vw] h-screen">
      <SearchBar />
      <UniSidebar />
      <HeaderLogo />
      <div>
        {articleData.map(({ bgimg, icon, aName, pName, date, index }) => (
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

export default UserArticleList
