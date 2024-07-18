import React from 'react'
import { Link } from 'react-router-dom'

import ImageMed from '../assets/images/iryou.jpg'    //医療
import ImageEng from '../assets/images/English.jpg'  //英語
import ImageIt from '../assets/images/IT.jpg'        //IT
import ImageEar from '../assets/images/earth.jpg'    //物理学
import ImageSya from '../assets/images/syachi.jpg'   //しゃち
import ImageKou from '../assets/images/kougaku.jpg'  //機械
import ImageKan from '../assets/images/kankyou.jpg'  //環境
import ImageTet from '../assets/images/tetugaku.jpg' //哲学
import ImageHou from '../assets/images/hougaku.jpg'  //法学
import ReturnImg from '../assets/images/return.png'  // 戻るボタン紺


function CategoryComponent() {
  return (
    
    <div className=" m-32 mt-16">
      <button className="absolute top-0 left-0 size-12 ml-5 pt-2">
        <img src={ReturnImg} alt="back" />
      </button>

      <section className="mb-8">
        <div className="absolute w-14 h-14 left-10 top-5"></div>
          <div className="text-3xl font-bold text-center text-[#164863]">
            興味のある分野を選択しましょう！
          </div>
      </section>

      {/* categoryの選択 */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-[2rem] mb-10">
        <div className="relative">
          {/* 画像の上に表示されるテキスト */}
          <p className="text-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2">
            #医療
          </p>
          <article className="row-span-2 bg-white hover:bg-white rounded-md shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="block w-full h-full">
              <figure className="h-48 overflow-hidden">
                <img src={ImageMed}
                  className="w-full h-full object- object-top"
                  alt="医療" />
              </figure>
              {/* 画像の左下に配置されるチェックボックス */}
              <div className="absolute bottom-0 left-0 p-[5px] ml-[10px]">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox w-[30px] h-[50px]" />
                  {/* ↓↓↓↓↓↓↓↓　下のコメントは消すとエラーが出る　↓↓↓↓↓↓↓ */}
                  {/* <span className="ml-[10px] text-[20px]">aaa</span> */}
                </label>
              </div>
            </div>
          </article>
        </div>

        <div className="relative">
          <p className="text-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2">
            #英語
          </p>
          <article className="row-span-2 bg-white hover:bg-white rounded-md shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="block w-full h-full">
              <figure className="h-48 overflow-hidden">
                <img src={ImageEng}
                  className="w-full h-full object- object-top"
                  alt="英語" />
              </figure>
              {/* 画像の左下に配置されるチェックボックス */}
              <div className="absolute bottom-0 left-0 p-[5px] ml-[10px]">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox w-[30px] h-[50px]" />
                  {/* <span className="ml-[10px] text-[20px]">aaa</span> */}
                </label>
              </div>
            </div>
          </article>
        </div>

        <div className="relative">
          <p className="text-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2">
            #IT
          </p>
          <article className="row-span-2 bg-white hover:bg-white rounded-md shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="block w-full h-full">
              <figure className="h-48 overflow-hidden">
                <img
                  src={ImageIt}
                  className="w-full h-full object- object-top"
                  alt="IT"
                />
              </figure>
              {/* 画像の左下に配置されるチェックボックス */}
              <div className="absolute bottom-0 left-0 p-[5px] ml-[10px]">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox w-[30px] h-[50px]" />
                  {/* <span className="ml-[10px] text-[20px]">aaa</span> */}
                </label>
              </div>
            </div>
          </article>
        </div>

        <div className="relative">
          <p className="text-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2">
            #物理学
          </p>
          <article className="row-span-2 bg-white hover:bg-white rounded-md shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="block w-full h-full">
              <figure className="h-48 overflow-hidden">
                <img
                  src={ImageEar}
                  className="w-full h-full object- object-top"
                  alt="物理学"
                />
              </figure>
              {/* 画像の左下に配置されるチェックボックス */}
              <div className="absolute bottom-0 left-0 p-[5px] ml-[10px]">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox w-[30px] h-[50px]" />
                  {/* <span className="ml-[10px] text-[20px]">aaa</span> */}
                </label>
              </div>
            </div>
          </article>
        </div>

        <div className="relative">
          <p className="text-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2">
            #生物学
          </p>
          <article className="row-span-2 bg-white hover:bg-white rounded-md shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="block w-full h-full">
              <figure className="h-48 overflow-hidden">
                <img
                  src={ImageSya}
                  className="w-full h-full object- object-top"
                  alt="シャチ"
                />
              </figure>
              {/* 画像の左下に配置されるチェックボックス */}
              <div className="absolute bottom-0 left-0 p-[5px] ml-[10px]">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox w-[30px] h-[50px]" />
                  {/* <span className="ml-[10px] text-[20px]">aaa</span> */}
                </label>
              </div>
            </div>
          </article>
        </div>

        <div className="relative">
          <p className="text-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2">
            #機械学
          </p>
          <article className="row-span-2 bg-white hover:bg-white rounded-md shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="block w-full h-full">
              <figure className="h-48 overflow-hidden">
                <img
                  src={ImageKou}
                  className="w-full h-full object- object-top"
                  alt="機械工学"
                />
              </figure>
              {/* 画像の左下に配置されるチェックボックス */}
              <div className="absolute bottom-0 left-0 p-[5px] ml-[10px]">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox w-[30px] h-[50px]" />
                  {/* <span className="ml-[10px] text-[20px]">aaa</span> */}
                </label>
              </div>
            </div>
          </article>
        </div>

        <div className="relative">
          <p className="text-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2">
            #環境学
          </p>
          <article className="row-span-2 bg-white hover:bg-white rounded-md shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="block w-full h-full">
              <figure className="h-48 overflow-hidden">
                <img
                  src={ImageKan}
                  className="w-full h-full object- object-top"
                  alt="環境学"
                />
              </figure>
              {/* 画像の左下に配置されるチェックボックス */}
              <div className="absolute bottom-0 left-0 p-[5px] ml-[10px]">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox w-[30px] h-[50px]" />
                  {/* <span className="ml-[10px] text-[20px]">aaa</span> */}
                </label>
              </div>
            </div>
          </article>
        </div>

        <div className="relative">
          <p className="text-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2">
            #哲学
          </p>
          <article className="row-span-2 bg-white hover:bg-white rounded-md shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="block w-full h-full">
              <figure className="h-48 overflow-hidden">
                <img
                  src={ImageTet}
                  className="w-full h-full object- object-top"
                  alt="哲学"
                />
              </figure>
              {/* 画像の左下に配置されるチェックボックス */}
              <div className="absolute bottom-0 left-0 p-[5px] ml-[10px]">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox w-[30px] h-[50px]" />
                  {/* <span className="ml-[10px] text-[20px]">aaa</span> */}
                </label>
              </div>
            </div>
          </article>
        </div>

        <div className="relative">
          <p className="text-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2">
            #法学
          </p>
          <article className="row-span-2 bg-white hover:bg-white rounded-md shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="block w-full h-full">
              <figure className="h-48 overflow-hidden">
                <img
                  src={ImageHou}
                  className="w-full h-full object- object-top"
                  alt="法学"
                />
              </figure>
              {/* 画像の左下に配置されるチェックボックス */}
              <div className="absolute bottom-0 left-0 p-[5px] ml-[10px]">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox w-[30px] h-[50px]" />
                  {/* <span className="ml-[10px] text-[20px]">aaa</span> */}
                </label>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Link to='/registerwelcom'>
        <div className="text-2xl text-right text-blue-300 font-bold">
          next&gt;&gt;
        </div>
      </Link>

    </div>
  )
}

export default CategoryComponent
