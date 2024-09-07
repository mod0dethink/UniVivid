//インポート
import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/Dimensions.css'

//link
function RootUrl(itemData) {
  return (
    <Link
      to={itemData.linkpath}
      className="scale-content flex flex-col justify-center space-y-20 w-auto text-center items-center my-20 "
    >
      <div className="doorUrl-effect FAup flex justify-around items-center bg-[#D9D9D9] w-[80%] h-[196px] max-w-[700px] rounded-[20px] border-solid border-[#9BBEC8] border-[5px]">
        <p className="  text-[#164863] text-[36px] font-bold">
          {itemData.text}
        </p>
        <img className=" w-[150px] -z-[-1]" src={itemData.name} alt="door" />
      </div>
    </Link>
  )
}

export default RootUrl