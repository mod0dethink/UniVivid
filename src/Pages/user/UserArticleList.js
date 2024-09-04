//インポート
import React, { useState, useEffect } from 'react'
import axios from 'axios'
//component
import { UserHeader } from '../../components/LayoutComponent.js'
import ArticleSearch from '../../components/materialComponent/ArticleSearch.js'
import ArticlePart from '../../components/materialComponent/ArticlePart.js'
import HomeReturnBtn from '../../components/materialComponent/HomeReturnBtn.js'
//assets
import Imagepng from '../../assets/images/IMG_4007.jpg'
import '../../assets/styles/Dimensions.css'
import '../../assets/styles/bg-images.css'

//　テスト用
import uimg from '../../assets/images/ecc_logo.jpg' // 講義詳細で使用する例の画像
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
    <section>
    <UserHeader iconpath={ProImg} />
    <div className="fixed mt-32 ml-10 ">
      <HomeReturnBtn linkpath="/userhome" />
    </div>

    <div className="flex justify-between">
      <div className="mt-48 ml-10">
        <ArticleSearch />
      </div>
      <div className="mr-32 mt-20">
        {error && <p className="text-red-500">{error}</p>}
        {data.map((item, index) => (
          <ArticlePart
            key={index}
            BgImg={item.thumbnail}
            Ticon={uimg}
            groupname={item.university_name}
            title={item.seminar_name}
            date={item.start_date}
            link={'/onelecturepage'}
          />
        ))}
      </div>
    </div>
    </section>
  )
}

export default UserArticleList