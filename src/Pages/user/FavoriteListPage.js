//インポート
import React, { useState } from 'react'
//assets
import '../../assets/styles/Dimensions.css'
import '../../assets/styles/bg-images.css'
//component
import { UnivividHeader } from '../../components/LayoutComponent.js'
import ArticlePart from '../../components/materialComponent/ArticlePart.js'

//テスト用
import BgImg from '../../assets/images/IMG_4007.jpg'
import Lok from '../../assets/images/lock_back.png'
import Ticon2 from '../../assets/images/English.jpg'

// お気に入りページ
function FavoriteListPage() {
  // ！テストデータ！
  const data = [
    [BgImg, Ticon2, 'ECC Artist', 'ポートレート講座', '2002/06/24'],
    [Lok, Ticon2, 'ECC comp', 'ポートレート講座', '2024/08/29'],
    [Lok, Ticon2, 'ECC comp', 'ポートレート講座', '2024/08/29'],
    [Lok, Ticon2, 'ECC comp', 'ポートレート講座', '2024/08/29'],
    [Lok, Ticon2, 'ECC comp', 'ポートレート講座', '2024/08/29'],
  ]
  const [isPage, setIsPage] = useState(0)
  return (
    <section>
    <div className="flex flex-col items-center">
      <UnivividHeader
        title="お気に入り"
        returnCol={1}
        link="/usermypage"
        bgCol={true}
      />
      <div className="grid pt-[98px] place-items-center w-screen">
        <div className="fixed flex justify-around border-b-[2px] border-[#838181] w-11/12 bg-main-bg pt-14">
          <button
            id={isPage == 0 ? 'swichBar' : ''}
            onClick={() => {
              setIsPage(0)
            }}
          >
            講座
          </button>
          <button
            id={isPage == 1 ? 'swichBar' : ''}
            onClick={() => {
              setIsPage(1)
            }}
          >
            ノート
          </button>
        </div>
      </div>
      <div>
        <div className="flex space-y-5 justify-center text-center">
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
    </div>
    </section>
  )
}

export default FavoriteListPage