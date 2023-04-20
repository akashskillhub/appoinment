import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PublicLayout from './public/PublicLayout'
import Home from './public/pages/Home'
import Login from './public/pages/Login'
import Register from './public/pages/Register'
import Appointment from './public/pages/Appointment'
const App = () => {
  return <>
    < BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="appointment" element={<Appointment />} />
        </Route>
      </Routes>
    </ BrowserRouter>

  </>
}

export default App