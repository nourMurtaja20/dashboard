import React, { useRef, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ServiceController from '../../controllers/service-controller';
import { serviceActions } from '../../redux/service-slic';
import Service from '../../models/Service';
import Swal from 'sweetalert2';

const ServiecDetailsPage = () => {
    let descriptionRef = useRef();
    let guidanceRef = useRef();
    let WhyChooseUsRef = useRef();
    let PricingRef = useRef();
    let navigator = useNavigate();
    let dispatch = useDispatch();
    let serviceController = new ServiceController();
    let onclickHandller = () => {
        navigator(`/adminDashboard/Services`);
    }
    let service = useSelector((state) => state.services.service);
    let onClickSaveHandller = async (service) => {
        let updatedService = {
            ...service,
            isSave: !service.isSave
        };
        let response = await serviceController.update(parseInt(service.id) + 1);
        if (response) {
            dispatch(serviceActions.updateIsSave(updatedService));
        } else {
            console.log("error");
        }
    }
    const [editing, setEditing] = useState(false);
    const handleEditClick = () => {
        setEditing(true);
    };
    const handleSaveClick = () => {
        // Perform save or update logic here
        setEditing(false);
    };
    const showAlert = (service) => {
        Swal.fire({
            title: 'Are you sure?',
            // text: 'This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // Code to execute if the user confirms the action
                Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
                let result = serviceController.delete(service.id);
                if (result) {
                    dispatch(serviceActions.delete(service.id));
                    navigator(`/adminDashboard/Services`);
                } else {
                    console.log("error");
                }
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Code to execute if the user cancels the action
                Swal.fire('Cancelled', 'Your item  is safe :)', 'info');
            }
        });
    };
    let save = async () => {
        let updateService = new Service(service.serviceName, descriptionRef.current.value, service.details, guidanceRef.current.value, WhyChooseUsRef.current.value, PricingRef.current.value);
        updateService.id = service.id;
        let newserviecId = await serviceController.edit(updateService);
        console.log(newserviecId);
        if (newserviecId) {
            dispatch(serviceActions.update(updateService));
            setEditing(false);
        } else {
            console.log("error");
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
                <span>{service.serviceName}</span>
            </div>
            {editing ?
                (<form className='serviecDetails' >
                    <div>
                        <div>
                            <textarea cols={120} rows={5} ref={descriptionRef}>{service.details}</textarea>
                            <span>Our business development guidance includes:</span>
                            <textarea rows={5} ref={guidanceRef}>{service.details}</textarea>
                            <span>Why Choose Us:</span>
                            <textarea rows={5} ref={WhyChooseUsRef}>{service.WhyChooseUs}</textarea>
                            <span>Pricing:</span>
                            <textarea rows={5} ref={PricingRef}>{service.Pricing}</textarea>
                        </div>
                        {service.isSave ? <TurnedInIcon style={{ cursor: "pointer" }} onClick={() => onClickSaveHandller(service)} /> : <BookmarkBorderIcon style={{ cursor: "pointer" }} onClick={() => onClickSaveHandller(service)} />}

                    </div>
                    <div>
                        <button className='btnDark' onClick={onupdateHandller}>Save Changes</button>
                        {/* <button className='btnwhite' style={{ color: "red" }} onClick={() => showAlert(service)}>Delete Service</button> */}
                    </div>
                </form>) :
                (<div className='serviecDetails'>
                    <div>
                        <div>
                            <p>{service.details}</p>
                            <span>Our business development guidance includes:</span>
                            <ul>
                                {service.guidances}
                                {/* {guidances.map((element) => (<li>{element}</li>))} */}
                            </ul>
                            <span>Why Choose Us:</span>
                            <p>{service.WhyChooseUs}</p>
                            <span>Pricing:</span>
                            <p>{service.Pricing}</p>
                        </div>
                        {service.isSave ? <TurnedInIcon style={{ cursor: "pointer" }} onClick={() => onClickSaveHandller(service)} /> : <BookmarkBorderIcon style={{ cursor: "pointer" }} onClick={() => onClickSaveHandller(service)} />}

                    </div>
                    <div>
                        <button className='btnDark' onClick={handleEditClick}>Edit Service Details</button>
                        <button className='btnwhite' style={{ color: "red" }} onClick={() => showAlert(service)}>Delete Service</button>
                    </div>
                </div>)}

        </>
    )
}

export default ServiecDetailsPage