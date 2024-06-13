import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ImportImg from '../assets/images/imgImport.png'
import ReturnImg from '../assets/images/return.png'
import { UserSettingValue } from '../components/MaterialComponent'
import '../assets/styles/Dimensions.css'

function UserSettingsPage() {
  const fileInputRef = useRef(null)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      // ファイルの処理（例：サーバーにアップロード）
      console.log('Selected file:', file)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.put('http://localhost:8080/auth/profile', {
        type: 'user', // ここは大学用のコンポーネントでuniversityに変える
        mailaddress: email,
        username: username,
        password: password,
      }, { withCredentials: true }) // withCredentials を追加
      alert(response.data.message)
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  return (
    <div>
      <form className="items-center flex flex-col justify-around text-center h-screen" onSubmit={handleSubmit}>
        <section className="flex justify-between w-[100vw]">
          <Link to="/userhome" className="return-btn">
            <img className="w-[60px]" src={ReturnImg} alt="ReturnImg" />
          </Link>
          <div>
            <p className="text-[#164863] text-[30px] font-bold">ユーザー設定</p>
          </div>
          <div>　　　</div>
        </section>
        <section className="">
          <div className="relative rounded-full bg-[#D9D9D9] w-[160px] h-[160px] flex flex-col items-center justify-center">
            <div className="login-face"></div>
            <div className="py-1.5"></div>
            <div className="login-body "></div>
            <button
              className=""
              onClick={handleButtonClick}
              style={{
                border: 'none',
                background: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            >
              <img
                className="absolute bottom-0 right-0 w-[60px]"
                src={ImportImg} // 適切な画像URLに変更
                alt="Click to upload"
              />
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }} // 完全に非表示にする
              onChange={handleFileChange}
            />
          </div>
        </section>

        <section className="w-[60vw] , text-left text-[#427D9D] space-y-5 max-w-[800px]">
          <div className="space-y-3">
            <p>ユーザー名</p>
            <input
              className="border-b-[2px] border-[#427D9D] w-[100%] text-[2em]"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-3">
            <p>メールアドレス</p>
            <input
              className="border-b-[2px] border-[#427D9D] w-[100%] text-[2em]"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-3">
            <p>パスワード</p>
            <input
              className="border-b-[2px] border-[#427D9D] w-[100%] text-[2em]"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </section>
        
        <section>
          <button
            type="submit"
            className="bg-[#D9D9D9] text-[1.5em] font-bold w-[7em] h-[2em]"
          >
            編集を保存
          </button>
        </section>
      </form>
    </div>
  )
}

export default UserSettingsPage
