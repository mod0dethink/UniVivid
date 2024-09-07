//インポート
import React from 'react'
//assets
import HeaderLogo from '../../components/layout/layouts.js'
import images from '../../assets/images.js'
import UniSidebar from '../../components/common/UniSidebar.js'
import NoteList from '../../components/common/NoteList.js'

// アップロードしたノート一覧
function UpNoteListPage() {
  let notedata = [
    {
      icon: images.WebImage3,
      username: 'けんちゃん',
    },
    {
      icon: images.user_icon,
      username: 'test',
    },
    {
      icon: images.WebImage2,
      username: 'minami',
    },
  ]
  return (
    <div className="flex flex-col justify-start items-center w-[100vw] h-screen text-center pt-[100px]">
      <UniSidebar />
      <HeaderLogo />
      <p className="text-[50px]">アップロードしたノート一覧</p>

      <div className="flex flex-col space-y-5 justify-center text-center">
        {notedata.map(({ icon, username, index }) => (
          <NoteList key={index} icon={icon} username={username} />
        ))}
      </div>
    </div>
  )
}

export default UpNoteListPage
