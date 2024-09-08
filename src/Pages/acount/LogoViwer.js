import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import images from '../../assets/images'
import { UsernameContext } from '../../Contexts/UsernameContext.js'

const LogoViwer1 = () => {
  const { registerPath } = useContext(UsernameContext)
  let path = ''
  if (registerPath) {
    path = '/unihome'
  } else {
    path = '/userhome'
  }

  const navigate = useNavigate()

  useEffect(() => {
    // タイマーを設定して指定した時間にページを遷移する
    const timer = setTimeout(() => {
      navigate(path) // 遷移先のパス
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate, path])

  return (
    <div className="bg-[#427D9D] w-[100vw] h-screen flex flex-col justify-center items-center">
      <img src={images.big_logo} alt="BigLogo" width="500px" />
    </div>
  )
}

const LogoViwer2 = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // タイマーを設定して指定した時間（例: 3秒後）にページを遷移する
    const timer = setTimeout(() => {
      navigate('/userHome') // 遷移先のパスを指定
    }, 3000) // 3000ミリ秒 = 3秒

    // クリーンアップ関数を返して、コンポーネントがアンマウントされる際にタイマーをクリア
    return () => clearTimeout(timer)
  }, [navigate])
  return (
    <div className="bg-[#172C37] w-[100vw] h-screen flex flex-col justify-center items-center">
      <img src={images.big_logo} alt="BigLogo" width="500px" />
    </div>
  )
}

export { LogoViwer1, LogoViwer2 }
