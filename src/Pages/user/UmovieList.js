import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/images.js'

import UniSidebar from '../../components/common/UniSidebar.js'
import HeaderLogo from '../../components/layout/layouts'

const UMovieList = () => {
  const [searched, setSearched] = useState(false)

  const faMovieValue = [
    { img: images.English, title: 'movie' },
    { img: images.ECC_build, title: 'ecc' },
  ]
  const newMovieValue = [
    { img: images.IT, title: 'IT' },
    { img: images.U4, title: 'U4' },
  ]

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
    setSearched(true)
  }

  return (
    <div className="flex items-center justify-evenly w-[100vw] h-screen">
      <UniSidebar />
      <HeaderLogo />
      <form
        onSubmit={handleSubmit}
        className="absolute top-[100px] left-[210px]  w-[1500px] h-[100px] flex items-center justify-evenly px-[20px] border-2 border-[#427d9d] rounded-[20px]"
      >
        <div className="flex items-center">
          <p>検索ワード:</p>
          <input
            type="text"
            name="searchText"
            className="text-[30px] border-b-2 border-b-[#427d9d] w-[500px]"
          />
        </div>
        <button
          className="text-[30px] bg-[#427D9D] rounded-[20px] h-[70px] min-w-[200px] flex items-center justify-center text-white font-bold px-[20px]"
          type="submit"
        >
          <img src={images.Icon2} alt="Icon2" width="50px" />
          <p className="text-white font-bold">検索</p>
        </button>
      </form>
      <div className="flex flex-col items-start w-[1600px] space-y-[20px] pl-[100px] pt-[100px]">
        {searched === false ? (
          <>
            <p className="text-[#427d9d] text-[36px] font-bold">人気の動画</p>
            <div className="flex space-x-[20px] overflow-x-auto">
              {faMovieValue.map(({ img, title, index }) => (
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
            <p className="text-[#427d9d] text-[36px] font-bold">最新の動画</p>
            <div className="flex space-x-[20px] overflow-x-auto">
              {newMovieValue.map(({ img, title, index }) => (
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
          </>
        ) : (
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
        )}
      </div>
    </div>
  )
}

export default UMovieList
