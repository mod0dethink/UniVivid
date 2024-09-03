import { BrowserRouter as Router } from 'react-router-dom'

import './components/layout/layouts.js'

import './index.css'
import './assets/styles/layouts.css'

//ルーディングの読み込み
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <Router>
      <div>
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
