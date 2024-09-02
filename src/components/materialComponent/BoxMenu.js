//インポート
import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/Dimensions.css'

//Boxメニュー
function BoxMenu(itemData) {
  return (
    <Link
      to={itemData.linkpath}
      className="MenuBoxShadow max-w-[350px] max-h-[350px] w-[25vw] h-[25vw] bg-main-middle text-white flex items-center justify-center rounded-md font-bold text-3xl"
    >
      <p>{itemData.text}</p>
    </Link>
  )
}

export default BoxMenu