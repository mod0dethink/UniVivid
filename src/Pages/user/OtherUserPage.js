//インポート
import React from 'react'
//assets
import '../../assets/styles/Dimensions.css'
import '../../assets/styles/bg-images.css'
//component
import { ArticlePart, OtherMenu } from '../../components/MaterialComponent.js'

//テスト用
import BgImg from '../../assets/images/IMG_4007.jpg'
import Lok from '../../assets/images/lock_back.png'
import Ticon2 from '../../assets/images/English.jpg'
import uni_img from '../../assets/images/ECC_build.jpg' // 大学画像

// 他ユーザーのノート一覧
function OtherUserPage() {
  // ！テストデータ！
  const data = [
    [BgImg, Ticon2, 'ECC Artist', 'ポートレート講座', '2002/06/24'],
    [Lok, Ticon2, 'ECC comp', 'ポートレート講座', '2024/08/29'],
    [Lok, Ticon2, 'ECC comp', 'ポートレート講座', '2024/08/29'],
    [Lok, Ticon2, 'ECC comp', 'ポートレート講座', '2024/08/29'],
    [Lok, Ticon2, 'ECC comp', 'ポートレート講座', '2024/08/29'],
  ]
  return (
    <section>
    <div className="flex bg-main-bg">
      <OtherMenu image={uni_img} name={'kata_sk'} link="/onelecturepage" />
      <div className="space-y-5 w-3/4 ml-32">
        <div className="pt-12 space-y-10">
          {data.map((item, index) => (
            <ArticlePart
              key={index}
              BgImg={item[0]}
              Ticon={item[1]}
              groupname={item[2]}
              title={item[3]}
              date={item[4]}
              link={'/editonelecture'}
            />
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}

export default OtherUserPage