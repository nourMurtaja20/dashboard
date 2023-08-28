class Freelancer {
    id;
    name;
    fieldOfWork;
    country;
    city;
    phoneNo;
    email;
    password;
    rating;
    about;
    bio;
    eduction;
    experiences;
    skills;
    cerficates;
    constructor(name, fieldOfWork, country, city, phoneNo, email, password, rating, about, bio, eduction, experiences, skills, cerficates) {
        this.name = name;
        this.fieldOfWork = fieldOfWork;
        this.country = country;
        this.city = city;
        this.phoneNo = phoneNo;
        this.email = email;
        this.password = password;
        this.rating = rating;
        this.about = about;
        this.bio = bio;
        this.eduction = eduction;
        this.experiences = experiences;
        this.skills = skills;
        this.cerficates = cerficates;

    }

}
export default Freelancer;