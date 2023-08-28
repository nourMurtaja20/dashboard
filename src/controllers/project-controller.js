import axios from "axios";
// import { Project } from "../../src/models/Project";
import Project from "../models/Project"
class ProjectController {
    async create(project) {
        try {
            let response = await axios.post(`http://127.0.0.1:5000/api/project`, project);
            return response.data.object;
        } catch (error) {
        }
    }

    async read() {
        axios.defaults.withCredentials = true;
        try {
            let response = await axios.get("http://127.0.0.1:5000/api/project");
            // console.log(JSON.stringify(response.data['data']))
            if (response.data.length !== 0) {
                let projects = [];
                for (let key in response.data.data) {
                    let project = new Project();
                    project.id = response.data.data[key].id;
                    project.projectName = response.data.data[key].projectName;
                    project.field = response.data.data[key].field;
                    project.founderCountry = response.data.data[key].founderCountry;
                    project.focusCountry = response.data.data[key].focusCountry;
                    project.deadline = response.data.data[key].deadline;
                    project.about = response.data.data[key].about;
                    project.details = response.data.data[key].details;
                    project.stepsApply = response.data.data[key].stepsApply;
                    project.isSave = response.data.data[key].isSave;
                    projects.push(project);
                }
                return projects;
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
            let response = await axios.get("http://127.0.0.1:5000/api/project/save");
            if (response.data.length !== 0) {
                let projects = [];
                for (let key in response.data.data) {
                    let project = new Project();
                    project.id = response.data.data[key].id;
                    project.projectName = response.data.data[key].projectName;
                    project.field = response.data.data[key].field;
                    project.founderCountry = response.data.data[key].founderCountry;
                    project.focusCountry = response.data.data[key].focusCountry;
                    project.deadline = response.data.data[key].deadline;
                    project.about = response.data.data[key].about;
                    project.details = response.data.data[key].details;
                    project.stepsApply = response.data.data[key].stepsApply;
                    project.isSave = response.data.data[key].isSave;
                    projects.push(project);
                }
                return projects;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error)

        }
    }

    async update(id, project) {
        axios.defaults.withCredentials = true;
        try {
            let response = await axios.put("http://127.0.0.1:5000/api/project/update", { id, project });
            console.log(response.data);
            return response;
        } catch (error) {
            console.log(error.message)
        }
    }

    async edit(project) {
        axios.defaults.withCredentials = true;
        try {
            let response = await axios.put(`http://127.0.0.1:5000/api/project/edit/${project.id}`, {
                projectName: project.projectName,
                field: project.field,
                founderCountry: project.founderCountry,
                focusCountry: project.focusCountry,
                deadline: project.deadline,
                details: project.details,
            });
            console.log(response.data);
            return response;
        } catch (error) {
            console.log(error.message)
        }
    }

    async delete(id) {
        console.log(id + "id");
        try {
            let response = await axios.delete(`http://127.0.0.1:5000/api/project/delete/${id}`);
            console.log("res" + response);
            return true;
        } catch (error) {
            console.log(error + "erreo");
        }
    }
}
export default ProjectController;
