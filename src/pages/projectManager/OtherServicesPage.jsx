import React, { useEffect } from 'react'
import "../../resources/AdminCSS/otherServices.css"
import Serviec from '../../components/Serviec'
import { useDispatch, useSelector } from 'react-redux'
// import ServiceController from '../controllers/service-controller'
import { serviceActions } from '../../redux/service-slic'
import ServiceController from '../../controllers/service-controller'
const OtherServicesPage = () => {
    let services = useSelector((state) => state.services.filterdData);
    console.log("services out side " + JSON.stringify(services));
    let dispatch = useDispatch();
    let serviceController = new ServiceController();
    let fetchservices = async () => {
        if (services.length == 0) {
            let services = await serviceController.read();
            dispatch(serviceActions.read(services));
            console.log("services inside" + JSON.stringify(services));
        }
    }
    useEffect(() => { fetchservices(); }, []);
    return (
        <>
            <div className='div-services'>
                <span>Other Services</span>
            </div>
            <div className='servieces'>
                {services.map((element) => (<Serviec key={element.id} servic={element} />))}
            </div>
        </>
    )
}

export default OtherServicesPage