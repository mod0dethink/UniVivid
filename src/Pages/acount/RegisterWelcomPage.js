//インポート
import React from 'react'
import { Link } from 'react-router-dom'
//component
import {
  UnivividHeader,
  Unifooter,
  Logotext,
} from '../../components/LayoutComponent'

//新規登録完了の画面
function RegisterWelcomPage() {
  const user_name = 'ユーザー名' // 引数として渡されたidから名前を取得し、変数に代入

  return (
    <section>
    <div className="bg-main-bg font-bold h-screen font-mono">
      <UnivividHeader title={<Logotext />} hidden="hidden" bgCol={true}/>
      <div className="h-full content-center text-center text-3xl ">
        <p>アカウントの登録が完了しました！</p>
        <p>ようこそ、<font className="text-main-dark">{user_name}</font>さん！</p>
        <Link to='/login'>
          <button className='py-3 px-5 text-white text-3xl bg-main bg-gradient-to-t from-main-middle rounded-lg mt-10'>
            ログインして始める
          </button>
        </Link>
      </div>
      <Unifooter />
    </div>
    </section>
  )
}

export default RegisterWelcomPage