//インポート
import React from 'react'
import { Link } from 'react-router-dom'
//icon
import { FaAngleDoubleRight } from 'react-icons/fa'

//ログイン完了ページ
function LoginWelcomPage() {
  const user_name = 'ユーザー名' // 引数として渡されたidから名前を取得し、変数に代入

  return(
    <>
    <div className="bg-main-bg font-bold h-screen font-mono">
      <div className="h-full content-center text-center text-4xl ">
        <p>
          こんにちは、<font className="text-main-dark">{user_name}</font>さん！
        </p>
      </div>
      <div className="flex justify-end -mt-14 mr-10 text-main-middle">
        <Link to="/userhome">
          <button className="flex">
            <p>next</p>
            <FaAngleDoubleRight className="ml-1 mt-1" />
          </button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default LoginWelcomPage