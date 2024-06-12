import React from 'react'

import '../assets/styles/Dimensions.css'
import '../assets/styles/bg-images.css'

import Pen from '../assets/images/pen.png'
import BgImg from '../assets/images/IMG_4007.jpg'
import Ticon from '../assets/images/hougaku.jpg'
import Lok from '../assets/images/lock_back.png'
import Ticon2 from '../assets/images/English.jpg'

function Article() {
  return (
    <div className="">
      <section></section>
    </div>
  )
}
//ヘッダー
function UniHeader() {
  return (
    <section className="-z-[-2] fixed w-screen  bg-[#427d9d] text-white text-center font-bold py-5">
      <div>
        <span className="text-6xl">U</span>
        <span className="text-3xl">ni</span>
        <span className="text-6xl">V</span>
        <span className="text-3xl">ivid</span>
      </div>
      <section className="absolute left-[5vw] top-[20px]">
        <div className="relative rounded-full bg-[#D9D9D9] w-[160px] h-[160px] flex flex-col items-center justify-center">
          <img src={Pen} alt="pi" />
        </div>
      </section>
    </section>
  )
}

//詳細
function ArticleInfomation() {
  return (
    <aside className="fixed top-[200px] left-[20px]">
      <div className="flex items-center pb-[50px]">
        <div className="text-[#ffffff] bg-[#164863] rounded-[50px] w-[40px] h-[40px] font-bold text-center content-center">
          <p>&#12296;</p>
        </div>

        <p className="pl-[20px] font-bold text-[#164863] text-[30px]">
          ホームへ
        </p>
      </div>
      <div className="bg-[#9BBEC822] flex flex-col justify-center items-left pl-[25px]  h-[35em] w-[30vw] max-w-[400px] border-b-[4px] border-t-[4px] border-[#427D9D] border-solid">
        <section className="space-y-3">
          <div className="space-y-2">
            <p className="text-[#164863] font-bold text-[1.5em]">場所:</p>
            <p>大阪</p>
          </div>

          <div className="space-y-2">
            <p className="text-[#164863] font-bold text-[1.5em]">日程:</p>
            <p>2024/08/06</p>
          </div>
          <div className="space-y-2">
            <p className="text-[#164863] font-bold text-[1.5em]">時間:</p>
            <p>14時</p>
          </div>
          <div className="space-y-2">
            <p className="text-[#164863] font-bold text-[1.5em]">ジャンル:</p>
            <p>IT</p>
          </div>
          <div className="space-y-2">
            <p className="text-[#164863] font-bold text-[1.5em]">キーワード:</p>
            <p>瀬那大学</p>

            <div className="border-triangle"></div>
          </div>
        </section>
        <section className="pt-[20px]">
          <form className="flex justify-around">
            <div className="flex justify-center">
              <p className="text-[1.5em] text-[#164863] font-bold">開講済</p>
              <input
                className="rounded-[50px] border-solid border-[2px] w-[25px]"
                type="checkbox"
                id="check"
              />
            </div>
            <div>
              <button className="text-center text-[1.5em] bg-[#427D9D] text-[#ffffff] w-[5em] rounded-[10px]">
                検索
              </button>
            </div>
          </form>
        </section>
      </div>
      <div></div>
    </aside>
  )
}

