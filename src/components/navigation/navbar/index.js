import {Link} from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}
export default Navbar;