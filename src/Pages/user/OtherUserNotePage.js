//インポート
import React from 'react'
//assets
import '../../assets/styles/Dimensions.css'
import '../../assets/styles/bg-images.css'
//icon
import { BsPaperclip } from 'react-icons/bs' // クリップ
import { AiFillLike } from 'react-icons/ai' //　支援ボタンのアイコン
//component
import { LectureDetails } from '../../components/MaterialComponent.js'
import { MainReturenBtn } from '../../components/LayoutComponent.js' // 戻るボタン


//テスト用
import NoteImg from '../../assets/images/note2.png'

// 他ユーザーの各ノート
function OtherUserNotePage(itemData) {
  const lectureName = 'IoT講座'
  const date = '2024/oo/xx'
  const time = '16:00'
  const goodCount = 20
  return (
    <section>
    <div className="absolute">
      <MainReturenBtn returnCol={0} link={'/otheruser'} />
    </div>
    <div className="flex h-dvh bg-main-bg justify-center">
      <BsPaperclip className="absolute size-16 mt-20 left-[12%] text-main-middle" />
      <div className="h-96 w-1/3 bg-gray-200 content-center mt-24">
        <img src={NoteImg} alt="userNoteImg" />
      </div>
      <div className="mt-20 ml-10 w-5/12 font-bold">
        <div className="text-2xl rounded-lg py-2 text-center text-white bg-main">
          {lectureName}
        </div>
        <p className="my-5">
          {date}　{time} に更新{' '}
        </p>
        {/* ToDo:値の受渡 */}
        <LectureDetails />
        <div className="flex items-center text-main-middle float-right">
          <AiFillLike className="size-8" />
          <p>{goodCount}</p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default OtherUserNotePage