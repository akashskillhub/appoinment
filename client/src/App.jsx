import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import PublicLayout from './public/PublicLayout'
import Home from './public/pages/Home'
import Login from './public/pages/Login'
import Register from './public/pages/Register'
import Appointment from './public/pages/Appointment'
import Protected from './share/components/Protected'
import AdminLayout from './admin/AdminLayout'
import Dashboard from './admin/pages/Dashboard'
import Bookings from './admin/pages/Bookings'
import Employee from './admin/pages/Employee'
import Settings from './admin/pages/Settings'
import Debounce from './Debounce'
import CustomHooks from './CustomHooks'
const App = () => {
  return <>
    < BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<CustomHooks />} />
          {/* <Route index element={<Home />} /> */}
          {/* <Route index element={<Debounce />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="appointment"
            element={<Protected compo={<Appointment />} />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="employee" element={<Employee />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route
          path='*'
          element={<>
            <h1>Page Not Found</h1>
            <Link to="/">Back Home</Link>
          </>}
        />
      </Routes>
    </ BrowserRouter>

  </>
}

export default App