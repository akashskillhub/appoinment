import { Link } from 'react-router-dom'
const AdminNavbar = () => {
    return <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container">
            <Link to="/admin" class="navbar-brand">Admin</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/admin" class="nav-link active">Dashboard</Link>
                    <Link to="/admin/bookings" class="nav-link" >Bookings</Link>
                    <Link to="/admin/employee" class="nav-link" >Employee</Link>
                    <Link to="/admin/settings" class="nav-link" >Settings</Link>
                </div>
            </div>
        </div>
    </nav>
}

export default AdminNavbar