//一覧
function ArticleList() {
  return (
    <div className="flex space-y-5 justify-center mx-[65vw] pt-[101px] text-center">
      <div className="pt-[50px] space-y-10">
        <div
          className="pt-[20px] space-y-10 flex flex-col gradient-vontainer h-[158px] w-[55vw] max-w-[800px]"
          style={{
            background: `url(${BgImg}) center center no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <div className="space-x-2   flex pl-[20px] text-left items-center">
            <div>
              <img className="w-[50px] h-[50px]" src={Ticon} alt="ticon" />
            </div>
            <div className="font-bold">ECC Artist</div>
          </div>
          <div className="items-end -z-[-1] text-[white] flex justify-between mx-[15px]">
            <div className="font-bold text-[2em]">ポートレート講座</div>
            <div>2024/06/12</div>
          </div>
        </div>
        <div
          className="pt-[20px] space-y-10 flex flex-col gradient-vontainer h-[158px] w-[55vw] max-w-[657px]"
          style={{
            background: `url(${Lok}) center center no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <div className="space-x-2   flex pl-[20px] text-left items-center">
            <div>
              <img className="w-[50px] h-[50px]" src={Ticon2} alt="ticon" />
            </div>
            <div className="font-bold">ECC Comp</div>
          </div>
          <div className="items-end -z-[-1] text-[white] flex justify-between mx-[15px]">
            <div className="font-bold text-[2em]">セキュリティー応用</div>
            <div>2024/06/15</div>
          </div>
        </div>
        <div
          className="pt-[20px] space-y-10 flex flex-col gradient-vontainer h-[158px] w-[55vw] max-w-[657px]"
          style={{
            background: `url(${BgImg}) center center no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <div className="space-x-2   flex pl-[20px] text-left items-center">
            <div>
              <img className="w-[50px] h-[50px]" src={Ticon} alt="ticon" />
            </div>
            <div className="font-bold">ECC Artist</div>
          </div>
          <div className="items-end -z-[-1] text-[white] flex justify-between mx-[15px]">
            <div className="font-bold text-[2em]">ポートレート講座</div>
            <div>2024/06/12</div>
          </div>
        </div>
        <div
          className="pt-[20px] space-y-10 flex flex-col gradient-vontainer h-[158px] w-[55vw] max-w-[657px]"
          style={{
            background: `url(${Lok}) center center no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <div className="space-x-2   flex pl-[20px] text-left items-center">
            <div>
              <img className="w-[50px] h-[50px]" src={Ticon2} alt="ticon" />
            </div>
            <div className="font-bold">ECC Comp</div>
          </div>
          <div className="items-end -z-[-1] text-[white] flex justify-between mx-[15px]">
            <div className="font-bold text-[2em]">セキュリティー応用</div>
            <div>2024/06/15</div>
          </div>
        </div>
        <div
          className="pt-[20px] space-y-10 flex flex-col gradient-vontainer h-[158px] w-[55vw] max-w-[657px]"
          style={{
            background: `url(${BgImg}) center center no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <div className="space-x-2   flex pl-[20px] text-left items-center">
            <div>
              <img className="w-[50px] h-[50px]" src={Ticon} alt="ticon" />
            </div>
            <div className="font-bold">ECC Artist</div>
          </div>
          <div className="items-end -z-[-1] text-[white] flex justify-between mx-[15px]">
            <div className="font-bold text-[2em]">ポートレート講座</div>
            <div>2024/06/12</div>
          </div>
        </div>
        <div
          className="pt-[20px] space-y-10 flex flex-col gradient-vontainer h-[158px] w-[55vw] max-w-[657px]"
          style={{
            background: `url(${Lok}) center center no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <div className="space-x-2   flex pl-[20px] text-left items-center">
            <div>
              <img className="w-[50px] h-[50px]" src={Ticon2} alt="ticon" />
            </div>
            <div className="font-bold">ECC Comp</div>
          </div>
          <div className="items-end -z-[-1] text-[white] flex justify-between mx-[15px]">
            <div className="font-bold text-[2em]">セキュリティー応用</div>
            <div>2024/06/15</div>
          </div>
        </div>
        <div
          className="pt-[20px] space-y-10 flex flex-col gradient-vontainer h-[158px] w-[55vw] max-w-[657px]"
          style={{
            background: `url(${BgImg}) center center no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <div className="space-x-2   flex pl-[20px] text-left items-center">
            <div>
              <img className="w-[50px] h-[50px]" src={Ticon} alt="ticon" />
            </div>
            <div className="font-bold">ECC Artist</div>
          </div>
          <div className="items-end -z-[-1] text-[white] flex justify-between mx-[15px]">
            <div className="font-bold text-[2em]">ポートレート講座</div>
            <div>2024/06/12</div>
          </div>
        </div>
        <div
          className="pt-[20px] space-y-10 flex flex-col gradient-vontainer h-[158px] w-[55vw] max-w-[657px]"
          style={{
            background: `url(${Lok}) center center no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <div className="space-x-2   flex pl-[20px] text-left items-center">
            <div>
              <img className="w-[50px] h-[50px]" src={Ticon2} alt="ticon" />
            </div>
            <div className="font-bold">ECC Comp</div>
          </div>
          <div className="items-end -z-[-1] text-[white] flex justify-between mx-[15px]">
            <div className="font-bold text-[2em]">セキュリティー応用</div>
            <div>2024/06/15</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Article
export { UniHeader, ArticleInfomation, ArticleList }
