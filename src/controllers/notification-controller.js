import axios from "axios";
import Notification from "../models/Notification";

class NotificationController {
    async create(notification) {
        try {
            let response = await axios.post(`http://127.0.0.1:5000/api/notification`, notification);
            return response.data.object;
        } catch (error) {
            console.log(error);
        }
    }

    async read() {
        axios.defaults.withCredentials = true;
        try {
            let response = await axios.get("http://127.0.0.1:5000/api/notification");
            if (response.data.length !== 0) {
                let notifications = [];
                for (let key in response.data.data) {
                    let notification = new Notification();
                    notification.id = response.data.data[key].id;
                    notification.title = response.data.data[key].title;
                    notification.from = response.data.data[key].from;
                    notification.time = response.data.data[key].time;
                    notifications.push(notification);
                }
                return notifications;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error)

        }
    }

    async delete(id) {
        try {
            let response = await axios.delete(`http://127.0.0.1:5000/api/notification/delete/${id}`);
            console.log("res" + response);
            return true;
        } catch (error) {
            console.log(error + "erreo");
        }
    }
    async deleteAll() {
        try {
            let response = await axios.delete(`http://127.0.0.1:5000/api/notification/delete`);
            console.log("res" + response);
            return true;
        } catch (error) {
            console.log(error + "erreo");
        }
    }
}
export default NotificationController;