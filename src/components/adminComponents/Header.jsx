import React, { Fragment } from 'react'
import logo from "../../resources/images/logo.png"
import { useDispatch } from "react-redux";
import { projectActions } from '../../redux/project-slic';
import { NavLink, useNavigate } from 'react-router-dom';

export const Header = () => {
    let dispatch = useDispatch();
    let onSearchChangeHandler = (event) => {
        dispatch(projectActions.filterBySearch(event.target.value));
    };
    return (
        <section className='section-header'>
            <span>Welcome admin,</span>
            <header>
                <div class="seach-box">
                    <i class='bx bx-search'></i>
                    <input type="text" placeholder="Search" onChange={onSearchChangeHandler} />
                </div>
                <NavLink to="/adminDashboard/AminNotifications">
                    <i class='bx bx-bell'></i>
                </NavLink>
                <img src={logo} alt="" />
            </header>
        </section>

    )
}
