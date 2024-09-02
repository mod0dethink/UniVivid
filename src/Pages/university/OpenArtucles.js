//インポート
import React from 'react'
import { ArticlePart, OtherMenu } from '../../components/MaterialComponent'

//テスト
import BgImg from '../../assets/images/IMG_4007.jpg'
import Lok from '../../assets/images/lock_back.png'
import Ticon2 from '../../assets/images/English.jpg'
import Imagepng from '../../assets/images/IMG_4007.jpg'
/*------ユーザーのデータ変数------*/
let username = '小野寺工業大学' //ログインアカウントのユーザーネーム
let ProImg = Imagepng //プロフィール画像

// 公開記事一覧
function OpenArtucles() {
  // ！テストデータ！
  const data = [
    [BgImg,Ticon2,'ECC Artist','ポートレート講座','2002/06/24'],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','ポートレート講座','2024/08/29',],
    [Lok,Ticon2,'ECC comp','あああああ','2024/08/29',],
  ]

  const detail = "ArduinoでRaspberry Piを用い、IoTに触れる。";  // 内容
  return (
    <>
    <div className='flex bg-main-bg'>
      <OtherMenu img={ProImg} name={username} link='/unihome' />
      <div className="space-y-5 w-3/4 ml-32 h-screen">
        <div className=" pt-12 space-y-10 h-full overflow-y-scroll">
          {
            data.map((item, index) =>
              <ArticlePart 
                key={index}
                BgImg={item[0]}
                Ticon={item[1]}
                groupname={item[2]}
                title={item[3]}
                date={item[4]}
                link={'/editonelecture'}
              />
            )
          }
        </div>
      </div>  
    </div>
    </>
  )
}

export default OpenArtucles