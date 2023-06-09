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
import EmployeeLayout from './employee/employeeLayout'
import Account from './employee/pages/Account'
import EmployeeLogin from './public/pages/EmployeeLogin'
import Stat from './public/pages/Stat'
import { ErrorBoundary } from 'react-error-boundary'
const App = () => {
  return <ErrorBoundary fallbackRender={e => <h1>Kuch toh gadbad hai</h1>}>
    < BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Stat />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="employee-login" element={<EmployeeLogin />} />
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
        <Route path='/employee' element={<EmployeeLayout />}>
          <Route index element={<Account />} />
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

  </ErrorBoundary>
}

export default App