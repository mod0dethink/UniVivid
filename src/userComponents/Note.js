// ユーザーが投稿したノート
import React from 'react'
import img1 from '../assets/images/note2.png';
import { BsPaperclip } from "react-icons/bs";                 // クリップ
import { MdOutlineFileUpload } from "react-icons/md";         // アップロードボタン
import { FaChevronRight } from "react-icons/fa";              // >
import { FaChevronLeft } from "react-icons/fa";               // <

import user_icon from "../assets/images/user_icon.png";       // アップしたユーザーのアイコン
import { AiFillLike } from "react-icons/ai";                  //

const Note = () => {
  const noteImg = img1; // サムネ
  const upuser_img = user_icon; // アップしたユーザー画像
  const user_name = "kata__sk"; // アップしたユーザー名
  let good_count = 20;          // いいね数

  return (
    <>
    <div className='flex h-2/5 mt-5 justify-center '>
      <div className=' bg-gray-200 h-full w-4/5'>
        <BsPaperclip className='absolute flex end-[10%] size-16 -mt-7 text-main-middle'/>
        <img src={noteImg} alt="back" className='h-full w-5/6 m-auto'/>
        {/* 画像にかぶせるグラデーション */}
        {/* <div className='h-full w-auto bg-gradient-to-t from-blue-500'> </div> */}
        <div className='flex -mt-16 ml-28'>
          <div className='flex size-14 bg-gray-500 rounded-full'>
            <img src={upuser_img} alt="back" className='h-full w-auto rounded-full'/>
            <p className='my-auto ml-3 bg-white'>{user_name}</p>
          </div>
          <div className='flex my-auto ml-auto mr-28 '>
            <button type='button'><AiFillLike className='text-black size-8'/></button>
            <p className='my-auto ml-1'>{good_count}</p>
          </div>
        </div>
      </div>
      <button className='absolute right-[8%] end-28 top-[50%] size-20 bg-gray-300 rounded-full shadow-lg' type="submit">
        <MdOutlineFileUpload className='size-16 m-auto text-main-dark'/>
      </button>
    </div>
    <div className='flex font-bold justify-center text-main-dark text-2xl'>
        <button className='mx-2' type='button'><FaChevronLeft/></button>
        <p className='mx-2 '>1</p>
        <button className='mx-2' type='button'><FaChevronRight/></button>
      </div>
    </>
  )
}

export default Note
