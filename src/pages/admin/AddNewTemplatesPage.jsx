import React, { useRef, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../resources/AdminCSS/freelancerProfile.css"
import { useNavigate } from 'react-router-dom';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import TemplateController from '../../controllers/template-controller';
import { useDispatch } from 'react-redux';
import Template from '../../models/Template';
import { templateActions } from '../../redux/template-slic';
import axios from 'axios';

const AddNewTemplate = () => {
    let nameRef = useRef();
    let scopeRef = useRef();
    // let conceptNoteRef = useRef();
    let typeRef = useRef();
    let ReferenceRef = useRef();
    let pathRef = useRef();
    let navigator = useNavigate();
    let dispatch = useDispatch();
    let templatecontroller = new TemplateController();
    let onclickHAndller = () => {
        navigator(`/adminDashboard/Templates`);
    }
    let checkData = () => {
        if (nameRef.current.value != "" &&
            scopeRef.current.value != "" &&
            typeRef.current.value != "" &&
            ReferenceRef.current.value != "" &&
            pathRef.current.value != "") {
            return true;
        }
        alert("Enter required data")
        return false;
    }
    let [file, setFile] = useState('')
    let save = async () => {
        let template = new Template("name", "dsfsddfd", scopeRef.current.value, typeRef.current.value, ReferenceRef.current.value, pathRef.current.value);
        const formData = new FormData();
        formData.append('file', file);
        try {
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            window.alert(response.data)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        let newtemplateId = await templatecontroller.create(template);
        console.log(newtemplateId)
        if (newtemplateId) {
            template.newtemplateId = newtemplateId;
            dispatch(templateActions.create(template));
        }
    }
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }
    let onaddProjectHandller = (event) => {
        event.preventDefault();
        if (checkData()) {
            save();
            navigator(`/adminDashboard/Templates`);
        }
    }
    return (
        <>
            <div className='headerDetails'>
                <ArrowBackIcon onClick={onclickHAndller} style={{ fontSize: "16px", cursor: "pointer" }} />
                <span>Back</span>
                <span>Add New Template</span>
            </div>
            <form className='hiretalent' onSubmit={onaddProjectHandller}>
                <span>File Name</span>
                <div>
                    <input type="text" placeholder='Type a name for the template' ref={nameRef} />
                </div>
                <span>Type</span>
                <div>
                    <div class="custom-select" >
                        <select ref={typeRef}>
                            <option value="All">All</option>
                            <option value="0">palestain</option>
                        </select>
                    </div>
                </div>
                <span>Scope</span>
                <div>
                    <div class="custom-select" >
                        <select ref={scopeRef}>
                            <option value="All">All</option>
                            <option value="0">palestain</option>
                        </select>
                    </div>
                </div>
                <span>Reference</span>
                <div>
                    <input type="text" placeholder='Type here' ref={ReferenceRef} />
                </div>
                <span>Upload a template</span>
                <div>
                    <label class="label-file-template" for="file">
                        <input type="file" id="file" accept="image/*" ref={pathRef} onChange={handleFileChange} />
                        <CloudUploadOutlinedIcon />
                        Upload file from Device
                    </label>
                </div>
                <div>
                    <button className='btnDark'>Add to Templates</button>
                </div>

            </form>
        </>
    )
}

export default AddNewTemplate