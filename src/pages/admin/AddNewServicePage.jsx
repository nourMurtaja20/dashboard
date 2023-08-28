import React, { useRef } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import "../../resources/AdminCSS/otherServices.css"
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useDispatch } from 'react-redux';
import ServiceController from '../../controllers/service-controller';
import Service from '../../models/Service';
import { serviceActions } from '../../redux/service-slic';

function AddNewServicePage() {
    let serviceNameRef = useRef();
    let typeRef = useRef();
    let detailsRef = useRef();
    // let imageRef = useRef();
    let dispatch = useDispatch();
    let serviceController = new ServiceController();
    let navigator = useNavigate();
    let onclickHandller = () => {
        navigator(`/adminDashboard/Services`);
    }
    let checkData = () => {
        if (serviceNameRef.current.value != "" &&
            typeRef.current.value != "" &&
            detailsRef.current.value != "") {
            return true;
        }
        alert("Enter required data")
        return false;
    }
    let save = async () => {
        let service = new Service(serviceNameRef.current.value, "sdlkcmslkdmlckmsdm", detailsRef.current.value, "vzzsxvdzfvzd", "sfdsfvdvd", "sfsdvfsdvfSsss");
        let newserviceId = await serviceController.create(service);
        console.log(newserviceId)
        if (newserviceId) {
            service.newserviceId = newserviceId;
            dispatch(serviceActions.create(service));
            navigator(`/adminDashboard/Services`);

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
                <span>Add New Service</span>
            </div>
            <form className='formAddServiec' onSubmit={onaddProjectHandller}>
                <div>
                    <div>
                        <span>Service Name</span>
                        <input type="text" placeholder='Type a service name.' ref={serviceNameRef} />
                        <span>Service Type</span>
                        <div class="custom-select" >
                            <select ref={typeRef}>
                                <option value="All">All</option>
                                <option value="0"></option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <span>Project Icon / Image</span>
                        <label class="label-file-template" for="file">
                            <input type="file" id="file" accept="image/*" />
                            <CloudUploadOutlinedIcon />
                            Upload file from Device
                        </label>
                    </div>
                </div>
                <div>
                    <span>Service Details</span>
                    <textarea rows={10} placeholder='Type a service description.' ref={detailsRef}>
                    </textarea>
                </div>
                <div>
                    <button className='btnDark'>Add Service</button>
                </div>
            </form>
        </>
    )
}

export default AddNewServicePage