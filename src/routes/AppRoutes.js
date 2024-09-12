// インポート
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { UsernameProvider } from '../Contexts/UsernameContext'

//テストcomponent
import Test from '../test/Test'
// ページコンポーネント
import FirstWelcomPage from '../Pages/acount/FirstWelcomPage'
import LoginPage from '../Pages/acount/LoginPage'
import EntitySelectionPage from '../Pages/acount/EntitySelectionPage'
import RegisterPage from '../Pages/acount/RegisterPage'
import UniRegisterPage from '../Pages/acount/UniRegisterPage'
import RegisterWelcomPage from '../Pages/acount/RegisterWelcomPage'
import LoginWelcomPage from '../Pages/acount/LoginWelcomPage'
import UserChoiceCategory from '../Pages/acount/UserChoiceCategory'
import { LogoViwer1, LogoViwer2 } from '../Pages/acount/LogoViwer'

import UniHomePage from '../Pages/university/UniHomePage'
import UniSettingsPage from '../Pages/university/UniSettingsPage'
import CreateArticlePage from '../Pages/university/CreateArticlePage'
import CreateCheckedPage from '../Pages/university/CreateCheckedPage'
import ApplicationListPage from '../Pages/university/ApplicationListPage'
import OpenArtucles from '../Pages/university/OpenArtucles'
import EditOneLecture from '../Pages/university/EditOneLecture'
import UMovieDetail from '../Pages/user/UMovieDetail'
import UMovieList from '../Pages/user/UmovieList'
import URegisterNote from '../Pages/user/URegisterNote'

import UserHomePage from '../Pages/user/UserHomePage'
import UserSettingsPage from '../Pages/user/UserSettingsPage'
import UserArticleList from '../Pages/user/UserArticleList'
import UserMyPage from '../Pages/user/UserMyPage'
import ArticleHistoryPage from '../Pages/user/ArticleHistoryPage'
import UpNoteListPage from '../Pages/user/UpNoteListPage'
import FavoriteListPage from '../Pages/user/FavoriteListPage'
import UniRegisterMovie from '../Pages/university/UniRegisterMovie'
import UniConfirmMovie from '../Pages/university/UniConfirmMovie'
import UniPostedMovieList from '../Pages/university/UniPostedMovieList'
import AppNote from '../Pages/university/AppNote'
import AppCommnet from '../Pages/university/AppComment'
import LectureEdite from '../Pages/university/LectureEdite'

// アニメーション設定
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5, // フェードインに遅延を追加
    },
  },
  out: {
    opacity: 0,
  },
}

const pageTransition = {
  duration: 0.5,
}

const AppRoutes = () => {
  const location = useLocation()

  return (
    <UsernameProvider>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          {/*テストパス*/}
          <Route
            path="/test"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Test />
              </motion.div>
            }
          />
          {/* 最初に呼び出される画面 */}
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <FirstWelcomPage />
              </motion.div>
            }
          />
          {/* ログイン・新規登録の画面 */}
          <Route
            path="/login"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <LoginPage />
              </motion.div>
            }
          />
          <Route
            path="/entityselection"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <EntitySelectionPage />
              </motion.div>
            }
          />
          <Route
            path="/register"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <RegisterPage />
              </motion.div>
            }
          />
          <Route
            path="/uniRegister"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <UniRegisterPage />
              </motion.div>
            }
          />
          <Route
            path="/registerwelcom"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <RegisterWelcomPage />
              </motion.div>
            }
          />
          <Route
            path="/loginwelcom"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <LoginWelcomPage />
              </motion.div>
            }
          />
          <Route
            path="/category"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <UserChoiceCategory />
              </motion.div>
            }
          />
          <Route
            path="/LogoViwer1"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <LogoViwer1 />
              </motion.div>
            }
          />
          <Route
            path="/LogoViwer2"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <LogoViwer2 />
              </motion.div>
            }
          />
          {/*User*/}
          <Route
            path="/userhome"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <UserHomePage />
              </motion.div>
            }
          />
          <Route
            path="/usersetting"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <UserSettingsPage />
              </motion.div>
            }
          />
          <Route
            path="/userarticlelist"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <UserArticleList />
              </motion.div>
            }
          />
          <Route
            path="/usermypage"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <UserMyPage />
              </motion.div>
            }
          />
          <Route
            path="/articlehistory"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ArticleHistoryPage />
              </motion.div>
            }
          />
          <Route
            path="/upnotelist"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <UpNoteListPage />
              </motion.div>
            }
          />
          <Route
            path="/favoritelist"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <FavoriteListPage />
              </motion.div>
            }
          />
          <Route
            path="/umovielist"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <UMovieList />
              </motion.div>
            }
          />
          <Route
            path="/umoviedetail"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <UMovieDetail />
              </motion.div>
            }
          />
          <Route
            path="/uregisternote"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <URegisterNote />
              </motion.div>
            }
          />
          {/*Uni*/}
          <Route
            path="/unihome"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <UniHomePage />
              </motion.div>
            }
          />
          <Route
            path="/unisetting"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <UniSettingsPage />
              </motion.div>
            }
          />
          <Route
            path="/createarticle"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <CreateArticlePage />
              </motion.div>
            }
          />
          <Route
            path="/createchecked"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <CreateCheckedPage />
              </motion.div>
            }
          />
          <Route
            path="/applicationlist"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ApplicationListPage />
              </motion.div>
            }
          />
          <Route
            path="/openarticles"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <OpenArtucles />
              </motion.div>
            }
          />
          <Route
            path="/editonelecture"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <EditOneLecture />
              </motion.div>
            }
          />
          <Route
            path="/uniregistermovie"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <UniRegisterMovie />
              </motion.div>
            }
          />
          <Route
            path="/uniconfirmmovie"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <UniConfirmMovie />
              </motion.div>
            }
          />
          <Route
            path="/unipostedmovielist"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <UniPostedMovieList />
              </motion.div>
            }
          />
          <Route
            path="/appnote"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <AppNote />
              </motion.div>
            }
          />
          <Route
            path="/appcomment"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <AppCommnet />
              </motion.div>
            }
          />
          <Route
            path="/lectureedite"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <LectureEdite />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </UsernameProvider>
  )
}

export default AppRoutes
