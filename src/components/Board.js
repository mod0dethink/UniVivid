// 掲示板
import { element } from 'prop-types';
import React from 'react'
import { TbPencilPlus } from "react-icons/tb";  // 追加

const coment = ['校舎がきれいだった！','階段が狭杉！']

const Board = () => {
  return (
    <>
      <div className='w-5/12 h-full border-2'>
        <p className=' text-main text-center mb-3'>～ 掲示板 ～</p>
        {coment.map((element,index) => <p key={index} className=' font-normal border-b-2 w-5/6 mx-auto'>{element}</p>)}
      </div>
      <button className='size-14 rounded-full bg-main -ml-16 mt-auto mb-3'>
        <TbPencilPlus className='size-11 ml-1 -mt-1 text-white'/>
      </button>
    </>
  )
}

export default Board