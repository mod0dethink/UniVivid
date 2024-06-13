//libraryのインポート
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Componentのインポート
import TransitionalScreen from './components/TransitionalScreen' // 開発者用Component
/*
import LoginComponent from './components/LoginComponent'
import CreateAccount from './components/CreateAccount'
import { CreateSchoolAccount } from './components/CreateAccount'
import CategoryComponent from './components/CategoryComponent'
import WelcomeComponent from './components/WelcomeComponent'
import EntitySelection from './components/EntitySelection'
*/
import UniversityHome from './universityComponents/UniversityHome'
import UniversitySettingsPage from './universityComponents/UniversitySettingsPage'
import UserSettingsPage from './userComponents/UserSettingsPage'
import ArticlePage from './userComponents/ArticlePage'
import Article from './userComponents/Article'
import UserHome from './userComponents/UserHome'
//assetのインポート
import './assets/scripts/animation'

import {
  WelcomePage,
  LoginPage,
  EntitySelectionPage,
  RegisterPage,
  UniRegisterPage,
} from './Pages/AccountPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/entityselection" element={<EntitySelectionPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/uniRegister" element={<UniRegisterPage />} />
      </Routes>
      <Routes>
        {/* 確認用URL画面 */}
        <Route path="/" element={<TransitionalScreen />} />
        {/*---ログイン後(User)---*/}
        {/*ホーム画面*/}
        <Route path="/userhome" element={<UserHome />} />
        {/*ユーザー設定*/}
        <Route path="/usersettingpsage" element={<UserSettingsPage />} />
        {/*アーティクルのVuew*/}
        <Route path="/articlepage" element={<ArticlePage />} />
        {/*アーティクルの要素(素材)*/}
        <Route path="/article" element={<Article />} />
        {/*---ログイン後(University)---*/}
        {/*ホーム画面*/}
        <Route path="/universityhome" element={<UniversityHome />} />
        {/*ユーザー設定*/}
        <Route
          path="/universitysettingspage"
          element={<UniversitySettingsPage />}
        />
      </Routes>
    </Router>
  )
}

export default App
