//インポート
import React, { useState } from 'react'
//assets
import '../../assets/styles/Dimensions.css'
import '../../assets/styles/bg-images.css'
import { MainReturenBtn } from '../../components/LayoutComponent.js' // 戻るボタン
//component
import { Note, LectureDetails, ConnectLink } from '../../components/MaterialComponent.js'

// 講義記事ごとのページ
const OneLecturePage = () => {
  // 講義関連
  const lectureName = 'IoT講座' // 講義名
  const time = '2024/oo/xx　11:00 - 12:30' // 講義日時
  const [isFavorite, setIsFavorite] = useState(false) // お気に入りボタンの状態
  const [isGoodCount, setIsGoodCount] = useState(0) // いいね数管理の変数
  const [isPageCount, setIsPageCount] = useState(0) // ページ枚数管理の変数
  const [Is_Init, setInit] = useState(true)

  return (
    <section>
    {/* Todo:ダイアログ */}
    <dialog className="bg-black "></dialog>
    <div className="h-screen bg-main-bg font-bold">
      <div id="test_div"></div>
      <div className="flex">
        <MainReturenBtn link="/userarticlelist" returnCol={0} />
        <div className="bg-main text-white text-4xl py-2 px-28 rounded-xl mx-7 mt-5">
          {lectureName}
        </div>
        <p className="text-main mt-auto mb-0">{time}</p>
        <button
          id={isFavorite ? 'favorite_star_on' : 'favorite'}
          onClick={() => {
            setIsFavorite(!isFavorite)
          }}
        ></button>
      </div>
      <Note />
      <div className="flex justify-around">
        <div className="w-1/2 ml-[10%]">
          <LectureDetails />
          <button
            type="submit"
            className="bg-[#3BBC30] text-white text-xl px-10 py-1 rounded-md mt-8"
          >
            この講義に申し込む
          </button>
        </div>
        <div className="mt-5 w-1/2">
          <ConnectLink />
        </div>
      </div>
    </div>
    <script src="../assets/scripts/animation.js"></script>
    </section>
  )
}

export default OneLecturePage