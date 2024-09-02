//インポート
import React from 'react'
import { Link } from 'react-router-dom'
//icon
import { FaBell } from "react-icons/fa"
//assets
import Door from '../../assets/images/door.png'
import Imagepng from '../../assets/images/IMG_4007.jpg'
//component
import UserMenu from '../../components/materialComponent/UserMenu.js'
import RootUrl from '../../components/materialComponent/RootUrl.js'

/*------ユーザーのデータ変数------*/
let username = '小野寺工業大学' //ログインアカウントのユーザーネーム
let ProImg = Imagepng //プロフィール画像

//大学側のホームページ
function UniHomePage() {
  const Door1 = Door;
  // テスト用
  const data = true;    // データの有無

  // 通知表示するかの判定
  // if(data){
  //   setIsData(true);
  // } else {
  //   setIsData(false);
  // }

  return (
    <section>
    <div className="flex w-[100vw] h-screen">
      {/*ユーザーのメニュー*/}
      <UserMenu
        username={username}
        settingpath='/unisetting'
        Pimage={ProImg}
      />
      <Link to='/applicationlist'>
        <FaBell className='absolute text-main-middle size-10 right-5 top-4'/>
        {(data) && <div className='absolute right-5 top-4 size-5 rounded-full bg-red-500'></div>}
      </Link>

      {/*記事メニュー*/}
      <section className="flex-grow-[7] content-center h-screen">
        <RootUrl name={Door1} text={'記事作成画面'} linkpath='/createarticle' />
        <RootUrl name={Door1} text={'公開記事一覧'} linkpath='/openarticles' />
      </section>
    </div>
    </section>
  )
}

export default UniHomePage