import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navLinks = [
        { label: "home", icon: "house", to: "/" },
        { label: "doctors", icon: "heart-pulse", to: "/doctors" },
        { label: "patinets", icon: "person", to: "/patinets" },
        { label: "pharmacy", icon: "capsule", to: "/pharmacy" },
        { label: "features", icon: "magic", to: "/features" },

    ]
    const linkList = navLinks.map(item => <Link
        className='nav-link'
        key={item.label}
        to={item.to}>
        <span className={` bi bi-${item.icon}`}></span> {item.label}
    </Link>)




    return <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
            <Link class="navbar-brand" to="/">
                <img src="https://shreethemes.in/doctris/layouts/assets/images/logo-dark.png" alt="" />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    {linkList}
                </div>
                <div className='ms-auto d-flex align-items-center'>
                    <div class="dropdown">
                        <img
                            data-bs-toggle="dropdown"
                            className='img-fluid rounded-circle'
                            width={50}
                            src="https://shreethemes.in/doctris/layouts/assets/images/doctors/01.jpg" alt="" />
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </div>
                    <button type="button" class="ms-3 btn btn-primary">Make Appointment</button>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar