//libraryのインポート

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { UsernameProvider } from './Contexts/UsernameContext'

// Componentのインポート
import TransitionalScreen from './components/TransitionalScreen' // 開発者用Component
import CategoryComponent from './components/CategoryComponent'
import {
  FirstWelcomPage,
  LoginPage,
  EntitySelectionPage,
  RegisterPage,
  UniRegisterPage,
  RegisterWelcomPage,
  LoginWelcomPage,
} from './Pages/AccountPage'
import {
  UserHomePage,
  UserSettingsPage,
  UserArticleList,
  UserMyPage,
  ArticleHistoryPage,
  UpNoteListPage,
  FavoriteListPage,
  OneLecturePage,
  UnivercityPage,
  OtherUserPage,
  OtherUserNotePage,
} from './Pages/UserHomePage'
import {
  UniHomePage,
  UniSettingsPage,
  CreateArticlePage,
  CreateCheckedPage,
  ApplicationListPage,
  ApprovalScreenPage,
  OpenArtucles,
  EditOneLecture,
  EditDetails,
} from './Pages/UniHomePage'

const App = () => {
  return (
    <UsernameProvider>
      <Router>
        <Routes>
          {/* 最初に呼び出される画面 */}
          <Route path="/" element={<FirstWelcomPage />} />
          {/* ログイン・新規登録の画面 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/entityselection" element={<EntitySelectionPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/uniRegister" element={<UniRegisterPage />} />
          <Route path="/registerwelcom" element={<RegisterWelcomPage />} />
          <Route path="/loginwelcom" element={<LoginWelcomPage />} />
          <Route path="/category" element={<CategoryComponent />} /> 
          {/*User*/}
          <Route path="/userhome" element={<UserHomePage />} />
          <Route path="/usersetting" element={<UserSettingsPage />} />
          <Route path="/userarticlelist" element={<UserArticleList />} />
          <Route path="/usermypage" element={<UserMyPage />} />
          <Route path="/articlehistory" element={<ArticleHistoryPage />} />
          <Route path="/upnotelist" element={<UpNoteListPage />} />
          <Route path="/favoritelist" element={<FavoriteListPage />} />
          <Route path="/onelecturepage" element={<OneLecturePage />} />
          <Route path="/univercitypage" element={<UnivercityPage />} /> 
          <Route path="/otheruser" element={<OtherUserPage />}/>
          <Route path="/otherusernote" element={<OtherUserNotePage />} />
          {/*Uni*/}
          <Route path="/unihome" element={<UniHomePage />} />
          <Route path="/unisetting" element={<UniSettingsPage />} />
          <Route path="/createarticle" element={<CreateArticlePage />} />
          <Route path="/createarticle" element={<CreateArticlePage />} />
          <Route path="/createchecked" element={<CreateCheckedPage />} />
          <Route path="/applicationlist" element={<ApplicationListPage />} />
          <Route path="/approvalscreen" element={<ApprovalScreenPage />} />
          <Route path="/openarticles" element={<OpenArtucles />} />
          <Route path="/editonelecture" element={<EditOneLecture />} />
          <Route path="/editdetailes" element={<EditDetails />} />
        </Routes>
      </Router>
    </UsernameProvider>
  )
}

export default App