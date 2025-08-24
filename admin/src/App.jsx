import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Route, Routes} from 'react-router-dom'
import Orders from './pages/Orders'
import Add from './pages/Add'
import List from './pages/List'
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  const url = import.meta.env.VITE_BACKEND_URL;

  return (
    <div >
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url}/>} />
          <Route path="/orders" element={<Orders url={url}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App