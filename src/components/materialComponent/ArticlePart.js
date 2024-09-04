//インポート
import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/Dimensions.css'

/**
 * 講座バー
 * @param {*} PartData
 * @param {*背景画像} BgImg
 * @param {*アイコン画像} Ticon
 * @param {*大学のユーザ名} groupname
 * @param {*講座名} title
 * @param {*日付} date
 * @returns
 */
function ArticlePart(PartData) {
  return (
    <Link to={PartData.link}>
      <div
        className="gradient-vontainer pt-5 space-y-10 flex flex-col h-[158px] w-[55vw] max-w-[800px] mb-5"
        style={{
          background: `url(${PartData.BgImg}) center center no-repeat`,
          backgroundSize: `cover`,
        }}
      >
        <div className="space-x-2 flex pl-[20px] text-left items-center">
          <div>
            <img
              className="w-[50px] h-[50px]"
              src={PartData.Ticon}
              alt="ticon"
            />
          </div>
          <div className="font-bold">{PartData.groupname}</div>
        </div>
        <div className="items-end -z-[-1] text-[white] flex justify-between mx-[15px]">
          <div className="font-bold text-[2em]">{PartData.title}</div>
          <div>{PartData.date}</div>
        </div>
      </div>
    </Link>
  )
}

export default ArticlePart