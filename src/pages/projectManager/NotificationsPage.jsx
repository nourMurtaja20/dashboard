import React from 'react'
import "../../resources/css/notification.css"
import imglogo from "../../resources/images/Ellipse 23.png"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const NotificationsPage = () => {
    return (
        <section className='section-notif'>
            <span>Notification admin</span>
            <div className='divTop'>
                <span>Today</span>
                <span>Delete All</span>
            </div>
            <div className='div-notf'>
                <img src={imglogo} alt="" />
                <div>
                    <span>Notification from European Union</span>
                    <span>Added a New Project</span>
                </div>
                <span>2 hrs ago</span>
                <DeleteOutlineIcon style={{ color: "red", marginRight: "30px", cursor: "pointer" }} />
            </div>
            <div className='div-notf'>
                <img src={imglogo} alt="" />
                <div>
                    <span>Notification from European Union</span>
                    <span>Added a New Project</span>
                </div>
                <span>2 hrs ago</span>
                <div style={{ display: "flex", flexDirection: "row", columnGap: "10px", marginRight: "10px" }}>
                    <button className='btnDark'>Accept</button>
                    <button className='btnwhite'>Decline</button>
                </div>
            </div>
            <div className='div-notf'>
                <img src={imglogo} alt="" />
                <div>
                    <span>Notification from European Union</span>
                    <span>Added a New Project</span>
                </div>
                <span>2 hrs ago</span>
                <DeleteOutlineIcon style={{ color: "red", marginRight: "30px", cursor: "pointer" }} />
            </div>
            <span>Older</span>
            <div className='div-notf'>
                <img src={imglogo} alt="" />
                <div>
                    <span>Notification from European Union</span>
                    <span>Added a New Project</span>
                </div>
                <span>2 hrs ago</span>
                <DeleteOutlineIcon style={{ color: "red", marginRight: "30px", cursor: "pointer" }} />
            </div><div className='div-notf'>
                <img src={imglogo} alt="" />
                <div>
                    <span>Notification from European Union</span>
                    <span>Added a New Project</span>
                </div>
                <span>2 hrs ago</span>
                <DeleteOutlineIcon style={{ color: "red", marginRight: "30px", cursor: "pointer" }} />
            </div>
        </section>
    )
}

export default NotificationsPage