//インポート
import React, { useState, useEffect } from 'react'
import axios from 'axios'
//assets
import Imagepng from '../../assets/images/IMG_4007.jpg'
import '../../assets/styles/Dimensions.css'
import '../../assets/styles/bg-images.css'

import SearchBar from '../../components/common/SearchBar.js'

//　テスト用
/*------ユーザーのデータ変数------*/
let ProImg = Imagepng //プロフィール画像

// 記事一覧
function UserArticleList() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

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
    <div>
      <SearchBar />
    </div>
  )
}

export default UserArticleList
