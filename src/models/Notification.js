class Notification {
    id;
    title;
    from;
    time;
    constructor(title, from, time) {
        this.title = title;
        this.from = from;
        this.time = time;
    }
}
export default Notification;