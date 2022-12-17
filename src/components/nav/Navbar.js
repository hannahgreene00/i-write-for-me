import { Link, useNavigate } from "react-router-dom"
import "./Navbar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/poems">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/about">About</Link>
            </li>
            <li>
                <Link className="navbar__item active" to="/profile">Profile</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="submitpoems">Submit Poems</Link>
            </li>
            {
                localStorage.getItem("capstone_user")
                ? <li className="navbar__item navbar__logout">
                    <Link className="navbar__link" to="" onClick={() => {
                        localStorage.removeItem("capstone_user")
                        navigate("/", {replace: true})
                    }}>Logout</Link>
                </li>
                :""
            }
        </ul>
    )
}