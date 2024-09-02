//インポート
import React, { useState } from 'react'
//assets
import '../../assets/styles/Dimensions.css'
import '../../assets/styles/bg-images.css'
//icon
import { TbPencilPlus } from 'react-icons/tb' // 追加
import { FaHandHoldingHeart } from 'react-icons/fa6' // 支援ボタンのマーク
//component
import { MainReturenBtn } from '../../components/LayoutComponent.js' // 戻るボタン
import ComentDialog from '../../components/materialComponent/ComentDialog.js'

//テスト用
import uni_img from '../../assets/images/ECC_build.jpg' // 大学画像

// 大学ごとのページ
const UnivercityPage = () => {
  // テストデータ
  const uni_name = 'ECCコンピュータ専門学校' // 大学名
  const tags = ['IT', 'CG', '経営'] // タグ
  const place = '〒530-0015 大阪府大阪市北区中崎西2丁目3番35号' // 住所
  const hp = 'https://comp.ecc.ac.jp/' // 大学リンク
  const connectLink = [
    '@university_name　HTML,CSS講座',
    '@university_name　React講座',
  ] // 関連記事リンク
  const coment = ['校舎がきれいだった！', '階段が狭杉！'] // 掲示板コメント

  const [isDialog, setIsDialog] = useState(false) // ダイアログ開閉の変数

  return (
    <>
      <div className="h-screen font-bold bg-main-bg">
        <ComentDialog open={isDialog} />
        <div name="header" className="flex">
          <MainReturenBtn link="/onelecturepage" returnCol={0} />
          <div className="bg-main font-bold h-96 w-5/6 rounded-[50%] mx-auto -mt-72 text-white text-4xl text-center pt-[315px]">
            {uni_name}
          </div>
        </div>
        <div name="screen_1" className="flex h-[35%] w-5/6 mt-8 mx-auto">
          <img src={uni_img} alt="uni_img" className=" w-1/3" />
          <div className=" ml-[20%]">
            <p className=" text-main">分野:</p>
            <div className="flex">
              {tags.map((element) => (
                <p key={element} className="mr-4 text-[#4C4C4C]">
                  #{element}
                </p>
              ))}
            </div>
            <p className="text-main mt-2">住所:</p>
            <p className="text-[#4C4C4C]">{place}</p>
            <p className="text-main mt-2">HP:</p>
            <p>
              <a href={hp} className="text-[#4C4C4C]">
                {hp}
              </a>
            </p>

            <button
              type="submit"
              className="flex mt-6 bg-[#3AE110] bg-gradient-to-t from-[#358D1F] text-white py-3 px-20 text-xl rounded-md"
            >
              この学校を支援する
              <FaHandHoldingHeart className="size-6 ml-2" />
            </button>
          </div>
        </div>

        <div
          name="screen_2"
          className="flex w-5/6 mx-auto h-[30%] mt-14 bolder-[#D9D9D9]"
        >
          <div className="w-5/12 h-full border-2 bg-white">
            <p className=" text-main text-center mb-3">～ 掲示板 ～</p>
            {coment.map((element, index) => (
              <p key={index} className=" font-normal border-b-2 w-5/6 mx-auto">
                {element}
              </p>
            ))}
          </div>
          <button
            className="size-14 rounded-full bg-main -ml-16 mt-auto mb-3"
            onClick={() => {
              setIsDialog(!isDialog)
            }}
          >
            <TbPencilPlus className="size-11 ml-1 -mt-1 text-white" />
          </button>
          <div className="w-5/12 h-full border-2 ml-[12%]">
            <p className="bg-white text-main text-center mb-3">
              ～ 講義一覧 ～
            </p>
            {connectLink.map((element, index) => (
              <p key={index} className=" underline mb-2 w-5/6 mx-auto">
                {element}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default UnivercityPage