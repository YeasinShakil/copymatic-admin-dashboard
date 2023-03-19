import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './component/page/topbar/TopBar'
import SideBar from './component/page/sidebar/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TopBar></TopBar>
      <SideBar></SideBar>
    </div>
  )
}

export default App
