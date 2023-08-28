import React from 'react'
import "../../resources/css/notification.css"
import imglogo from "../../resources/images/Ellipse 23.png"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const NotificationsPage = () => {
    return (
        <section className='section-notif'>
            <span>Notification centre</span>
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