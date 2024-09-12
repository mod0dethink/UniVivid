import React, { useEffect, useState } from 'react'
import ArticlePart from '../../components/materialComponent/ArticlePart'
import UniSidebar from '../../components/common/UniSidebar'
import HeaderLogo from '../../components/layout/layouts'
import images from '../../assets/images'

// 公開記事一覧
function OpenArtucles() {
  const [seminars, setSeminars] = useState([])
  const [filteredSeminars, setFilteredSeminars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [univid, setUnivid] = useState(null)

  useEffect(() => {
    // ユーザーのunividを取得
    fetch('http://localhost:8080/auth/univid', {
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
        // `univid`の形式が数値であれば、`data.univid`を数値に変換する
        setUnivid(Number(data.univid))
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    // セミナーのデータを取得
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
        // セミナーのデータを状態にセット
        setSeminars(data.seminars || data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  console.log(univid)
  console.log(seminars)

  // `univid`と`seminars`の状態が変わったときにセミナーをフィルタリング
  useEffect(() => {
    if (univid !== null && seminars.length > 0) {
      setFilteredSeminars(
        seminars.filter((seminar) => seminar.univ_id === univid),
      )
    }
  }, [univid, seminars])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="flex flex-col justify-start items-center w-[100vw] h-screen text-center pt-[100px]">
      <UniSidebar />
      <HeaderLogo />
      <p className="text-[50px]">公開記事一覧</p>
      <p className="text-[20px]">公開した記事の一覧が表示されます</p>
      <div className="flex flex-col space-y-5 justify-center text-center">
        {filteredSeminars.length > 0 ? (
          filteredSeminars.map((seminar) => (
            <ArticlePart
              key={seminar.seminar_id}
              BgImg={seminar.thumbnail || images.DefaultThumbnail}
              groupname={seminar.university_name}
              title={seminar.seminar_name}
              date={new Date(seminar.start_date).toLocaleString()}
              link={`/onelecturepage/${seminar.seminar_id}`}
            />
          ))
        ) : (
          <p>表示するセミナーがありません</p>
        )}
      </div>
    </div>
  )
}

export default OpenArtucles
