import React, { Fragment } from 'react'
import  { Header } from '../../components/adminComponents/Header'
import "../../components/adminComponents/SideMenu.css";
import "../../components/adminComponents/Header.css";
import { Outlet } from 'react-router-dom';
import SideMenu from '../../components/adminComponents/SideMenu';
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