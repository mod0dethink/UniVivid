import React from 'react'

import ImageRet from '../assets/images/return.png'
import ImageMed from '../assets/images/iryou.jpg'
import ImageEng from '../assets/images/English.jpg'
import ImageIt from '../assets/images/IT.jpg'
import ImageEar from '../assets/images/earth.jpg'
import ImageSya from '../assets/images/syachi.jpg'
import ImageKou from '../assets/images/kougaku.jpg'
import ImageKan from '../assets/images/kankyou.jpg'
import ImageTet from '../assets/images/tetugaku.jpg'
import ImageHou from '../assets/images/hougaku.jpg'

function CategoryComponent() {
  return (
    <div className=" m-32 mt-16">
      <section className="mb-8">
        <div>
          <img
            src={ImageRet}
            className="w-12 h-12 absolute top-0 left-0"
            alt="矢印"
          />
        </div>
        <div className="absolute w-14 h-14 left-10 top-5"></div>

        <div className="text-3xl font-bold text-center text-[#164863]">
          興味のある分野を選択しましょう！
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
        <div className="relative">
          <p className="text-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2">
            #医療
          </p>

          <article className="row-span-2 bg-white hover:bg-white rounded-md shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="block w-full h-full">
              <figure className="h-48 overflow-hidden">
                <img
                  src={ImageMed}
                  className="w-full h-full object- object-top"
                  alt="医療"
                />
              </figure>
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
                <img
                  src={ImageEng}
                  className="w-full h-full object- object-top"
                  alt="英語"
                />
              </figure>
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
            </div>
          </article>
        </div>
      </section>

      <section>
        <div className="text-2xl text-right text-blue-300 font-bold">
          next&gt;&gt;
        </div>
      </section>
    </div>
  )
}

export default CategoryComponent
