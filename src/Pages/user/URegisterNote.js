import React from 'react'

import images from '../../assets/images'
import HeaderLogo from '../../components/layout/layouts'
import UniSidebar from '../../components/common/UniSidebar'

const URegisterNote = () => {
  const Value = {
    uicon: images.user_icon,
    className: '講義名',
    teacher: '講師',

    theme: 'テーマ',
    date: '日付',
  }
  const item = [
    { title: '講義', value: Value.className },
    { title: '講師', value: Value.teacher },
    { title: 'テーマ', value: Value.theme },
    { title: '日付', value: Value.date },
  ]
  return (
    <div className="flex flex-col justify-center items-center h-screen w-[100vw] space-y-[50px]">
      <HeaderLogo />
      <UniSidebar />
      <div className="flex justify-center items-center space-x-[20px]">
        <img src={Value.uicon} alt={'icon'} width="70px" />
        <p className="text-[30px] font-bold">Username</p>
      </div>
      <div className="font-bold flex space-x-[50px]">
        {item.map(({ title, value, index }) => (
          <div key={index} className="flex space-x-[10px]">
            <p className="bg-[#427d9d] text-[16px] text-white px-10 h-[25px]">
              {title}
            </p>
            <p>{value}</p>
          </div>
        ))}
      </div>
      <form>
        <div className="w-[1030px] h-[360px] bg-[#f5f5f5]">
          <label className="flex flex-col justify-center items-center h-full">
            <img src={images.ImportPng} alt="upfile" width="200px" />
            <p className="text-[30px] font-bold text-[#b8b8b8]">
              ファイルをアップロード
            </p>
            <p className="text-[20px] font-bold text-[#b8b8b8]">
              *投稿できるのは’’画像’’と’’PDF’’のみとなります。
            </p>
            <input className="hidden" type="file" name="upNote" />
          </label>
        </div>
        <div></div>
      </form>
    </div>
  )
}

export default URegisterNote
