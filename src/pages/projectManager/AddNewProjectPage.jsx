import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../resources/AdminCSS/openProject.css"
import { useNavigate } from 'react-router-dom';
const AddNewProjectPage = () => {
    let navigator = useNavigate();
    let onclickHandller = () => {
        navigator(`/managerDashboard/openProject`);
    }
    return (
        <>
            <div className='headerDetails'>
                <ArrowBackIcon style={{ fontSize: "16px", cursor: "pointer" }} onClick={onclickHandller} />
                <span>Back</span>
                <span>Project Details</span>
            </div>
            <form className='div-addProject'>
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
                    <span>Field of work</span>
                    <input type="text" />
                </div>
                <div>
                    <span>Project Name</span>
                    <textarea cols={70} rows={15} placeholder='Add Project Details here'>
                    </textarea>
                </div>
                <div>
                    <button className='btnDark'>Add Project</button>
                </div>
            </form>
        </>
    )
}

export default AddNewProjectPage