import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
//component
import HeaderLogo from '../../components/layout/layouts'
import UniSidebar from '../../components/common/UniSidebar'
import FormButton from '../../components/common/formBotton'
import images from '../../assets/images'
import ADetail from '../../components/common/ADetail'
const EditOneLecture = () => {
  const location = useLocation()
  const navigate = useNavigate()
  //const { formData } = location.state || {} // 前のページから渡されたデータを取得
  const [formData, setFormData] = useState({
    lecturename: '',
    teacher: '',
    date: '',
    applyurl: '',
    genre: '',
    themecolor: 'black',
    upNote: null,
    otherText: '',
  })

  const onSubmit = (e) => {
    e.preventDefault()
    navigate('/openarticles')
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <UniSidebar />
      <HeaderLogo />
      <div>
        <p className="">{formData.date}</p>
        <ADetail
          title={formData.lecturename}
          imageUrl={formData.userImg}
          uicon={images.user_icon}
          username={formData.upNote}
          good={''}
          themecolor={formData.themecolor}
          date={formData.date}
        />
      </div>
      <div className="font-bold flex space-x-[50px] mt-[600px]">
        <div className="flex space-x-[10px]">
          <p
            className=" text-[16px] text-white px-10 h-[25px]"
            style={{ backgroundColor: formData.themecolor }}
          >
            講義
          </p>
          <p>{formData.lecturename}</p>
        </div>
        <div className="flex space-x-[10px]">
          <p
            className="text-[16px] text-white px-10 h-[25px]"
            style={{ backgroundColor: formData.themecolor }}
          >
            講師
          </p>
          <p>{formData.teacher}</p>
        </div>
        <div className="flex space-x-[10px]">
          <p
            className="text-[16px] text-white px-10 h-[25px]"
            style={{ backgroundColor: formData.themecolor }}
          >
            講義内容
          </p>
          <p>{formData.otherText}</p>
        </div>
      </div>
      <div className="pt-[100px] flex text-[30px] text-white font-bold space-x-[100px]">
        <Link
          to="/lectureedite"
          className="flex justify-center items-center bg-[#4c4c4c] w-[330px] h-[60px] rounded-[5px] space-x-[10px]"
        >
          <p>記事を編集する</p>
          <img src={images.Edite} alt="Edite" className="h-[50px]" />
        </Link>
        <button className="flex justify-center items-center bg-[#760000] w-[330px] h-[60px] rounded-[5px] space-x-[10px]">
          <p>記事を削除する</p>
          <img src={images.Delete} alt="Delete" className="h-[50px]" />
        </button>
      </div>
    </div>
  )
}

export default EditOneLecture
