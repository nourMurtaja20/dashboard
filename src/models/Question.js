class Project {
    id;
    fullName;
    organizationName;
    position;
    email;
    service;
    mobileNumber;
    prefferedDeliveryDate;
    path;
    requirements;
    constructor(fullName, organizationName, position, email, deadline, service, mobileNumber, prefferedDeliveryDate, path, requirements) {
        this.fullName = fullName;
        this.organizationName = organizationName;
        this.position = position;;
        this.email = email;
        this.deadline = deadline;
        this.service = service;
        this.mobileNumber = mobileNumber;
        this.prefferedDeliveryDate = prefferedDeliveryDate;
        this.path = path;
        this.requirements = requirements;
    }
}
export default Project;