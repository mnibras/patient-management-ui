import {Link} from "react-router-dom";
import "./sidebar.css";

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/patient-list" className="sidebarListItem">
                            Patients
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;