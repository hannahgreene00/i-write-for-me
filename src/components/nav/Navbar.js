import { useNavigate } from "react-router-dom"
import "./Navbar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <link className="navbar__link" to="/poems">Home</link>
            </li>
            <li className="navbar__item active">
                <link className="navbar__link" to="/about">About</link>
            </li>
            <li className="navbar__item active">
                <link className="navbar__link" to="submitpoems">Submit Poems</link>
            </li>
            {
                localStorage.getItem("capstone_user")
                ? <li className="navbar__item navbar__logout">
                    <link className="navbar__link" to="" onClick={() => {
                        localStorage.removeItem("capstone_user")
                        navigate("/", {replace: true})
                    }}>Logout</link>
                </li>
                :""
            }
        </ul>
    )
}