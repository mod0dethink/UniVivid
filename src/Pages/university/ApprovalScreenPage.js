//インポート
import React from 'react'
//assets
import Door from '../../assets/images/door.png'
import Imagepng from '../../assets/images/IMG_4007.jpg'
//component
import { UnivividHeader } from '../../components/LayoutComponent'

/*------ユーザーのデータ変数------*/
let ProImg = Imagepng //プロフィール画像

// 承認画面
function ApprovalScreenPage(){
  const Door1 = Door
  //ToDo:引数で名前渡す処理
  // const isUserName = userName;
  const isUserName = 'あああ';

  return(
    <section>
    <UnivividHeader title="承認画面" returnCol={1} link='/applicationlist' bgCol={true}/>
    <div className='pt-16'>
      <div className='flex items-center space-x-4'>
        <img src={ProImg} className=' size-20 rounded-full ml-[5vw]' alt='Profile'/>
        <p className='text-lg font-semibold'>{isUserName}</p>
      </div>
      <div>
        <div className='mt-5 '>
          {/* 枠線 */}
          <div className=' border-main-middle border-2 border-dashed h-[30vw] w-[90vw] ml-[4vw]'>
            {/* 画像 */}
            <img src="/static/media/note2.c64b1c5a9cc38667d261.png" className='w-[40vw] h-[20vw] ml-[25vw] mt-[5vw]'  alt='ノートの画像'/>
          </div>
        </div>
      </div>
      <div className='pt-[30px]'>
        <div className=' w-[90vw] ml-[10%] font-bold ml-[5vw]'>
          {/* 詳細 */}
          <div className='flex my-2' name="lname">
            <div className=' bg-main text-white text-center px-3'> 講義 </div>
            <p className='my-auto ml-3'>Iot講座</p>
          </div>
          <div className='flex my-2' name="lname">
            <div className=' bg-main text-white text-center px-3'> 講師 </div>
            <p className='my-auto ml-3'>村上 慧</p>
          </div>
          <div className='flex my-2' name="lname">
            <div className=' bg-main text-white text-center px-3'> 内容 </div>
            <p className='my-auto ml-3'>ArduinoでRaspberry Piを用い、IoTに触れる。</p>
          </div>
          <div className='flex my-2' name="lname">
            <div className=' bg-main text-white text-center px-3'> 日時 </div>
            <p className='my-auto ml-3'>2024/〇〇/✕✕  11:00-12:30</p>
          </div>            
        </div>
      </div>
      <div className='flex space-x-4 text-[17px] justify-end mb-[50px] mr-[1.5vw]'>
        <button className='font-bold bg-[#D9D9D9] px-4 py-1 '>承認</button>
        <button className='font-bold bg-[#E74646] px-4 py-1'>削除</button>
      </div>
    </div>
    </section>
  )
}

export default ApprovalScreenPage