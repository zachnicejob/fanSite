import { Link } from 'react-router-dom';
import '../images/images.css';

function Navbar() {
    return(
        <div className="navbar bg-base-100">
            <div className="flex-1 ml-4">
                <Link to="/" className="bg-contain" id="navbarLogo" />
            </div>
            <div className="flex-none mr-4">
                <ul className="menu menu-horizontal p-2">
                    <li>
                        <Link to="/events" className="btn btn-ghost">Events</Link>
                    </li>
                    <li>
                        <Link to="/chopperBio" className="btn btn-ghost">Chopper's Biography</Link>
                    </li>
                    <li>
                        <Link to="/generalPosts" className="btn btn-ghost">General Posts</Link>
                    </li>
                    <li>
                        <Link to="/about" className="btn btn-ghost">About Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;