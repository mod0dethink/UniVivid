//インポート
import React, { useState } from 'react'
//assets
//component
import ArticlePart from '../../components/materialComponent/ArticlePart.js'
import HeaderLogo from '../../components/layout/layouts.js'
import images from '../../assets/images.js'
import UniSidebar from '../../components/common/UniSidebar.js'
import NoteList from '../../components/common/NoteList.js'

// お気に入りページ
function FavoriteListPage() {
  const [selectedOption, setSelectedOption] = useState(false)
  let data = [
    {
      bgimg: images.BgImg,
      icon: images.Ticon2,
      aName: 'ECC Artist',
      pName: 'ポートレート講座',
      date: '2002/06/24',
    },
  ]

  let notedata = [
    {
      icon: images.user_icon,
      username: 'test',
    },
    {
      icon: images.WebImage2,
      username: 'minami',
    },
  ]
  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }

  // ！テストデータ！

  return (
    <div className="flex flex-col justify-start items-center w-[100vw] h-screen text-center pt-[100px]">
      <UniSidebar />
      <HeaderLogo />
      <p className="text-[50px]">受講履歴一覧</p>
      <div className="bg-[#427D9D] text-[36px] w-[800px] flex justify-around rounded-[50px] text-white">
        <button
          onClick={() => handleOptionChange(false)}
          className={`w-[200px] ${selectedOption ? '' : 'bg-white rounded-[30px] text-black'}`}
        >
          講義
        </button>
        <button
          onClick={() => handleOptionChange(true)}
          className={`w-[200px] ${selectedOption ? 'bg-white rounded-[30px] text-black' : ''}`}
        >
          ノート
        </button>
      </div>
      <div className="flex flex-col space-y-5 justify-center text-center">
        {selectedOption === false
          ? data.map(({ bgimg, icon, aName, pName, date, index }) => (
              <ArticlePart
                key={index}
                BgImg={bgimg}
                Ticon={icon}
                groupname={aName}
                title={pName}
                date={date}
                link={'/editonelecture'}
              />
            ))
          : notedata.map(({ icon, username, index }) => (
              <NoteList key={index} icon={icon} username={username} />
            ))}
      </div>
    </div>
  )
}

export default FavoriteListPage
