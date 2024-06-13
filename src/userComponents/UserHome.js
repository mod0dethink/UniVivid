import React from 'react'
import Door from '../assets/images/door.png'
import { Link } from 'react-router-dom'
import { UserMenu, RootUrl } from '../components/UserComponent'

import '../assets/styles/Dimensions.css'

function UserHome() {
  const Door1 = Door
  return (
    <div className="flex w-[100vw] h-screen">
      <UserMenu />
      <section className="main flex-grow-[7] flex content-center  h-screen ">
        <div className="flex flex-col justify-center space-y-20 w-[100%] text-center items-center ">
          <RootUrl name={Door1} text={'動画へ'} />
          <RootUrl name={Door1} text={'記事一覧へ'} />
        </div>
      </section>
    </div>
  )
}

export default UserHome
