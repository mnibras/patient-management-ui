import "./navbar.css";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="/">
                        <span className="logo">MonitoredRx</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;