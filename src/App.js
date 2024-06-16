//libraryのインポート

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Componentのインポート
import TransitionalScreen from './components/TransitionalScreen' // 開発者用Component

import {
  WelcomePage,
  LoginPage,
  EntitySelectionPage,
  RegisterPage,
  UniRegisterPage,
} from './Pages/AccountPage'
import {
  UserHomePage,
  UserSettingsPage,
  UserArticleList,
  UserMyPage,
} from './Pages/UserHomePage'
import { UniHomePage, UniSettingsPage } from './Pages/UniHomePage'

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
        <Route path="/userarticlelist" element={<UserArticleList />} />
        <Route path="usermypage" element={<UserMyPage />} />

        {/*Uni*/}
        <Route path="/unihome" element={<UniHomePage />} />
        <Route path="/unisetting" element={<UniSettingsPage />} />

        {/* 確認用URL画面 */}
        <Route path="/" element={<TransitionalScreen />} />
      </Routes>
    </Router>
  )
}

export default App
