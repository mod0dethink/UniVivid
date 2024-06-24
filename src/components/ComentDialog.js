//掲示板コメントのダイアログ
import React from 'react'

const ComentDialog = () => {
  return (
    <dialog className=' bg-black/50 h-screen w-screen content-center' open>
      <form method='dialog' className='bg-white h-3/5 w-96 m-auto rounded-md'>
        <div name='title' className='flex h-14 w-full bg-main-dark text-white text-2xl rounded-t-md'>
          <p className='m-auto'>コメント</p>
          <button className='absolute end-[38%] font-normal'>✕</button>
        </div>
        <div className='border-2 h-2/3 w-3/4 ml-12 mt-5'>
          <textarea className='h-full w-full resize-none' placeholder='コメントを入力してください。'></textarea>
        </div>
        <button className='bg-[#2D92C9] bg-gradient-to-t from-[#164863] text-white px-10 ml-[35%] mt-5 rounded-md py-1'>送信</button>
      </form>
    </dialog>
  )
}

export default ComentDialog
