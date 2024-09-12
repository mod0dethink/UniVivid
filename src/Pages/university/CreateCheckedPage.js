//インポート
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

//component
import HeaderLogo from '../../components/layout/layouts'
import UniSidebar from '../../components/common/UniSidebar'
import FormButton from '../../components/common/formBotton'
import images from '../../assets/images'
import ADetail from '../../components/common/ADetail'

// 作成した記事の確認画面
function CreateCheckedPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { formData } = location.state || {} // 前のページから渡されたデータを取得

  console.log(formData)

  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:8080/api/create-seminar', {
        method: 'POST',
        credentials: 'include', // クッキー
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const text = await response.text()
      console.log('デバッグ用、レスポンス:', text)

      let data
      try {
        data = JSON.parse(text)
      } catch (error) {
        console.error('JSONのエラー:', error)
        throw new Error('JSON応答が無効')
      }

      if (!response.ok) {
        throw new Error(`サーバーエラー: ${data.error || '知らんけどエラー'}`)
      }

      console.log('登録が成功しました:', data)
      setSuccess(true)
      setError(null)
      navigate('/category')
    } catch (error) {
      console.error('登録が失敗しました:', error)
      setError(error.message)
      setSuccess(false)
    }

    navigate('/openarticles')
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <UniSidebar />
      <HeaderLogo />
      <div>
        <p className="">{formData.start_date}</p>
        <ADetail
          title={formData.seminar_name}
          imageUrl={formData.thumbnail}
          uicon={images.user_icon}
          username={formData.upNote}
          good={''}
          themecolor={formData.themecolor}
          date={formData.start_date}
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
          <p>{formData.seminar_name}</p>
        </div>
        <div className="flex space-x-[10px]">
          <p
            className="text-[16px] text-white px-10 h-[25px]"
            style={{ backgroundColor: formData.themecolor }}
          >
            講師
          </p>
          <p>{formData.prof_name}</p>
        </div>
        <div className="flex space-x-[10px]">
          <p
            className="text-[16px] text-white px-10 h-[25px]"
            style={{ backgroundColor: formData.themecolor }}
          >
            講義内容
          </p>
          <p>{formData.content}</p>
        </div>
      </div>
      <div className="pt-[100px]">
        <FormButton text="確認する" onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default CreateCheckedPage
