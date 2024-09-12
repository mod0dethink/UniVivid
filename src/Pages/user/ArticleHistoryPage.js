//インポート
import React, { useState, useEffect } from 'react'
//component
import { UnivividHeader } from '../../components/LayoutComponent.js'
import ArticlePart from '../../components/materialComponent/ArticlePart.js'

//　テスト用

import images from '../../assets/images.js'
import UniSidebar from '../../components/common/UniSidebar.js'
import HeaderLogo from '../../components/layout/layouts.js'

// 受講履歴一覧
function ArticleHistoryPage() {
  // ！テストデータ！
  const [seminars, setSeminars] = useState([])
  const [history, setHistory] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [filteredSeminars, setFilteredSeminars] = useState([])

  const data = [
    {
      bgimg: images.BgImg,
      icon: images.Ticon2,
      aName: 'ECC Artist',
      pName: 'ポートレート講座',
      date: '2002/06/24',
    },
  ]

  useEffect(() => {
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
        setSeminars(data.seminars || data)
        setFilteredSeminars(data.seminars || data) // 初期表示はすべてのセミナー
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:8080/api/add-history', {
      method: 'GET',
      credentials: 'include', // クッキーを含める設定
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((history) => {
        setHistory(history)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

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
            link={`/onelecturepage/${seminars.seminar_id}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ArticleHistoryPage
