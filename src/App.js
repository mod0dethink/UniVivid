//libraryのインポート

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Componentのインポート
import TransitionalScreen from './components/TransitionalScreen' // 開発者用Component

import UniversityHome from './universityComponents/UniversityHome'
import UniversitySettingsPage from './universityComponents/UniversitySettingsPage'
import ArticlePage from './userComponents/ArticlePage'
import Article from './userComponents/Article'
//import UserHome from './userComponents/UserHome'
//assetのインポート
import './assets/scripts/animation'

import {
  WelcomePage,
  LoginPage,
  EntitySelectionPage,
  RegisterPage,
  UniRegisterPage,
} from './Pages/AccountPage'
import { UserHomePage, UserSettingsPage } from './Pages/UserHomePage'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/entityselection" element={<EntitySelectionPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/uniRegister" element={<UniRegisterPage />} />

        {/* User Home と User Settings のルート */}
        <Route path="/userhome" element={<UserHomePage />} />
        <Route path="/usersetting" element={<UserSettingsPage />} />

        {/* 確認用URL画面 */}
        <Route path="/" element={<TransitionalScreen />} />
        <Route path="/articlepage" element={<ArticlePage />} />
        <Route path="/article" element={<Article />} />

        {/* University Home と University Settings のルート */}
        <Route path="/universityhome" element={<UniversityHome />} />
        <Route
          path="/universitysettingspage"
          element={<UniversitySettingsPage />}
        />
      </Routes>
    </Router>
  )
}

export default App
