//インポート
import React from 'react'
import '../../assets/styles/Dimensions.css'
import { MainReturenBtn } from '../LayoutComponent'

// 他ユーザーの表示
function OtherMenu(itemData) {
  return (
    <>
      <div className="h-screen w-1/4 bg-main">
        <MainReturenBtn returnCol={0} link={itemData.link} />
        <div className="pt-10 w-full text-center">
          <div
            className="rounded-full mx-auto bg-[#D9D9D9] size-28"
            style={{
              backgroundImage: `url(${itemData.img})`,
              backgroundSize: `cover`,
              backgroundPosition: `center center`,
            }}
          ></div>
          <p className="mt-2 font-bold text-white">{itemData.name}</p>
        </div>
      </div>
    </>
  )
}

export default OtherMenu