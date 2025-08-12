import { NavLink } from "react-router"
import './NavBar.css'

function NavBar(){
    return <nav className="navbar text-center">
        <NavLink to="/" className="nav-link">
            Home
        </NavLink>
        <NavLink to="/projects" className="nav-link" >
            Projects
        </NavLink>
        <NavLink to="/experience" className="nav-link" >
            Education & Experience
        </NavLink>
        <NavLink to="/passions" className="nav-link" >
            Passions
        </NavLink>
    </nav>
}

export default NavBar