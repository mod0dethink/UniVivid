//インポート
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { UsernameProvider } from './Contexts/UsernameContext'
//component
import TransitionalScreen from './components/TransitionalScreen' // 開発者用Component
import CategoryComponent from './components/CategoryComponent'
//page
// ログイン・新規作成 --------
import FirstWelcomPage from './Pages/acount/FirstWelcomPage'
import LoginPage from './Pages/acount/LoginPage'
import EntitySelectionPage from './Pages/acount/EntitySelectionPage'
import RegisterPage from './Pages/acount/RegisterPage'
import UniRegisterPage from './Pages/acount/UniRegisterPage'
import RegisterWelcomPage from './Pages/acount/RegisterWelcomPage'
import LoginWelcomPage from './Pages/acount/LoginWelcomPage'
// 大学側のページ ------------
import UniHomePage from './Pages/university/UniHomePage'
import UniSettingsPage from './Pages/university/UniSettingsPage'
import CreateArticlePage from './Pages/university/CreateArticlePage'
import CreateCheckedPage from './Pages/university/CreateCheckedPage'
import ApplicationListPage from './Pages/university/ApplicationListPage'
import ApprovalScreenPage from './Pages/university/ApprovalScreenPage'
import OpenArtucles from './Pages/university/OpenArtucles'
import EditOneLecture from './Pages/university/EditOneLecture'
import EditDetails from './Pages/university/EditDetails'
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