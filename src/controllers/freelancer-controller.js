import axios from "axios";
import Donor from "../models/Donor";
import Freelancer from "../models/Freelancer";

class FreelancerController {
    async create(freelancer) {
        try {
            let response = await axios.post(`http://127.0.0.1:5000/api/freelancer`, freelancer);
            return response.data.object;
        } catch (error) {
            console.log(error);
        }
    }
    
    async read() {
        axios.defaults.withCredentials = true;
        try {
            let response = await axios.get("http://127.0.0.1:5000/api/freelancer");
            // console.log(JSON.stringify(response.data['data']))
            if (response.data.length !== 0) {
                let freelancers = [];
                for (let key in response.data.data) {
                    let freelancer = new Freelancer();
                    freelancer.id = response.data.data[key].id;
                    freelancer.name = response.data.data[key].name;
                    freelancer.fieldOfWork = response.data.data[key].fieldOfWork;
                    freelancer.country = response.data.data[key].country;
                    freelancer.city = response.data.data[key].city;
                    freelancer.phoneNo = response.data.data[key].phoneNo;
                    freelancer.email = response.data.data[key].email;
                    freelancer.password = response.data.data[key].password;
                    freelancer.rating = response.data.data[key].rating;
                    freelancer.about = response.data.data[key].about;
                    freelancer.bio = response.data.data[key].bio;
                    freelancer.eduction = response.data.data[key].eduction;
                    freelancer.experiences = response.data.data[key].experiences;
                    freelancer.skills = response.data.data[key].skills;
                    freelancer.cerficates = response.data.data[key].cerficates;
                    freelancers.push(freelancer);
                }
                return freelancers;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error)

        }
    }

    async delete(id) {
        try {
            let response = await axios.delete(`http://127.0.0.1:5000/api/freelancer/delete/${id}`);
            console.log("res" + response);
            return true;
        } catch (error) {
            console.log(error + "erreo");
        }
    }
}
export default FreelancerController;