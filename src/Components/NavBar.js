import { Link } from "react-router-dom";
const NavBar = () => {
    return ( 
        <div className="NavBar">
            <div className="logo">Moonlight Café</div>
            <div className="nav-links">

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/admin">AdminPanel</Link>
           
            </div>
        </div>
    );
}
 
export default NavBar;