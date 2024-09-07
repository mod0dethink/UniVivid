import React from 'react'
import HeaderLogo from '../../components/layout/layouts'
import UniSidebar from '../../components/common/UniSidebar'
import { Link } from 'react-router-dom'
import images from '../../assets/images'

const UniHomePage = () => {
  return (
    <div className=" w-[100vw] h-screen flex flex-col justify-center items-center space-y-[50px]">
      <HeaderLogo />
      <UniSidebar />
      <div className="font-bold text-[36px] flex justify-evenly items-center w-full">
        <div className="flex flex-col justify-evenly items-center space-y-[10px]">
          <div className="border-[5px] border-solid border-[#98BEC8] w-[500px] h-[400px] rounded-[50px] flex flex-col justify-center items-center">
            <img src={images.WebImage7} alt="7" className="h-[300px]" />
          </div>
          <div className="flex justify-center items-center space-x-[50px]">
            <Link
              to="/createarticle"
              className="text-[#427d9d] border-[1px] border-solid border-[#98BEC8] rounded-[20px] w-[250px] h-[100px] flex justify-center items-center"
            >
              記事作成
            </Link>
            <Link
              to="/openarticles"
              className="text-[#fff] bg-[#98BEC8] rounded-[20px] w-[250px] h-[100px] flex justify-center items-center"
            >
              公開記事一覧
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center space-y-[10px]">
          <div className="border-[5px] border-solid border-[#98BEC8] w-[500px] h-[400px] rounded-[50px] flex flex-col justify-center items-center">
            <img src={images.WebImage6} alt="6" className="h-[300px]" />
          </div>
          <div className="flex justify-center items-center space-x-[50px]">
            <Link
              to="/uniregistermovie"
              className="text-[#427d9d] border-[1px] border-solid border-[#98BEC8] rounded-[20px] w-[250px] h-[100px] flex justify-center items-center"
            >
              動画作成
            </Link>
            <Link
              to="/unipostedmovielist"
              className="text-[#fff] bg-[#98BEC8] rounded-[20px] w-[250px] h-[100px] flex justify-center items-center"
            >
              公開動画一覧
            </Link>
          </div>
        </div>
      </div>
      <div className="font-bold text-[36px] flex justify-center items-center w-full space-x-[20px]">
        <Link
          to="/applicationlist"
          className=" flex justify-center items-center w-[500px] h-[100px] text-[#427d9d] rounded-[20px] border-[1px] border-solid border-[#98BEC8]"
        >
          ノートとコメントを確認する
        </Link>
      </div>
    </div>
  )
}

export default UniHomePage
