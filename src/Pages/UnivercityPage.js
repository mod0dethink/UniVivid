// 大学ごとのページ
import React from 'react'
import backBtnImg from "../assets/images/back.png";           // 戻るボタン
import uni_img from "../assets/images/ECC_build.jpg";         // 大学画像
import { FaHandHoldingHeart } from "react-icons/fa6";         // 支援ボタンのマーク

// コンポーネント
import Board from '../components/Board';
import ComentDialog from '../components/ComentDialog';

const UnivercityPage = () => {
  const uni_name = "ECCコンピュータ専門学校";   // 大学名
  const tags = ['IT','CG','経営'];             // タグ
  const place = '〒530-0015 大阪府大阪市北区中崎西2丁目3番35号';  // 住所
  const hp = 'https://comp.ecc.ac.jp/';
  const connectLink = ['@university_name　HTML,CSS講座','@university_name　React講座']; // 関連記事リンク

  return (
    <>
    <div className='h-screen font-bold'>
      <ComentDialog/>
      <div name='header' className='flex'>
        <button className='ml-10 mt-6 mb-auto '><img src={backBtnImg} alt="back" /></button>
        <div className='bg-main font-bold h-96 w-5/6 rounded-[50%] mx-auto -mt-64 text-white text-4xl text-center pt-72'>
          {uni_name}
        </div>
      </div>
      <div name='screen_1' className='flex h-[35%] w-5/6 mt-12 mx-auto'>
        <img src={uni_img} alt='uni_img' className=' w-1/3'/>
        <div className=' ml-[20%]'>

          <p className=' text-main'>分野:</p>
          <div className='flex'>
            {tags.map(element => <p key={element} className='mr-4 text-[#4C4C4C]'>#{element}</p>)}
          </div>
          <p className='text-main mt-5'>住所:</p>
          <p className='text-[#4C4C4C]'>{place}</p>
          <p className='text-main mt-5'>HP:</p>
          <p><a href={hp} className='text-[#4C4C4C]'>{hp}</a></p>

          <button type='submit' className='flex mt-6 bg-[#3AE110] bg-gradient-to-t from-[#358D1F] text-white py-3 px-20 text-xl rounded-md'>この学校を支援する<FaHandHoldingHeart className='size-6 ml-2'/>
          </button>
        </div>
      </div>
      <div name='screen_2' className='flex w-5/6 mx-auto h-[30%] mt-14 bolder-[#D9D9D9]'>
        <Board />
        <div className=' w-5/12 h-full border-2 ml-[12%]'>
          <p className=' text-main text-center mb-3'>～ 講義一覧 ～</p>
          {connectLink.map((element,index) => <p key={index} className=' underline mb-2 w-5/6 mx-auto'>{element}</p>)}
        </div>
      </div>
    </div>
    </>
  )
}

export default UnivercityPage
