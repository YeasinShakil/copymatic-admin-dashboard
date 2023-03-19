import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './component/page/topbar/TopBar'
import SideBar from './component/page/sidebar/SideBar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './component/page/dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <TopBar></TopBar>
      <SideBar></SideBar>
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  )
}

export default App
