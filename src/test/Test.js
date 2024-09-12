import React, { useEffect, useState } from 'react'

const Test = () => {
  const [data, setData] = useState(null)
  const [data2, setData2] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // ポート5000のエンドポイントからデータをフェッチ
    fetch('http://localhost:8080/auth/username', {
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
        setLoading(false) // ローディング完了
      })
      .catch((error) => {
        setError(error) // エラーをキャッチ
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    // ポート5000のエンドポイントからデータをフェッチ
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
      .then((data2) => {
        setData2(data2) // フェッチしたデータを状態にセット
        setLoading(false) // ローディング完了
      })
      .catch((error) => {
        setError(error) // エラーをキャッチ
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="text-black">Loading...</div>
  }

  if (error) {
    return <div className="text-black">Error: {error.message}</div>
  }

  return (
    <div className="text-black">
      <h1>Fetched Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>Fetched Data2:</h1>
      <pre>{JSON.stringify(data2, null, 2)}</pre>
    </div>
  )
}

export default Test

//localhost:8080/api/notes
