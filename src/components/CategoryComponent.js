import React from 'react'


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
    <div>
      <section>
        <div>興味のある分野を選択しましょう！</div>
      </section>


      <section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
          <p>医療</p>
          {/* <article className="row-span-2 bg-white hover:bg-white rounded-md shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <figure className="h-48 overflow-hidden">
              <img
                src={ImageMed}
                className="w-full h-full object-cover object-top"
                alt="医療"
              />
            </figure>
          </article> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
          <p>#英語</p>
          {/* <article className="row-span-2 bg-white hover:bg-white rounded-md shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <figure className="h-48 overflow-hidden">
              <img
                src={ImageEng}
                className="w-full h-full object-cover object-top"
                alt="英語"
              />
            </figure>
          </article> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
          <p>#IT</p>
          {/* <article className="row-span-2 bg-white hover:bg-white rounded-md shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <figure className="h-48 overflow-hidden">
              <img
                src={ImageIt}
                className="w-full h-full object-cover object-top"
                alt="IT"
              />
            </figure>
          </article> */}
        </div>
        
      </section>

      <section>
        <div>next&gt;&gt;</div>
      </section>
    </div>
  )
}

export default CategoryComponent
