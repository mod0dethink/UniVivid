//インポート
import React from 'react'
import '../../assets/styles/Dimensions.css'
import useFocusHover from '../../assets/scripts/animation.js'

//検索エリア
function ArticleSearch(pathData) {
  const { isHovered, handleFocus, handleBlur } = useFocusHover()
  return (
    // <aside className="fixed top-[200px] left-[20px]">
    <aside className="fixed w-full">
      <div
        className="bg-[#9BBEC822] flex flex-col justify-center items-left pl-[25px] py-3 w-3/12 border-b-[4px] border-t-[4px] border-main border-solid
        font-bold text-main-dark"
      >
        <section className="space-y-1">
          <div className="space-y-2">
            <p>場所:</p>
            <input type="text" />
          </div>

          <div className="space-y-2">
            <p>日程:</p>
            <input type="text" />
          </div>
          <div className="space-y-2">
            <p>時間:</p>
            <input type="text" />
          </div>
          <div className="space-y-2">
            <p>ジャンル:</p>
            <input type="text" />
          </div>
          <div className="space-y-2">
            <p>キーワード:</p>
            <input type="text" />

            <div className="border-triangle"></div>
          </div>
        </section>
        <section className="pt-[20px]">
          <form className="flex justify-around">
            <div className="flex">
              <input
                className="border-solid border-[2px] w-4"
                type="checkbox"
                id="check"
              />
              <p className="text-2xl text-[#164863] font-bold ml-2">開講済</p>
            </div>
            <div>
              <button className="text-center text-2xl bg-[#427D9D] text-[#ffffff] w-[5em] rounded-[10px]">
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

export default ArticleSearch