//インポート
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MainReturenBtn } from '../../components/LayoutComponent'
import Note from '../../components/materialComponent/Note.js'
import LectureDetails from '../../components/materialComponent/LectureDetails.js'
import ConnectLink from '../../components/materialComponent/ConnectLink.js'

// 講義記事ごとのページ
const EditOneLecture = () => {
  // 講義関連(！テストデータ！)
  const lectureName = "IoT講座";              // 講義名
  const time = "2024/oo/xx　11:00 - 12:30";   // 講義日時
  const goodCount = 20;                       // いいね数
  const [isPageCount, setIsPageCount] = useState(0);      // ページ枚数管理の変数

  return (
    <section>
    <div className='h-screen bg-main-bg font-bold'>
      <Link to='/editdetailes'>
      <button className='absolute right-10 bg-gray-700 rounded-md bottom-5 text-white py-2 px-10'>
        記事を編集する
      </button>
      </Link>
      <div className='flex'>
        <MainReturenBtn link='/openarticles' returnCol={0}/>
        <div className='bg-main text-white text-4xl py-2 px-28 rounded-xl mx-7 mt-5'>{lectureName}</div>
        <p className='text-main mt-auto mb-0'>{time}</p>
        <button id='favorite'></button>
      </div>
      <Note />
      <div className='flex justify-around'>
        <div className='w-1/2 ml-[10%]'>
          <LectureDetails />
          <button type='submit' className='bg-[#3BBC30] text-white text-xl px-10 py-1 rounded-md mt-8'>この講義に申し込む</button>
        </div>
        <div className='mt-5 w-1/2'>
          <ConnectLink />
        </div>
      </div>
    </div>
    </section>
  )
}

export default EditOneLecture