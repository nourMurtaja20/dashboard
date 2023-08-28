class Project {
    id;
    projectName;
    field;
    founderCountry;
    focusCountry;
    deadline;
    about;
    details;
    stepsApply;
    isSave;
    constructor(projectName, field, founderCountry, focusCountry, deadline, about, details, stepsApply) {
        this.projectName = projectName;
        this.field = field;
        this.founderCountry = founderCountry;;
        this.focusCountry = focusCountry;
        this.deadline = deadline;
        // this.isSave = false;
        this.about = about;
        this.details = details;
        this.stepsApply = stepsApply;
    }
}
export default Project;