//インポート
import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/Dimensions.css'
//icon
import { FaChevronLeft } from 'react-icons/fa' // <

//前のページに戻るボタン
function HomeReturnBtn(pathData) {
  return (
    <Link to={pathData.linkpath} className="flex items-center mb-8">
      <div className="text-white bg-main-dark rounded-full size-10 p-3">
        <FaChevronLeft />
      </div>
      <p className="ml-5 font-bold text-main-dark text-3xl">ホームへ</p>
    </Link>
  )
}

export default HomeReturnBtn