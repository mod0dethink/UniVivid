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
  const [seminars, setSeminars] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

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
        // データの形式に応じて修正が必要
        setSeminars(data.seminars || data) // JSONデータの形式を確認
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
      <div className="flex space-y-5 justify-center text-center">
        {seminars.map((seminar) => (
          <ArticlePart
            key={seminar.seminar_id}
            BgImg={seminar.thumbnail || images.DefaultThumbnail} // サムネイルがない場合のデフォルト画像
            groupname={seminar.university_name}
            //icon = {}
            title={seminar.seminar_name}
            date={new Date(seminar.start_date).toLocaleString()}
            link={`/editonelecture/${seminar.seminar_id}`} // 編集ページへのリンクにセミナーIDを追加
          />
        ))}
      </div>
    </div>
  )
}

export default UserArticleList
