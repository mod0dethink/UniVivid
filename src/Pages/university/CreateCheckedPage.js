//インポート
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
//component
import HeaderLogo from '../../components/layout/layouts'
import UniSidebar from '../../components/common/UniSidebar'
import FormButton from '../../components/common/formBotton'
import images from '../../assets/images'
import MovieDetail from '../../components/common/MovieDetail'
import ADetail from '../../components/common/ADetail'

// 作成した記事の確認画面
function CreateCheckedPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { formData } = location.state || {} // 前のページから渡されたデータを取得

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
      <div className="pt-[100px]">
        <FormButton text="確認する" onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default CreateCheckedPage
