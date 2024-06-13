//libraryのインポート
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
//アセットのインポート
import '../assets/styles/UnivividStyle.css'
import '../assets/styles/Dimensions.css'
import '../assets/styles/Animations.css'

import PenImg from '../assets/images/pen.png'
import TeacherImg from '../assets/images/teacher.png'

//componentのインポート
import {
  UnivividHeader,
  Unifooter,
  Logotext,
} from '../components/LayoutComponent'
import {
  LoginForm,
  CreateAccountForm,
  CreateUniAccountForm,
} from '../components/RegisterMaterial'

function WelcomePage() {
  return (
    <div className="h-screen flex flex-col justify-between">
      {/*header*/}
      <section>
        <UnivividHeader title={<Logotext />} />
      </section>

      {/*main*/}
      <section className="flex flex-col items-center justify-center sw-screen h-full">
        <div className="h-1/5 text-3xl">
          <p className="font-black">ようこそ、UniVividへ！</p>
        </div>
        {/*ログイン画面へ*/}
        <Link
          to="/login"
          className="link-btn flex flex-col items-center w-full py-10"
        >
          <div className="inner-text">
            <p className="font-black ">Login</p>
          </div>

          <div className="w-1/2 justify-end flex">
            <div className="black-circle"></div>
            <div className="black-border"></div>
            <div className="triangle-right"></div>
          </div>
        </Link>

        {/*アカウント作成画面へ*/}
        <Link
          to="/entityselection"
          className="link-btn flex flex-col items-center w-full py-10"
        >
          <div className="font-black inner-text">NewAccount</div>
          <div className="w-1/2 justify-end flex">
            <div className="triangle-left"></div>
            <div className="black-border"></div>
            <div className="black-circle"></div>
          </div>
        </Link>
      </section>

      {/*footer*/}
      <section className="">
        <Unifooter />
      </section>
    </div>
  )
}

function LoginPage() {
  //瀬那さんの変更
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [accountType, setAccountType] = useState('user') // デフォルトを 'user' に設定

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/auth/login',
        {
          type: accountType, // select の値に基づいて設定
          mailaddress: email,
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
    <div className="h-screen flex flex-col justify-between">
      <UnivividHeader title="ログイン" />
      <LoginForm />
      <Unifooter />
    </div>
  )
}

function EntitySelectionPage() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <section>
        <UnivividHeader title={<Logotext />} />
      </section>
      <section className="flex flex-col items-center justify-center sw-screen h-full bg-[#FFFEF8]">
        <div>
          <p>使用目的はどちらですか？</p>
        </div>
        <div className="flex">
          <Link
            to="/register"
            className="flex-1 w-1/3 min-w-[150px] w-[25vw] max-w-[500px]"
          >
            <div className="bg-scale-hover border border-solid border-[#164863] rounded-[50%]">
              <img src={PenImg} alt="pen" />
            </div>
            <p className="text-center font-bold">個人として使用</p>
          </Link>
          <div className="px-[5vw]"></div>
          <Link
            to="/uniregister"
            className="flex-1 w-1/3 min-w-[150px] w-[25vw] max-w-[500px]"
          >
            <div className="bg-scale-hover border border-solid border-[#164863] rounded-[50%]">
              <img src={TeacherImg} alt="teacher" />
            </div>
            <p className="text-center font-bold">学校として使用</p>
          </Link>
        </div>
      </section>
      <section>
        <Unifooter />
      </section>
    </div>
  )
}

function RegisterPage() {
  const [formData, setFormData] = useState({
    mailaddress: '',
    password: '',
    username: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:8080/auth/register',
        {
          type: 'user',
          ...formData,
        },
        { withCredentials: true },
      )
      alert(response.data.message)
    } catch (error) {
      alert('ユーザーアカウントの登録に失敗しました')
    }
  }

  return (
    <div className="h-screen flex flex-col justify-between">
      <UnivividHeader title="新規登録" />
      <CreateAccountForm />
      <Unifooter />
    </div>
  )
}

function UniRegisterPage() {
  const [formData, setFormData] = useState({
    mailaddress: '',
    password: '',
    username: '',
    univname: '',
    univurl: '',
    donateurl: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:8080/auth/register',
        {
          type: 'university',
          ...formData,
        },
        { withCredentials: true },
      )
      alert(response.data.message)
    } catch (error) {
      alert('大学アカウントの登録に失敗しました')
    }
  }

  return (
    <div className="from-container">
      <UnivividHeader title="新規登録" />

      <CreateUniAccountForm />

      <Unifooter />
    </div>
  )
}

export {
  WelcomePage,
  LoginPage,
  EntitySelectionPage,
  RegisterPage,
  UniRegisterPage,
}
