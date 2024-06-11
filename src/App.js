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
      </Routes>
    </Router>
  )
}

export default App
