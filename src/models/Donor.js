class Donor {
    id;
    imageSrc;
    donorName;
    scopeOfWork;
    focusCountry;
    about;
    workHistory;
    isSave;
    constructor(imageSrc, donorName, scopeOfWork, focusCountry, about, workHistory) {
        this.imageSrc = imageSrc;
        this.donorName = donorName;
        this.scopeOfWork = scopeOfWork;
        this.focusCountry = focusCountry;
        this.about = about;
        this.workHistory = workHistory;
        // this.isSave = false;
    }
}
export default Donor;