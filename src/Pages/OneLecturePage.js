// 講義ごとのページ
import React from 'react'
import backBtnImg from "../assets/images/back.png";           // 戻るボタン
import starBefore from "../assets/images/star_before.png";    // お気に入りボタン追加前
import starAfter from "../assets/images/star_after.png";      // お気に入りボタン追加後

// コンポーネント
import { Note } from '../components/MaterialComponent';            // ノート
import { LectureDetails } from '../components/MaterialComponent';  // 講義情報
import ConnectLink from '../components/ConnectLink';               // 関連記事

const OneLecturePage = () => {
  // 講義関連
  const lectureName = "IoT講座";              // 講義名
  const time = "2024/oo/xx　11:00 - 12:30";   // 講義日時

  return (
    <div className='h-screen bg-main-bg font-bold'>
      <div className='flex'>
        <button className='ml-10 mt-6 mb-auto '><img src={backBtnImg} alt="back" /></button>
        <div className='bg-main text-white text-4xl py-3 px-28 rounded-xl mx-7 mt-10'>{lectureName}</div>
        <p className='text-main mt-auto mb-0'>{time}</p>
        <button className=' ml-auto mr-20'><img src={starBefore} alt="star" /></button>
      </div>
      <Note />
      <div className='flex justify-around'>
        <div className=' w-1/2 ml-[10%] mt-5'>
          <LectureDetails />
          <button type='submit' className='bg-[#3BBC30] text-white text-xl px-10 py-1 rounded-md mt-8'>この講義に申し込む</button>
        </div>
        <div className='mt-5 w-1/2'>
          <ConnectLink />
        </div>
      </div>
    </div>
  )
}

export default OneLecturePage
