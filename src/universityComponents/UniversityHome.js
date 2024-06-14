import React, { useRef, useState } from 'react'

import Door from '../assets/images/door.png'
import { Link } from 'react-router-dom'
import {
  UserMenu,
  RootUrl,
  InputField,
  ProfileImageEditor,
  SaveBtn,
} from '../components/MaterialComponent'
import { WhiteHeader } from '../components/LayoutComponent'

import '../assets/styles/Dimensions.css'

import axios from 'axios'

import ImportImg from '../assets/images/imgImport.png'
import ReturnImg from '../assets/images/return.png'
import Imagepng from '../assets/images/IMG_4007.jpg'
import '../assets/styles/Dimensions.css'
/*
path変数一覧
  Pimage=プロフィール画像
 */
let ProImg = Imagepng
let linkpath = '/usersetting'
let returnpath = '/userhome'

function UniversityHome() {
  const Door1 = Door
  let UserImgPath = './images/test.png'
  let username = '瀬那通信大学'
  return (
    <div className="flex w-[100vw] h-screen">
      <UserMenu username={username} linkpath={linkpath} Pimage={ProImg} />
      <section className="main flex-grow-[7] flex content-center  h-screen ">
        <div className="flex flex-col justify-center space-y-20 w-[100%] text-center items-center ">
          <RootUrl name={Door1} text={'記事作成画面'} />
          <RootUrl name={Door1} text={'公開記事一覧'} />
        </div>
      </section>
    </div>
  )
}

export default UniversityHome
