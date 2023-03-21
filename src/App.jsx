
import './App.css'
import TopBar from './component/page/topbar/TopBar'
import SideBar from './component/page/sidebar/SideBar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './component/page/dashboard/Dashboard'
import NoteState from './Context/NoteState'

function App() {
  

  return (
    <div className="app">
      <NoteState>
        <TopBar></TopBar>
        <SideBar></SideBar>
        <Routes>
          <Route path='/' element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </NoteState>
    </div>
  )
}

export default App
