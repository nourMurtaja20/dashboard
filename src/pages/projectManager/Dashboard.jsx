import React, { Fragment } from 'react'
import { Header } from '../../components/managerComponents/Header'
import "../../components/managerComponents/SideMenu.css";
import "../../components/managerComponents/Header.css";
import { Outlet } from 'react-router-dom';
import SideMenu from '../../components/managerComponents/SideMenu';
// import  Header  from '../../components/adminComponents/Header';

const AdminDashboard = () => {
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

export default AdminDashboard