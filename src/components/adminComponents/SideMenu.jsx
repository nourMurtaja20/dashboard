import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../resources/images/logo.png"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LogoutIcon from '@mui/icons-material/Logout';
const SideMenu = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <Fragment>
            <aside class="aside-column">
                <img src={logo} alt="" />
                <span>WISE PLATFORM</span>
                <hr />
                <ul className='nav'>
                    <li>
                        <NavLink to="/adminDashboard">
                            <i class="bx bx-category"></i>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/adminDashboard/openProject">
                            <i class='bx bx-notepad'></i>
                            <span>Open Cells</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/adminDashboard/PotentialDonors">
                            <i class='bx bx-user'></i>
                            <span>Potential Donors</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/adminDashboard/Freelancers">

                            <div className="sidebar">
                                <div onClick={toggleDropdown}>
                                    <i class='bx bx-user'></i>
                                    <button className="dropdown-toggle">
                                        Members
                                    </button>
                                    <ExpandLessIcon style={{ paddingLeft: "15px", fontSize: "2.5em" }} />
                                </div>
                                {isDropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li><NavLink to="/adminDashboard/Freelancers">Freelancers</NavLink></li>
                                        <li><NavLink to="/adminDashboard/OrganizationsPage">Organization</NavLink></li>
                                    </ul>
                                )}
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/adminDashboard/Templates">
                            <i class='bx bxs-layout'></i>
                            <span>Templates</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/adminDashboard/Calendar">
                            <i class='bx bx-calendar'></i>
                            <span>Calendar</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/adminDashboard/Services">
                            <i class='bx bxs-user'></i>
                            <span>Other Services</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/adminDashboard/Note">
                            <i class='bx bx-notepad'></i>
                            <span>My Notes</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/adminDashboard/MyAccount">
                            <i class='bx bxs-user-circle'></i>
                            <span>My Account</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/adminDashboard/MyAccount">
                            <LogoutIcon />
                            <span>Logout</span>
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </Fragment>

    )
}
export default SideMenu