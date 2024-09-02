//インポート
import React from 'react'
//component
import { BoxMenu, HomeReturnBtn } from '../../components/MaterialComponent.js'
import { UserHeader } from '../../components/LayoutComponent.js'
//assets
import Imagepng from '../../assets/images/IMG_4007.jpg'

/*------ユーザーのデータ変数------*/
let ProImg = Imagepng //プロフィール画像

//マイページ
function UserMyPage() {
  return (
    <div className="flex flex-col h-screen w-[100vw] justify-center">
      {/*header*/}
      <section>
        <UserHeader iconpath={ProImg} />
      </section>
      {/* <section className="pt-[201px] pl-[10vw]"> */}
      <section className="mt-32 ml-10">
        <HomeReturnBtn linkpath="/userhome" />
      </section>
      {/*マイページメニュー*/}
      <table className="w-full h-full text-white text-center items-center justify-around">
        <tr className="flex justify-around">
          <BoxMenu text="受講履歴一覧" linkpath="/articlehistory" />
          <BoxMenu
            text={'お気に入り\nいいねしたノート'}
            linkpath="/favoritelist"
          />
          <BoxMenu text="アップロードノート一覧" linkpath="/upnotelist" />
        </tr>
      </table>
    </div>
  )
}

export default UserMyPage