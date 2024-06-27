//libraryのインポート

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Componentのインポート
import TransitionalScreen from './components/TransitionalScreen' // 開発者用Component
import CategoryComponent from './components/CategoryComponent'
import OneLecturePage from './Pages/OneLecturePage'
import UnivercityPage from './Pages/UnivercityPage'

//assetのインポート
import './assets/scripts/animation'

import {
  FirstWelcomPage,
  LoginPage,
  EntitySelectionPage,
  RegisterPage,
  UniRegisterPage,
  WelcomPage,
} from './Pages/AccountPage'
import {
  UserHomePage,
  UserSettingsPage,
  UserArticleList,
  UserMyPage,
  ArticleHistoryPage,
  UpNoteListPage,
  FavoriteListPage,
} from './Pages/UserHomePage'
import {
  UniHomePage,
  UniSettingsPage,
  CreateArticlePage,
  CreateCheckedPage,
} from './Pages/UniHomePage'

const App = () => {
  return (
    <Router>

      <Routes>
        {/* 確認用URL画面 */}
        {/* <Route path="/" element={<TransitionalScreen />} /> */}

        {/* 最初に呼び出される画面 */}
        <Route path="/" element={<FirstWelcomPage />}/>
        {/* ログイン・新規登録の画面 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/entityselection" element={<EntitySelectionPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/uniRegister" element={<UniRegisterPage />} />
        <Route path="/welcom" element={<WelcomPage />} />

        {/* User Home と User Settings のルート */}
        <Route path="/userhome" element={<UserHomePage />} />
        <Route path="/usersetting" element={<UserSettingsPage />} />
        <Route path="/userarticlelist" element={<UserArticleList />} />
        <Route path="/usermypage" element={<UserMyPage />} />
        <Route path="/articlehistory" element={<ArticleHistoryPage />} />
        <Route path="/upnotelist" element={<UpNoteListPage />} />
        <Route path="/favoritelist" element={<FavoriteListPage />} />

        {/*Uni*/}
        <Route path="/unihome" element={<UniHomePage />} />
        <Route path="/unisetting" element={<UniSettingsPage />} />
        <Route path="/createarticle" element={<CreateArticlePage />} />
        
        {/*カテゴリー登録*/}
        <Route path="/category" element={<CategoryComponent />} />
        <Route path="/createchecked" element={<CreateCheckedPage />} />


        {/*登録完了画面*/}
        <Route path="/welcompage" element={<WelcomPage/>} />

        {/*講義ごとのページ*/}
        <Route path="/onelecturepage" element={<OneLecturePage/>} />

        <Route path="/univercitypage" element={<UnivercityPage/>} />

      </Routes>
    </Router>
  )
}

export default App
