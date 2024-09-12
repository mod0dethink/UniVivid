//インポート
import React, { useState } from 'react'

import HeaderLogo from '../../components/layout/layouts.js'
import UniSidebar from '../../components/common/UniSidebar.js'
import MovieDetail from '../../components/common/MovieDetail.js'
import images from '../../assets/images.js'

// 講義記事ごとのページ
const UMovieDetail = () => {
  const MovieDetailValue = {
    title: 'IoT講座',
    imageUrl: images.U4,
    uicon: images.user_icon,
    username: 'ore',
    good: '20',
  }
  const comments = ['txet', 'comment']
  const movieImg = images.WebImage1
  const movieTitle = 'test'
  // 講義関連(！テストデータ！)
  const lectureName = 'IoT講座' // 講義名
  const time = '2024/oo/xx　11:00 - 12:30' // 講義日時
  const goodCount = 20 // いいね数
  const [isPageCount, setIsPageCount] = useState(0) // ページ枚数管理の変数

  return (
    <section>
      <UniSidebar />
      <HeaderLogo />

      <div>
        <MovieDetail
          title={MovieDetailValue.title}
          imageUrl={MovieDetailValue.imageUrl}
          uicon={MovieDetailValue.uicon}
          username={MovieDetailValue.username}
          good={MovieDetailValue.good}
        />
        <div className="flex justify-evenly mt-[600px]">
          <div>
            <img
              src={movieImg}
              alt=""
              className="object-cover w-[355px] h-[200px] rounded-[10px]"
            />
            <p>{movieTitle}</p>
          </div>
          <div className="border-2 border-[#427D9D] w-[500px] h-[300px] flex flex-col justify-start items-center">
            <p className="text-[30px] text-[#427d9d]">comment</p>
            {comments.map((comment, index) => (
              <p
                key={index}
                className="border-b-2 border-b-[#D9D9D9] w-[400px]"
              >
                {comment}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UMovieDetail
