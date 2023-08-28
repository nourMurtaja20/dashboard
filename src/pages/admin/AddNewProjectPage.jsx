import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../resources/AdminCSS/openProject.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProjectController from '../../controllers/project-controller';
import { useRef } from 'react';
import Project from '../../models/Project';
import { projectActions } from '../../redux/project-slic';
const AddNewProjectPage = () => {
    let nameRef = useRef();
    let filedRef = useRef();
    let deadlineRef = useRef();
    let detailsRef = useRef();
    let founderCountryRef = useRef();
    let focusCountryRef = useRef();


    let navigator = useNavigate();
    let dispatch = useDispatch();
    let projectcontroller = new ProjectController();
    let onclickHandller = () => {
        navigator(`/adminDashboard/openProject`);
    }
    let checkData = () => {
        if (nameRef.current.value != "" &&
            filedRef.current.value != "" &&
            deadlineRef.current.value != "" &&
            detailsRef.current.value != "" &&
            founderCountryRef.current.value != "" &&
            focusCountryRef.current.value != "") {
            return true;
        }
        alert("Enter required data")
        return false;
    }
    let clear = () => {
        nameRef.current.value = "";
        filedRef.current.value = "";
        detailsRef.current.value = "";
        deadlineRef.current.value = "";
        founderCountryRef.current.value = "";
        focusCountryRef.current.value = "";
    }
    let save = async () => {
        let project = new Project(nameRef.current.value, filedRef.current.value, founderCountryRef.current.value, focusCountryRef.current.value, deadlineRef.current.value, "about", detailsRef.current.value, ["dsfsdfs"]);
        console.log(project)
        let newprojectId = await projectcontroller.create(project);
        console.log(newprojectId)
        if (newprojectId) {
            project.newprojectId = newprojectId;
        dispatch(projectActions.create(project));
        clear();
        }
    }
    let onaddProjectHandller = (event) => {
        event.preventDefault();
        if (checkData()) {
            save();
        }
    }

    return (
        <>
            <div className='headerDetails'>
                <ArrowBackIcon style={{ fontSize: "16px", cursor: "pointer" }} onClick={onclickHandller} />
                <span>Back</span>
                <span>Project Details</span>
            </div>
            <form className='div-addProject' onSubmit={onaddProjectHandller}>
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
                            <option value="1">All</option>
                            <option value="0">gaza</option>
                        </select>
                    </div>
                    <span>DeadLine</span>
                    <input type="date" ref={deadlineRef} />
                </div>
                <div>
                    <span>Project Name</span>
                    <input type="text" ref={nameRef} />
                    <span>Field of work</span>
                    <input type="text" ref={filedRef} />
                </div>
                <div>
                    <span>Project Details</span>
                    <input placeholder='Add Project Details here' ref={detailsRef} />
                </div>
                <div>
                    <button className='btnDark' type='submit'>Add Project</button>
                </div>
            </form>
        </>
    )
}

export default AddNewProjectPage