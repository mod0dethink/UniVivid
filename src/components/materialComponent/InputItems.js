//インポート
import React from 'react'
import '../../assets/styles/Dimensions.css'

// Uniの記事 作成・編集・確認 画面
function InputItems() {
  return (
    <div>
      <div className="mx-auto max-w-[600px] mb-[1.5rem]">
        <label
          htmlFor="lectureName"
          className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
        >
          1.講義名
        </label>
        <input
          id="lectureName"
          className="w-full lg:w-[600px] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
          placeholder=""
        />
      </div>

      <div className="mx-auto max-w-[600px] mb-[1.5rem]">
        <label
          htmlFor="lectureName"
          className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
        >
          2.講師
        </label>
        <input
          className="w-full lg:w-[600px] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
          placeholder=""
        />
      </div>

      <div className="mx-auto max-w-[600px] mb-[1.5rem]">
        <label
          htmlFor="lectureName"
          className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
        >
          3.日時
        </label>
        <input
          className="w-full lg:w-[600px] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
          placeholder=""
        />
      </div>

      <div className="mx-auto max-w-[600px] mb-[1.5rem]">
        <label
          htmlFor="lectureName"
          className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
        >
          4.ジャンル
        </label>
        <input
          className="w-full lg:w-[600px] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
          placeholder=""
        />
      </div>

      <div className="mx-auto max-w-[600px] mb-[1.5rem]">
        <label
          htmlFor="lectureName"
          className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
        >
          5.表示画像
        </label>
        <input
          className="w-full lg:w-[600px] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
          placeholder=""
        />
      </div>

      <div className="mx-auto max-w-[600px] mb-[1.5rem]">
        <label
          htmlFor="lectureName"
          className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
        >
          6.申込みURL
        </label>
        <input
          className="w-full lg:w-[600px] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
          placeholder=""
        />
      </div>

      <div className="mx-auto max-w-[600px] mb-[1.5rem]">
        <label
          htmlFor="lectureName"
          className="block text-[1.4rem] font-bold text-[#838181] mb-[0.4rem] text-left"
        >
          7.講義内容
        </label>

        <textarea
          type="text"
          className="w-[600px] h-[10rem] text-[1.4rem] leading-[2.5rem] border border-[#838181] rounded-[5px] pl-[1rem]"
          placeholder=""
        />
      </div>
    </div>
  )
}

export default InputItems