import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import UniSidebar from '../../components/common/UniSidebar.js'
import HeaderLogo from '../../components/layout/layouts'

const UniPostedMovieList = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [movieList, setMovieList] = useState([])
  const [uniid, setUniid] = useState(null)

  useEffect(() => {
    // Fetch university ID
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
      .then((id) => {
        setUniid(id.univid) // フェッチしたデータを状態にセット

        setLoading(false) // ローディング完了
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })

    // Fetch seminar videos
    fetch('http://localhost:8080/api/get-all-seminar-videos', {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setMovieList(data.videos) // Store the fetched videos in state

        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  // Filter the movieList by comparing movie.univid with the uniid
  const filteredMovies = movieList.filter((movie) => movie.univ_id === uniid)
  console.log(movieList) // ここで全データを確認
  console.log(uniid) // uniid が正しく設定されているか確認
  console.log(filteredMovies) // フィルタされたデータを確認

  return (
    <div className="flex flex-col justify-start items-center">
      <UniSidebar />
      <HeaderLogo />
      <p className="text-[50px] pt-[100px]">投稿した動画一覧</p>

      <div className="grid grid-cols-4 gap-4 ">
        {filteredMovies.map((movie) => (
          <Link
            to="/umoviedetail"
            key={movie.seminar_id} // Use seminar_id as the key
            className="flex flex-col justify-center items-center"
          >
            <img
              src={`data:image/jpeg;base64,${movie.thumbnail}`} // Add the correct MIME type and base64 prefix
              alt="サムネイル"
              className="object-cover w-[355px] h-[200px] rounded-[10px]"
            />
            <p>{movie.seminar_id}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default UniPostedMovieList
