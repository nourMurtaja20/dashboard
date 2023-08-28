import React, { useRef, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../resources/AdminCSS/openProject.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProjectController from '../../controllers/project-controller';
import Project from '../../models/Project';
import { projectActions } from '../../redux/project-slic';
const ProjectDetails = () => {
    let nameRef = useRef();
    let filedRef = useRef();
    let deadlineRef = useRef();
    let detailsRef = useRef();
    let founderCountryRef = useRef();
    let focusCountryRef = useRef();

    let navigator = useNavigate();
    let onclickHandller = () => {
        navigator(`/adminDashboard/openProject`);
    }
    let dispatch = useDispatch();
    let projectcontroller = new ProjectController();
    let project = useSelector((state) => state.projects.project);
    let steps = project.stepsApply;
    const [editing, setEditing] = useState(false);
    const handleEditClick = () => {
        setEditing(true);
    };
    const handleSaveClick = () => {
        // Perform save or update logic here
        setEditing(false);
    };
    let clear = () => {
        nameRef.current.value = "";
        filedRef.current.value = "";
        detailsRef.current.value = "";
        deadlineRef.current.value = "";
        founderCountryRef.current.value = "";
        focusCountryRef.current.value = "";
    }
    let save = async () => {
        let updateProject = new Project(nameRef.current.value, filedRef.current.value, founderCountryRef.current.value, focusCountryRef.current.value, deadlineRef.current.value, "about", detailsRef.current.value, ["dsfsdfs"]);
        updateProject.id = project.id;
        let newprojectId = await projectcontroller.edit(updateProject);
        if (newprojectId) {
            dispatch(projectActions.update(updateProject));
            clear();
            setEditing(false);
        }
    }
    let onupdateHandller = (event) => {
        event.preventDefault();
        save();

    }
    return (
        <>
            <div className='headerDetails'>
                <ArrowBackIcon style={{ fontSize: "16px", cursor: "pointer" }} onClick={onclickHandller} />
                <span>Back</span>
                <span>Project Details</span>
            </div>
            {editing ?
                (<form className='div-addProject' onSubmit={onupdateHandller}>
                    <div>
                        <span>Founder Country</span>
                        <div class="custom-select">
                            <select ref={founderCountryRef}>
                                <option value="All">All</option>
                                <option value="0">palestain</option>
                            </select>
                        </div>
                        <span>Focus Country</span>
                        <div class="custom-select">
                            <select ref={focusCountryRef}>
                                <option value="All">All</option>
                                <option value="0">gaza</option>
                            </select>
                        </div>
                        <span>DeadLine</span>
                        <input type="date" ref={deadlineRef} />
                    </div>
                    <div>
                        <span>Project Name</span>
                        <input type="text" ref={nameRef} placeholder={project.projectName} />
                    </div>
                    <div>
                        <span>Field of work</span>
                        <input type="text" placeholder={project.field} ref={filedRef} />
                    </div>
                    <div>
                        <span>Project Details</span>
                        <textarea cols={70} rows={15} ref={detailsRef} placeholder={project.details} />
                    </div>
                    <div>
                        <button className='btnDark' >Save Changes</button>
                    </div>
                </form>) :
                (<div className='projectDetailsContent'>
                    <span>{project.projectName}</span>
                    <div>
                        <p>{project.details}</p>
                        <span>apply for the tender as follows: -</span>
                        <ul className='tender'>
                            {steps.map((element) => (<li>{element}</li>))}
                        </ul>
                        <span>For more inquiries, you can visit the association's headquarters or call the following numbers: Tel. 08-2557209</span>
                        <span>Deadline</span>
                        <span>{project.deadline}</span>
                        <span>Country</span>
                        <span>{project.focusCountry}</span>
                    </div>
                    <div>
                        <button className='btnDark'>Apply for this Project</button>
                        <button className='btnwhite' onClick={handleEditClick} >Edit Project Data</button>
                    </div>
                    {/* onClick={handleSaveClick} */}
                </div>)
            }

        </>
    )
}

export default ProjectDetails