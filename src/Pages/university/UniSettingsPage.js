//インポート
import React, { useState } from 'react'
import { Axios } from 'axios'
//assets
import Imagepng from '../../assets/images/IMG_4007.jpg'
//component
import { UnivividHeader } from '../../components/LayoutComponent'
import { InputField, ProfileImageEditor, SaveBtn } from '../../components/MaterialComponent'
/*------ユーザーのデータ変数------*/
let ProImg = Imagepng //プロフィール画像

//セッティングページ
function UniSettingsPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await Axios.put(
        'http://localhost:8080/auth/profile',
        {
          type: 'user', // ここは大学用のコンポーネントでuniversityに変える
          mailaddress: email,
          username: username,
          password: password,
        },
        { withCredentials: true },
      ) // withCredentials を追加
      alert(response.data.message)
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  return (
    <>
    <UnivividHeader title='ユーザー設定' link='/unihome' returnCol={1} bgCol={true}/>
    <form
      className="items-center flex flex-col"
      onSubmit={handleSubmit}
    >
      {/*変更可能なプロフィール画像*/}
      <div className='mt-20'>
        <ProfileImageEditor Pimage={ProImg}/>
      </div>

      {/*セッティングフォーム*/}
      <div className="w-[60vw] text-left text-[#427D9D] space-y-5 max-w-[800px]">
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
        <InputField label="学校名" type="text" value={null} />
        <InputField label="大学URL" type="text" value={null} />
        <InputField label="寄付用ページURL" type="text" value={null} />
      </div>
      <div className='my-10'>
        <SaveBtn/>
      </div>
    </form>
    </>
  )
}

export default UniSettingsPage