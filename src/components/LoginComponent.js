<<<<<<< HEAD
import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/UnivividStyle.css';
import { Unifooter, EmptyHeader } from '../components/LayoutComponent';
=======
import React from 'react'
import '../assets/styles/UnivividStyle.css'
import {
  Unifooter,
  EmptyHeader,
  UnivividHeader,
} from '../components/LayoutComponent'

import { LoginForm } from './GateMaterial'
>>>>>>> feature/onodera

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [accountType, setAccountType] = useState('user'); // デフォルトを 'user' に設定

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        type: accountType, // select の値に基づいて設定
        mailaddress: email,
        password: password,
      }, { withCredentials: true }); // withCredentials を追加
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <UnivividHeader title="ログイン" />

<<<<<<< HEAD
      <section className="from-background">
        <div className="from-nav">
          <form>
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

            <div>
              <p>アカウントタイプ</p>
              <select
                name="accountType"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value="university">学校</option>
                <option value="user">一般ユーザー</option>
              </select>
            </div>

            <div>
              <button type="button" onClick={handleLogin}>ログイン</button>
            </div>
          </form>
        </div>
      </section>
=======
      <LoginForm />
>>>>>>> feature/onodera

      <Unifooter />
    </div>
  )
}

export default LoginComponent
