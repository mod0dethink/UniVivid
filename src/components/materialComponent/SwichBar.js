//インポート
import React from 'react'
import '../../assets/styles/Dimensions.css'

// 講義とノートで切り替えるバー
function SwichBar(handleButtonClick) {
  return (
    <>
      <section className="pt-28 flex justify-around border-b-[2px] border-[#838181] w-[80vw]">
        <button
          id="lecture"
          className="border-b-[2px] border-[#229DF6] w-[15vw]"
          onClick={handleButtonClick(1)}
        >
          あ
        </button>
        <button id="note" className="border-b-[2px] border-[#229DF6] w-[15vw]">
          {/* {this.props.tab2} */}
        </button>
      </section>
    </>
  )
}

export default SwichBar