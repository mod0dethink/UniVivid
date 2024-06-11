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

import UserHome from './userComponents/UserHome'
import './assets/scripts/animation'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TransitionalScreen />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/createschoolaccount" element={<CreateSchoolAccount />} />
        <Route path="/category" element={<CategoryComponent />} />
        <Route path="/welcome" element={<WelcomeComponent />} />
        <Route path="/entitiyselection" element={<EntitySelection />} />

        <Route path="/userhome" element={<UserHome />} />
        <Route path="/universityhome" element={<UniversityHome />} />

        <Route path="/usersettingpsage" element={<UserSettingsPage />} />
        <Route
          path="/universitysettingspage"
          element={<UniversitySettingsPage />}
        />
      </Routes>
    </Router>
  )
}

export default App
