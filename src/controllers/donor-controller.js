import axios from "axios";
import Donor from "../models/Donor";

class DonorController {
    async create(donor) {
        try {
            let response = await axios.post(`http://127.0.0.1:5000/api/donor`, donor);
            return response.data.object;
        } catch (error) {
        }
    }

    async read() {
        axios.defaults.withCredentials = true;
        try {
            let response = await axios.get("http://127.0.0.1:5000/api/donor");
            // console.log(JSON.stringify(response.data['data']))
            if (response.data.length !== 0) {
                let donors = [];
                for (let key in response.data.data) {
                    let donor = new Donor();
                    donor.id = response.data.data[key].id;
                    donor.imageSrc = response.data.data[key].imageSrc;
                    donor.donorName = response.data.data[key].donorName;
                    donor.scopeOfWork = response.data.data[key].scopeOfWork;
                    donor.focusCountry = response.data.data[key].focusCountry;
                    donor.about = response.data.data[key].about;
                    donor.workHistory = response.data.data[key].workHistory;
                    donor.isSave = response.data.data[key].isSave;
                    donors.push(donor);
                }
                return donors;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error)

        }
    }

    async readSave() {
        axios.defaults.withCredentials = true;
        try {
            let response = await axios.get("http://127.0.0.1:5000/api/donor/save");
            if (response.data.length !== 0) {
                let donors = [];
                for (let key in response.data.data) {
                    let donor = new Donor();
                    donor.id = response.data.data[key].id;
                    donor.imageSrc = response.data.data[key].imageSrc;
                    donor.donorName = response.data.data[key].donorName;
                    donor.scopeOfWork = response.data.data[key].scopeOfWork;
                    donor.focusCountry = response.data.data[key].focusCountry;
                    donor.isSave = response.data.data[key].isSave;
                    donors.push(donor);
                }
                return donors;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error)

        }
    }
    //update save
    async update(id) {
        axios.defaults.withCredentials = true;
        try {
            let response = await axios.put("http://127.0.0.1:5000/api/donor/update", { id });
            console.log(response.data);
            return response;
        } catch (error) {
            console.log(error.message)
        }
    }

    async edit(donor) {
        axios.defaults.withCredentials = true;
        try {
            let response = await axios.put(`http://127.0.0.1:5000/api/donor/edit/${donor.id}`, {
                scopeOfWork: donor.scopeOfWork,
                workHistory: donor.workHistory,
                about: donor.about,
                focusCountry: donor.focusCountry,
            });
            console.log(response.data);
            return response;
        } catch (error) {
            console.log(error.message)
        }
    }

    async delete(id) {
        try {
            let response = await axios.delete(`http://127.0.0.1:5000/api/donor/delete/${id}`);
            console.log("res" + response);
            return true;
        } catch (error) {
            console.log(error + "erreo");
        }
    }
}

export default DonorController;