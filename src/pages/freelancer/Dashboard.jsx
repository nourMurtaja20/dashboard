import React, { Fragment } from 'react'
import "../../components/SideMenu.css";
import "../../components/Header.css";
import { Outlet } from 'react-router-dom';
import SideMenu from '../../components/SideMenu';
import {Header} from '../../components/Header';

const Dashboard = () => {
    return (
        <Fragment>
            <SideMenu />
            <section className='mainSection'>
                <Header />
                <Outlet />
            </section>
        </Fragment>
    )
}

export default Dashboard