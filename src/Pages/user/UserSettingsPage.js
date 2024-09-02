//インポート
import React, { useState } from 'react'
import axios from 'axios'
//component
import { InputField, ProfileImageEditor, SaveBtn } from '../../components/MaterialComponent.js'
import { UnivividHeader } from '../../components/LayoutComponent.js'
//assets
import Imagepng from '../../assets/images/IMG_4007.jpg'
import '../../assets/styles/Dimensions.css'
import '../../assets/styles/bg-images.css'

/*------ユーザーのデータ変数------*/
let ProImg = Imagepng //プロフィール画像

//セッティングページ
function UserSettingsPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.put(
        'http://localhost:8080/auth/profile',
        {
          type: 'user',
          mailaddress: email,
          username: username,
          password: password,
        },
        { withCredentials: true },
      )
      alert(response.data.message)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error)
      } else {
        alert('エラーが発生しました。')
      }
    }
  }

  return (
    <section>
    <UnivividHeader
      title="ユーザー設定"
      returnCol={1}
      link="/userhome"
      bgCol={true}
    />
    <form
      className="items-center flex flex-col justify-around text-center h-screen"
      onSubmit={handleSubmit}
    >
      {/*変更可能なプロフィール画像*/}
      <ProfileImageEditor Pimage={ProImg} />
      {/*セッティングフォーム*/}
      <div className="w-[60vw] , text-left text-[#427D9D] space-y-5 max-w-[800px]">
        <InputField
          label="ユーザー名"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          label="メールアドレス"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="パスワード"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/*submitボタン*/}
      <SaveBtn />
    </form>
    </section>
  )
}

export default UserSettingsPage