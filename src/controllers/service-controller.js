import axios from "axios";
import Service from "../models/Service"
class ServiceController {
    async create(service) {
        try {
            let response = await axios.post(`http://127.0.0.1:5000/api/service`, service);
            return response.data.object;
        } catch (error) {
            console.log(error);
        }
    }

    async read() {
        axios.defaults.withCredentials = true;
        try {
            let response = await axios.get("http://127.0.0.1:5000/api/service");
            // console.log(JSON.stringify(response.data['data']))
            if (response.data.length !== 0) {
                let services = [];
                for (let key in response.data.data) {
                    let service = new Service();
                    service.id = response.data.data[key].id;
                    service.serviceName = response.data.data[key].serviceName;
                    service.description = response.data.data[key].description;
                    service.details = response.data.data[key].details;
                    service.guidance = response.data.data[key].guidance;
                    service.WhyChooseUs = response.data.data[key].WhyChooseUs;
                    service.Pricing = response.data.data[key].Pricing;
                    service.isSave = response.data.data[key].isSave;
                    services.push(service);
                }
                console.log(services);
                return services;
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
            let response = await axios.get("http://127.0.0.1:5000/api/service/save");
            console.log(response.data.data);
            if (response.data.length !== 0) {
                let services = [];
                for (let key in response.data.data) {
                    let service = new Service();
                    service.id = response.data.data[key].id;
                    service.serviceName = response.data.data[key].serviceName;
                    service.description = response.data.data[key].description;
                    service.details = response.data.data[key].details;
                    service.guidance = response.data.data[key].guidance;
                    service.WhyChooseUs = response.data.data[key].WhyChooseUs;
                    service.Pricing = response.data.data[key].Pricing;
                    service.isSave = response.data.data[key].isSave;
                    services.push(service);
                }
                return services;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error)

        }
    }

    async update(id) {
        axios.defaults.withCredentials = true;
        try {
            let response = await axios.put("http://127.0.0.1:5000/api/service/update", { id });
            console.log(response.data);
            return response;
        } catch (error) {
            console.log(error.message)
        }
    }

    async edit(service) {
        axios.defaults.withCredentials = true;
        try {
            let response = await axios.put(`http://127.0.0.1:5000/api/service/edit/${service.id}`,{
                serviceName: service.serviceName,
                description: service.description,
                details: service.details,
                guidance: service.guidance,
                WhyChooseUs: service.WhyChooseUs,
                Pricing: service.Pricing
            });
            return response;
        } catch (error) {
            console.log(error.message)
        }
    }

    async delete(id) {
        try {
            let response = await axios.delete(`http://127.0.0.1:5000/api/service/delete/${id}`);
            console.log(response);
            return true;
        } catch (error) {
            console.log(error);
        }
    }
}
export default ServiceController;
