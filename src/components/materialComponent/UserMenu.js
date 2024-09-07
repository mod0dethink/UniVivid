//インポート
import React from 'react'
import { Link } from 'react-router-dom'

//asideのユーザーメニュー
function UserMenu(itemData) {
  return (
    <aside className="aside flex-grow-[1] min-w-[300px] bg-main content-center flex flex-col items-center justify-between text-white text-2xl">
      <div className="text-center pt-[50px]">
        <div
          className="rounded-full bg-[#D9D9D9] w-[160px] h-[160px] flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${itemData.Pimage})`,
            backgroundSize: `cover`,
            backgroundPosition: `center center`,
          }}
        ></div>
        <div>{itemData.username}</div>
      </div>
      <div>
        <Link to={itemData.mypagepath}>マイページ</Link>
        <div className="py-3"></div>
        <Link to={itemData.settingpath}>ユーザー設定</Link>
      </div>
      <Link to="/">
        <div className="py-[50px]">
          <p>ログアウト</p>
        </div>
      </Link>
    </aside>
  )
}

export default UserMenu