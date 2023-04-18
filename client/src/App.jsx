import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PublicLayout from './public/PublicLayout'
import Home from './public/pages/Home'
import Login from './public/pages/Login'
const App = () => {
  return <>
    < BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </ BrowserRouter>

  </>
}

export default App