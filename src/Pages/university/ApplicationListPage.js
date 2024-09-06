import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//assets
//component
import ArticlePart from '../../components/materialComponent/ArticlePart.js'
import HeaderLogo from '../../components/layout/layouts.js'
import images from '../../assets/images.js'
import UniSidebar from '../../components/common/UniSidebar.js'
import ApNote from '../../components/common/ApNote.js'

// 申請許諾画面
function ApplicationListPage() {
  const [selectedOption, setSelectedOption] = useState(false)

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
          コメント
        </button>
        <button
          onClick={() => handleOptionChange(true)}
          className={`w-[200px] ${selectedOption ? 'bg-white rounded-[30px] text-black' : ''}`}
        >
          ノート
        </button>
      </div>
      <div className="flex flex-col space-y-5 justify-center text-center">
        {/*onClickNavigateに変更予定*/}
        {selectedOption === false
          ? notedata.map(({ icon, username, index }) => (
              <Link key={index} to="/appcomment">
                <ApNote icon={icon} username={username} />
              </Link>
            ))
          : notedata.map(({ icon, username, index }) => (
              <Link key={index} to="/appnote">
                <ApNote key={index} icon={icon} username={username} />
              </Link>
            ))}
      </div>
    </div>
  )
}

export default ApplicationListPage
