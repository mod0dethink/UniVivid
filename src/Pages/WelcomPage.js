// 新規登録完了の画面
import React from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";

const WelcomPage = () => {
  const user_name = "ユーザー名";  // 引数として渡されたidから名前を取得し、変数に代入

  return (
    <div className='bg-main-bg font-bold h-screen font-mono'>
      <div className='h-full content-center text-center text-4xl '>
        <p>登録が完了しました。</p>
        <p>こんにちは、<font className='text-main-dark'>{user_name}</font>さん！</p>
      </div>
      <div className='flex justify-end -mt-14 mr-10 text-main-middle'>
        <button className='flex'>
          <p>next</p>
          <FaAngleDoubleRight className='ml-1 mt-1'/>
        </button>
      </div>
    </div>

  )
}

export default WelcomPage
