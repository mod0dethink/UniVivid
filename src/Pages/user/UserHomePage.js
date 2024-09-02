//インポート
import React, { useState, useEffect } from 'react'
import axios from 'axios'
//component
import UserMenu from '../../components/materialComponent/UserMenu.js'
import RootUrl from '../../components/materialComponent/RootUrl.js'
//assets
import Imagepng from '../../assets/images/IMG_4007.jpg'
import Door from '../../assets/images/door.png'
import '../../assets/styles/Dimensions.css'
import '../../assets/styles/bg-images.css'

/*------ユーザーのデータ変数------*/
let ProImg = Imagepng //プロフィール画像
/*------Linkパス------*/
let settinglinkpath = '/usersetting' //ユーザーメニュー画面へのLinkパス
let mypagepath = '/usermypage' //マイページのLinkパス
let articlepath = '/userarticlelist' //記事一覧へのLinkパス

//ユーザーのホーム画面
function UserHomePage() {
  const [username, setUsername] = useState('') // 初期値を空文字列に設定

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/auth/username',
          { withCredentials: true },
        )
        setUsername(response.data.username)
      } catch (error) {
        console.error('ユーザー名の取得に失敗しました:', error)
        setUsername('ゲスト') // エラー時のフォールバック
      }
    }

    fetchUsername()
  }, []) // 空の依存配列で、コンポーネントのマウント時に一度だけ実行

  return (
    <section>
    <div className="flex w-[100vw] h-screen">
      {/*ユーザーのメニュー*/}
      <UserMenu
        username={username}
        settingpath={settinglinkpath}
        mypagepath={mypagepath}
        Pimage={ProImg}
      />
      {/*記事メニュー*/}
      <div className="flex-grow-[7] content-center h-screen">
        <RootUrl name={Door} text={'動画へ'} linkpath="" />
        <RootUrl name={Door} text={'記事一覧へ'} linkpath={articlepath} />
      </div>
    </div>
    </section>
  )
}

export default UserHomePage