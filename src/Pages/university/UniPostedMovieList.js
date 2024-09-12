import React from 'react'
import { Link } from 'react-router-dom'

import images from '../../assets/images.js'

import UniSidebar from '../../components/common/UniSidebar.js'
import HeaderLogo from '../../components/layout/layouts'

const UniPostedMovieList = () => {
  const searchedValue = [
    { img: images.WebImage4, title: 'test' },
    { img: images.WebImage4, title: 'test' },
    { img: images.WebImage4, title: 'test' },
    { img: images.WebImage4, title: 'test' },
    { img: images.WebImage4, title: 'test' },
    { img: images.WebImage4, title: 'test' },
    { img: images.WebImage4, title: 'test' },
  ]
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="flex flex-col justify-start items-center">
      <UniSidebar />
      <HeaderLogo />
      <p className="text-[50px] pt-[100px]">投稿した動画一覧</p>

      <div className="grid grid-cols-4 gap-4 ">
        {searchedValue.map(({ img, title, index }) => (
          <Link
            to="/umoviedetail"
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <img
              src={img}
              alt=""
              className="object-cover w-[355px] h-[200px] rounded-[10px]"
            />
            <p>{title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default UniPostedMovieList
