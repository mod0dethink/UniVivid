//インポート
import React from 'react'
//assets
import '../../assets/styles/Dimensions.css'
import '../../assets/styles/bg-images.css'
//component
import { ArticlePart } from '../../components/MaterialComponent.js'
import { UnivividHeader } from '../../components/LayoutComponent.js'

//テスト用
import BgImg from '../../assets/images/IMG_4007.jpg'
import Lok from '../../assets/images/lock_back.png'
import Ticon2 from '../../assets/images/English.jpg'

// アップロードしたノート一覧
function UpNoteListPage() {
  // ！テストデータ！
  const data = [
    [BgImg, Ticon2, 'ECC Artist', 'ポートレート講座', '2002/06/24'],
    [Lok, Ticon2, 'ECC comp', 'ポートレート講座', '2024/08/29'],
    [Lok, Ticon2, 'ECC comp', 'ポートレート講座', '2024/08/29'],
    [Lok, Ticon2, 'ECC comp', 'ポートレート講座', '2024/08/29'],
    [Lok, Ticon2, 'ECC comp', 'ポートレート講座', '2024/08/29'],
  ]
  return (
    <div>
      <UnivividHeader
        title="アップロードしたノート一覧"
        returnCol={1}
        link="/usermypage"
        bgCol={true}
      />
      <div className="flex space-y-5 justify-center pt-[101px] text-center">
        <div className="pt-[50px] space-y-10">
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
  )
}

export default UpNoteListPage