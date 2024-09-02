//インポート
import React from 'react'
//component
import { UnivividHeader } from '../../components/LayoutComponent.js'
import ArticlePart from '../../components/materialComponent/ArticlePart.js'

//　テスト用
import BgImg from '../../assets/images/IMG_4007.jpg'
import Lok from '../../assets/images/lock_back.png'
import Ticon2 from '../../assets/images/English.jpg'

// 受講履歴一覧
function ArticleHistoryPage() {
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
    <UnivividHeader
      title="受講履歴一覧"
      returnCol={1}
      link="/usermypage"
      bgCol={true}
    />
    <div>
      <div className="flex space-y-5 justify-center pt-[101px] text-center">
        <div>
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

export default ArticleHistoryPage