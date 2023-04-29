import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeNavbar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link to="/employee" className="navbar-brand" >Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/employee" className="nav-link active">Account</Link>
                        <Link to="/employee/settings" className="nav-link" >Settings</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default EmployeeNavbar