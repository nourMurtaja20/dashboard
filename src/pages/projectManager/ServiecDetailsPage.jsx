import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ServiceController from '../../controllers/service-controller';
import { serviceActions } from '../../redux/service-slic';

const ServiecDetailsPage = () => {
    let navigator = useNavigate();
    let dispatch = useDispatch();
    let serviceController = new ServiceController();
    let onclickHandller = () => {
        navigator(`/managerDashboard/Services`);
    }
    let onclickButtonHandller = () => {
        navigator(`/managerDashboard/Services/Askforaservice`);
    }
    let service = useSelector((state) => state.services.service);
    console.log(service.isSave);
    let guidances = service.guidance;
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
    return (
        <>
            <div className='headerDetails'>
                <ArrowBackIcon style={{ fontSize: "16px", cursor: "pointer" }} onClick={onclickHandller} />
                <span>Back</span>
                <span>{service.serviceName}</span>
            </div>
            <div className='serviecDetails'>
                <div>
                    <div>
                        <p>{service.details}</p>
                        <span>Our business development guidance includes:</span>
                        <ul>
                            {guidances.map((element) => (<li>{element}</li>))}
                        </ul>
                        <span>Why Choose Us:</span>
                        <p>{service.WhyChooseUs}</p>
                        <span>Pricing:</span>
                        <p>{service.Pricing}</p>
                    </div>
                    {service.isSave ? <TurnedInIcon style={{ cursor: "pointer" }} onClick={() => onClickSaveHandller(service)} /> : <BookmarkBorderIcon style={{ cursor: "pointer" }} onClick={() => onClickSaveHandller(service)} />}

                </div>
                <button className='buttonask' onClick={onclickButtonHandller}>Ask for this Service</button>
            </div>

        </>
    )
}

export default ServiecDetailsPage