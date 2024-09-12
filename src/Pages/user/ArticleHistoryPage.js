import React, { useState, useEffect } from 'react'
// component
import ArticlePart from '../../components/materialComponent/ArticlePart.js'

// テスト用
import images from '../../assets/images.js'
import UniSidebar from '../../components/common/UniSidebar.js'
import HeaderLogo from '../../components/layout/layouts.js'

// 受講履歴一覧
function ArticleHistoryPage() {
  const [seminars, setSeminars] = useState([])
  const [history, setHistory] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/get-history', {
          method: 'GET',
          credentials: 'include', // クッキーを含める設定
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        setHistory(data.history) // 受講履歴を保存
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchHistory()
  }, [])

  return (
    <div className="flex flex-col justify-start items-center w-[100vw] h-screen text-center pt-[100px]">
      <UniSidebar />
      <HeaderLogo />
      <p className="text-[50px]">受講履歴一覧</p>
      <div className="flex flex-col space-y-5 justify-center text-center">
        {history.map((item) => {
          console.log(item) // デバッグ用
          return (
            <ArticlePart
              key={item.seminar_id}
              BgImg={item.thumbnail || images.BgImg} // セミナー画像
              Ticon={images.Ticon2} // アイコン
              groupname={item.prof_name} // 講師名
              title={item.seminar_name} // 講義名
              date={item.start_date} // 開始日
              link={`/onelecturepage/${item.seminar_id}`} // リンク
            />
          )
        })}
      </div>
    </div>
  )
}

export default ArticleHistoryPage
