// ログイン・登録のコンポネント

import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UsernameContext } from '../Contexts/UsernameContext'
import '../assets/styles/UnivividStyle.css'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          MailAddress: email,
          Password: password,
          Type: 'user', // または 'university'
        }),
        credentials: 'include',
      })

      if (response.ok) {
        navigate('/userhome')
      } else {
        const data = await response.json()
        setError(data.error || 'ログインに失敗しました')
      }
    } catch (error) {
      setError('ネットワークエラーが発生しました')
    }
  }

  return (
    <section className="pt-[8%] bg-main-bg flex justify-center">
      <div className="from-nav">
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 absolute -mt-10">{error}</p>}
          <div  name="input-area">
            <div>
              <p>メールアドレス</p>
              <input
                id='input-area'
                type="email"
                name="email"
                placeholder="aaa"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <p>パスワード</p>
              <input
                id='input-area'
                type="password"
                name="password"
                placeholder="123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {/* <div className="flex items-center mb-4">
            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label htmlFor='default-radio-1' className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
          </div> */}
          <div className=' flex justify-start mt-5 space-x-2 ml-12'>
            <label>
              <input type='radio' name='selectUser' value='個人' />
              個人
            </label>
            <label>
              <input type='radio' name='selectUser' value='大学' />
              大学
            </label>
          </div>
          {/* <Link to = '/loginwelcom'> */}
          <button type="submit">ログイン</button>
          {/* </Link> */}
        </form>
      </div>
    </section>
  )
}

//いったんカテゴリー登録を飛ばして、アカウント作成が完了したらログインにリダイレクトするようにしてる
function CreateAccountForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')

  const { setUsername: conUsername } = useContext(UsernameContext) // setUsername を conUsername にリネーム
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          MailAddress: email,
          Password: password,
          Username: username,
          Type: 'user',
        }),
      })

      if (response.ok) {
        navigate('/welcompage')
        conUsername(username)
      } else {
        const data = await response.json()
        setError(data.error || 'アカウント作成に失敗しました')
      }
    } catch (error) {
      setError('ネットワークエラーが発生しました')
    }
  }

  return (
    <section className=" pt-[5%] bg-main-bg flex justify-center">
      <div className="from-nav">
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <p>メールアドレス</p>
            <input
              type="email"
              name="email"
              placeholder="aaa"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p>パスワード</p>
            <input
              type="password"
              name="password"
              placeholder="123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <p>ユーザ名</p>
            <input
              type="text"
              name="username"
              placeholder="abcd"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <Link to='/category'>
            <button type="submit">登録</button>
          </Link>
        </form>
      </div>
    </section>
  )
}
// アカウント作成のフォーム
function CreateUniAccountForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [univName, setUnivName] = useState('')
  const [infoName, setInfoName] = useState('')
  const [univURL, setUnivURL] = useState('')
  const [donateURL, setDonateURL] = useState('')
  const [error, setError] = useState('')

  const { setUsername: conUsername } = useContext(UsernameContext) // setUsername を conUsername にリネーム

  const navigate = useNavigate()

  // 入力確認のメソッド
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          MailAddress: email,
          Password: password,
          UnivName: univName,
          InfoName: infoName,
          UnivURL: univURL,
          DonateURL: donateURL,
          Type: 'university',
        }),
      })

      if (response.ok) {
        navigate('/registerwelcom')
        conUsername(univName)
      } else {
        const data = await response.json()
        setError(data.error || 'アカウント作成に失敗しました')
      }
    } catch (error) {
      setError('ネットワークエラーが発生しました')
    }
  }

  return (
    <section className="from-background">
      <div className="from-nav pb-20">
        <form onSubmit={handleSubmit}>
          <div>
            <p>メールアドレス</p>
            <input
              type="email"
              name="email"
              placeholder="aaa"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p>パスワード</p>
            <input
              type="password"
              name="password"
              placeholder="123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <p>学校名</p>
            <input
              type="text"
              name="univName"
              placeholder="○○大学"
              value={univName}
              onChange={(e) => setUnivName(e.target.value)}
            />
          </div>
          <div>
            <p>情報提供者名</p>
            <input
              type="text"
              name="infoName"
              placeholder="○○課"
              value={infoName}
              onChange={(e) => setInfoName(e.target.value)}
            />
          </div>
          <div>
            <p>大学URL</p>
            <input
              type="text"
              name="univURL"
              placeholder="https://www.example.com"
              value={univURL}
              onChange={(e) => setUnivURL(e.target.value)}
            />
          </div>
          <div>
            <p>寄付ページURL</p>
            <input
              type="text"
              name="donateURL"
              placeholder="https://www.example.com/donate"
              value={donateURL}
              onChange={(e) => setDonateURL(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit">登録</button>
        </form>
      </div>
    </section>
  )
}

export { LoginForm, CreateAccountForm, CreateUniAccountForm }