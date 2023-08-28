import axios from "axios";
import Template from "../models/Template";

class TemplateController {
    async create(template) {
        try {
            let response = await axios.post(`http://127.0.0.1:5000/api/template`, template);
            return response.data.object;
        } catch (error) {
            console.log(error);
        }
    }

    async read() {
        axios.defaults.withCredentials = true;
        try {
            let response = await axios.get("http://127.0.0.1:5000/api/template");
            if (response.data.length !== 0) {
                let Templates = [];
                for (let key in response.data.data) {
                    let template = new Template();
                    template.id = response.data.data[key].id;
                    template.conceptNote = response.data.data[key].conceptNote;
                    template.scope = response.data.data[key].scope;
                    template.type = response.data.data[key].type;
                    template.Reference = response.data.data[key].Reference;
                    template.path = response.data.data[key].path;
                    Templates.push(template);
                }
                return Templates;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error)

        }
    }

    async delete(id) {
        try {
            let response = await axios.delete(`http://127.0.0.1:5000/api/template/delete/${id}`);
            console.log(response);
            return true;
        } catch (error) {
            console.log(error);
        }
    }
}
export default TemplateController;