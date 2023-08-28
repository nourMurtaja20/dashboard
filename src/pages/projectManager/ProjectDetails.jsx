import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../resources/AdminCSS/openProject.css"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProjectDetails = () => {
    let navigator = useNavigate();
    let onclickHandller = () => {
        navigator(`/managerDashboard/openProject`);
    }
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
    return (
        <>
            <div className='headerDetails'>
                <ArrowBackIcon style={{ fontSize: "16px", cursor: "pointer" }} onClick={onclickHandller} />
                <span>Back</span>
                <span>Project Details</span>
            </div>
            {editing ?
                (<form className='div-addProject'>
                    <div>
                        <span>Founder Country</span>
                        <div class="custom-select">
                            <select >
                                <option value="All">All</option>
                                <option value="0">palestain</option>
                            </select>
                        </div>
                        <span>Focus Country</span>
                        <div class="custom-select">
                            <select >
                                <option value="All">All</option>
                                <option value="0">gaza</option>
                            </select>
                        </div>
                        <span>DeadLine</span>
                        <input type="date" />
                    </div>
                    <div>
                        <span>Project Name</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span>Field of work</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span>Project Name</span>
                        <textarea cols={70} rows={15} placeholder='Add Project Details here'>
                        </textarea>
                    </div>
                    <div>
                        <button className='btnDark' onClick={handleSaveClick}>Save Changes</button>
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
                        <button className='btnwhite' onClick={handleEditClick}>Edit Project Data</button>
                    </div>
                </div>)
            }

        </>
    )
}

export default ProjectDetails