// インポート
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../../assets/styles/Dimensions.css'

/**
 * 講座バー
 * @param {*} PartData
 * @param {*背景画像} BgImg
 * @param {*アイコン画像} Ticon
 * @param {*大学のユーザ名} groupname
 * @param {*講座名} title
 * @param {*日付} date
 * @param {*リンク先のパス} link
 * @returns
 */
function ArticlePart({ BgImg, Ticon, groupname, title, date, link }) {
  return (
    <Link to={link}>
      <div
        className="gradient-vontainer pt-5 space-y-10 flex flex-col h-[158px] w-[55vw] max-w-[800px] mb-5"
        style={{
          background: `url(${BgImg}) center center no-repeat`,
          backgroundSize: `cover`,
        }}
      >
        <div className="space-x-2 flex pl-[20px] text-left items-center">
          <div>
            <img className="w-[50px] h-[50px]" src={Ticon} alt="ticon" />
          </div>
          <div className="font-bold">{groupname}</div>
        </div>
        <div className="items-end -z-[-1] text-[white] flex justify-between mx-[15px]">
          <div className="font-bold text-[2em]">{title}</div>
          <div>{date}</div>
        </div>
      </div>
    </Link>
  )
}

// prop-typesによるプロパティのバリデーション
ArticlePart.propTypes = {
  BgImg: PropTypes.string.isRequired,
  Ticon: PropTypes.string,
  groupname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default ArticlePart
