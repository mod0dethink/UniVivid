//インポート
import React from 'react'
import '../../assets/styles/Dimensions.css'

//変更内容を保存するbtn
function SaveBtn() {
  return (
    <section>
      <button
        type="submit"
        className="bg-[#D9D9D9] text-[1.5em] font-bold w-[7em] h-[2em]"
      >
        編集を保存
      </button>
    </section>
  )
}

export default SaveBtn