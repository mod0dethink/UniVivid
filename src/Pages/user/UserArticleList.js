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
  const [loading, setLoading] = useState(true)
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
    // ポート5000のエンドポイントからデータをフェッチ
    fetch('http://localhost:8080/api/get-seminars', {
      method: 'GET',
      credentials: 'include', // クッキーを含める設定
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setData(data) // フェッチしたデータを状態にセット
        console.log(data)
        setLoading(false) // ローディング完了
      })
      .catch((error) => {
        setError(error) // エラーをキャッチ
        setLoading(false)
      })
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
