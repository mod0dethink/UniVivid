//インポート
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//icon
import { BsPaperclip } from 'react-icons/bs' // クリップ
import { MdOutlineFileUpload } from 'react-icons/md' // アップロードボタン
import { FaChevronRight } from 'react-icons/fa' // >
import { FaChevronLeft } from 'react-icons/fa' // <
import { AiFillLike } from 'react-icons/ai' //　支援ボタンのアイコン
//assets
import '../../assets/styles/Dimensions.css'
import uimg from '../../assets/images/ecc_logo.jpg' // 講義詳細で使用する例の画像
import img1 from '../../assets/images/note2.png' // 例の画像
import img2 from '../../assets/images/note1.jpg'
import { OpenNote } from '../../assets/scripts/animation.js'

//講義ごとのページ
const Note = () => {
  const noteImg = img1 // サムネ
  const noteImg2 = img2
  const notePages = [noteImg, noteImg2]
  const upuser_img = uimg // アップしたユーザー画像
  const user_name = 'ecc comp' // アップしたユーザー名
  const [isGoodState, setIsGoodState] = useState(false)
  const [isGoodCount, setIsGoodCount] = useState(20) // いいね数管理の変数
  const [isPageCount, setIsPageCount] = useState(1) // ページ枚数管理の変数

  React.useEffect(() => {
    OpenNote(notePages[isPageCount - 1])
    console.log(document.readyState)
  })

  return (
    <>
      <div className="flex h-2/5 mt-5 justify-center">
        <div id="noteImg" className="relative bg-gray-200 h-full w-4/5">
          <BsPaperclip className="absolute size-16 right-0 -top-5 text-main" />
          <img
            src={notePages[isPageCount - 1]}
            alt="back"
            className="h-full w-5/6 m-auto object-cover"
          />
          <div className=" bg-gradient-to-t from-slate-900 absolute h-1/2 w-full bottom-0"></div>
          <div className="flex -mt-16 ml-28">
            <Link to="/otheruser">
              <div className="flex size-14 bg-gray-500 rounded-full text-white">
                <img
                  src={upuser_img}
                  alt="back"
                  className="h-full w-auto rounded-full z-10"
                />
                <p className="my-auto ml-3 z-10">{user_name}</p>
              </div>
            </Link>
            <div className="flex my-auto ml-auto mr-28 z-10 text-white">
              <button
                type="button"
                id="goodBtn"
                onClick={() => {
                  setIsGoodState(!isGoodState)
                }}
              >
                <AiFillLike
                  className={
                    isGoodState ? 'size-8 text-main' : 'size-8 text-white'
                  }
                  onClick={() => {
                    isGoodState
                      ? setIsGoodCount(isGoodCount - 1)
                      : setIsGoodCount(isGoodCount + 1)
                  }}
                />
              </button>
              <p className="my-auto ml-1">{isGoodCount}</p>
            </div>
          </div>
        </div>
        <button
          id="testBtn"
          onClick={() => {
            console.log(document.getElementById('test_div'))
          }}
          className="absolute right-[8%] end-28 top-[50%] size-16 bg-gray-300 rounded-full shadow-lg"
          type="submit"
        >
          <MdOutlineFileUpload className="size-14 m-auto text-main-dark" />
        </button>
      </div>
      <div className="flex font-bold justify-center text-main-dark text-2xl">
        <button
          className="mx-2"
          type="button"
          onClick={() => {
            if (isPageCount > 1) setIsPageCount(isPageCount - 1)
          }}
        >
          <FaChevronLeft />
        </button>
        <p className="mx-2">{isPageCount}</p>
        <button
          className="mx-2"
          type="button"
          onClick={() => {
            if (isPageCount < notePages.length) setIsPageCount(isPageCount + 1)
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </>
  )
}

export default Note