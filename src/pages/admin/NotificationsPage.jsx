import React, { useEffect } from 'react'
import "../../resources/css/notification.css"
import imglogo from "../../resources/images/Ellipse 23.png"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import NotificationController from '../../controllers/notification-controller';
import { notificationActions } from '../../redux/notification-slic';
const NotificationsPage = () => {
    let notifications = useSelector((state) => state.notifications.data)
    let notificationcontroller = new NotificationController();
    let dispatch = useDispatch();
    let onDeleteHandller = async (notification) => {
        let result = await notificationcontroller.delete(notification.id);
        if (result) {
            dispatch(notificationActions.delete(notification.id));
        } else {
            console.log("error");
        }
    }
    let onDeleteAllHandller = async () => {
        let result = await notificationcontroller.deleteAll();
        if (result) {
            dispatch(notificationActions.deleteAll());
        } else {
            console.log("error");
        }
    }
    
    let fetchData = async () => {
        if (notifications.length === 0) {
            let notifications = await notificationcontroller.read();
            dispatch(notificationActions.read(notifications));
        }
    }
    useEffect(() => { fetchData(); }, []);
    return (
        <section className='section-notif'>
            <span>Notification admin</span>
            <div className='divTop'>
                <span>Today</span>
                <span style={{ cursor: "pointer" }} onClick={onDeleteAllHandller}>Delete All</span>
            </div>
            {notifications.map((element) => {
                return (
                    <div className='div-notf'>
                        <img src={imglogo} alt="" />
                        <div>
                            <span>Notification from {element.from}</span>
                            <span>{element.title}</span>
                        </div>
                        <span>{element.time}</span>
                        <DeleteOutlineIcon style={{ color: "red", marginRight: "30px", cursor: "pointer" }} onClick={() => onDeleteHandller(element)} />
                    </div>
                )
            })}
            {/* <div className='div-notf'>
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
            </div> */}
            {/* <span>Older</span> */}
            {/* <div className='div-notf'>
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
            </div> */}
        </section>
    )
}

export default NotificationsPage