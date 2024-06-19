//libraryのインポート
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Componentのインポート
import TransitionalScreen from './components/TransitionalScreen' // 開発者用Component
import LoginComponent from './components/LoginComponent'
import CreateAccount from './components/CreateAccount'
import { CreateSchoolAccount } from './components/CreateAccount'
import CategoryComponent from './components/CategoryComponent'
import WelcomeComponent from './components/WelcomeComponent'
import EntitySelection from './components/EntitySelection'
import UniversityHome from './universityComponents/UniversityHome'
import UniversitySettingsPage from './universityComponents/UniversitySettingsPage'
import UserSettingsPage from './userComponents/UserSettingsPage'
import ArticlePage from './userComponents/ArticlePage'
import Article from './userComponents/Article'
import UserHome from './userComponents/UserHome'
import WelcomPage from './Pages/WelcomPage'
import OneLecturePage from './Pages/OneLecturePage'

//assetのインポート
import './assets/scripts/animation'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 確認用URL画面 */}
        <Route path="/" element={<TransitionalScreen />} />

        {/*ログイン*/}
        <Route path="/login" element={<LoginComponent />} />
        {/*Userアカウント新規作成*/}
        <Route path="/createaccount" element={<CreateAccount />} />
        {/*大学用アカウント新規作成*/}
        <Route path="/createschoolaccount" element={<CreateSchoolAccount />} />
        {/*カテゴリー登録*/}
        <Route path="/category" element={<CategoryComponent />} />
        {/*初期画面*/}
        <Route path="/welcome" element={<WelcomeComponent />} />
        {/*アカウント使用団体指定*/}
        <Route path="/entitiyselection" element={<EntitySelection />} />

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

        {/*登録完了画面*/}
        <Route path="/welcompage" element={<WelcomPage/>} />

        {/*講義ごとのページ*/}
        <Route path="/onelecturepage" element={<OneLecturePage/>} />

      </Routes>
    </Router>
  )
}

export default App
