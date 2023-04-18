import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PublicLayout from './public/PublicLayout'
import Home from './public/pages/Home'
const App = () => {
  return <>
    < BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </ BrowserRouter>

  </>
}

export default App