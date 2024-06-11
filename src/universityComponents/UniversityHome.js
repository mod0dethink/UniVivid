import React from 'react'
import Door from '../assets/images/door.png'

import '../assets/styles/Dimensions.css'

function UniversityHome() {
  return (
    <div className="flex w-[100vw] h-screen">
      <aside className="aside flex-grow-[1] min-w-[300px] bg-[#427D9D] content-center flex flex-col items-center justify-between text-[#ffffff] text-2xl">
        <div className="text-center pt-[50px]">
          <div className="rounded-full bg-[#D9D9D9] w-[160px] h-[160px] flex flex-col items-center justify-center">
            <div className="login-face"></div>
            <div className="py-1.5"></div>
            <div className="login-body "></div>
          </div>
          <div>University_name</div>
        </div>
        <div>
          <p>マイページ</p>
          <div className="py-3"></div>
          <p>ユーザー設定</p>
        </div>
        <div></div>
        <div className="py-[50px]">
          <p>ログアウト</p>
        </div>
      </aside>
      <section className="main flex-grow-[7] flex content-center  h-screen ">
        <div className="flex flex-col justify-center space-y-20 w-[100%] text-center items-center ">
          <div className="flex justify-around items-center bg-[#D9D9D9] w-[80%] h-[196px] max-w-[700px] rounded-[20px] border border-solid border-[#9BBEC8] border-[5px]">
            <p className="text-[#164863] text-[36px] font-bold">記事作成</p>
            <img className="w-[150px] -z-[-1]" src={Door} alt="door" />
            <div className="absolute border-t border-dotted border-[#9BBEC8] border-[10px] w-[55vw] max-w-[700px] top-[40%]"></div>
          </div>
          <div className="flex justify-around items-center bg-[#D9D9D9] w-[80%] h-[196px] max-w-[700px] rounded-[20px] border border-solid border-[#9BBEC8] border-[5px]">
            <p className="text-[#164863] text-[36px] font-bold">公開記事一覧</p>
            <img className="w-[150px] -z-[-1]" src={Door} alt="door" />
            <div className="absolute border-t border-dotted border-[#9BBEC8] border-[10px] w-[55vw] max-w-[700px] top-[70%]"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UniversityHome
