// インポート
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../../assets/styles/Dimensions.css'

// 講義詳細
function LectureDetails({
  universityImage,
  universityName,
  lectureName,
  teacherName,
  details,
}) {
  return (
    <>
      <Link to="/univercitypage">
        <button
          type="submit"
          name="uni_account"
          className="flex size-12 rounded-full my-2"
        >
          <img
            src={universityImage}
            alt="img"
            name="uimg"
            className="h-full w-auto rounded-full"
          />
          <p className="my-auto ml-3">{universityName}</p>
        </button>
      </Link>
      <div className="font-bold">
        <div name="lname" className="flex my-2">
          <div className=" bg-main text-white text-center px-3">講義</div>
          <p className="my-auto ml-3">{lectureName}</p>
        </div>
        <div name="teachname" className="flex my-2">
          <div className=" bg-main text-white text-center px-3">講師</div>
          <p className="my-auto ml-3">{teacherName}</p>
        </div>
        <div name="detail" className="flex my-2">
          <div className=" bg-main text-white text-center px-3">内容</div>
          <p className="my-auto ml-3">{details}</p>
        </div>
      </div>
    </>
  )
}

// PropTypesによるプロップスの型定義
LectureDetails.propTypes = {
  universityImage: PropTypes.string,
  universityName: PropTypes.string.isRequired,
  lectureName: PropTypes.string.isRequired,
  teacherName: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
}

export default LectureDetails
