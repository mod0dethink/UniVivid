//インポート
import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/Dimensions.css'
import uimg from '../../assets/images/ecc_logo.jpg' // 講義詳細で使用する例の画像

//講義詳細
function LectureDetails() {
  const lecUimg = uimg
  const uname = 'ecc_comp' // 大学ユーザ名
  const lname = 'IoT講座' // 講義名
  const teachname = '村上 慧' // 講師名
  const detail = 'ArduinoでRaspberry Piを用い、IoTに触れる。' // 内容

  return (
    <>
      <Link to="/univercitypage">
        <button
          type="submit"
          name="uni_account"
          className="flex size-12 rounded-full my-2"
        >
          <img
            src={lecUimg}
            alt="img"
            name="uimg"
            className="h-full w-auto rounded-full"
          />
          <p className="my-auto ml-3">{uname}</p>
        </button>
      </Link>
      <div className="font-bold">
        <div name="lname" className="flex my-2">
          <div className=" bg-main text-white text-center px-3">講義</div>
          <p className="my-auto ml-3">{lname}</p>
        </div>
        <div name="teachname" className="flex my-2">
          <div className=" bg-main text-white text-center px-3">講師</div>
          <p className="my-auto ml-3">{teachname}</p>
        </div>
        <div name="detail" className="flex my-2">
          <div className=" bg-main text-white text-center px-3">内容</div>
          <p className="my-auto ml-3">{detail}</p>
        </div>
      </div>
    </>
  )
}

export default LectureDetails