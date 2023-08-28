import React from 'react'
import imgserviec from "../resources/images/Rectangle 110689.png"
import imgserviec1 from "../resources/images/Rectangle 110689 (1).png"
import imgserviec2 from "../resources/images/Rectangle 110689 (2).png"
import imgserviec3 from "../resources/images/Rectangle 110689 (3).png"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { serviceActions } from '../redux/service-slic'

const Serviec = (props) => {
    // let data;
    // switch (type) {
    //     case "Guiding":
    //         data = {
    //             img: imgserviec,
    //             title: "Guiding & Consulting",
    //             subtitle: "Expert guidance and consulting for NGO fundraising and donor outreach.",

    //         };
    //         break;
    //     case "Writing":
    //         data = {
    //             img: imgserviec1,
    //             title: "Proposal Writing",
    //             subtitle: "Proposal writing services to help NGOs secure funding for their projects.",

    //         };
    //         break;
    //     case "Tailored":
    //         data = {
    //             img: imgserviec2,
    //             title: "Tailored Training Courses",
    //             subtitle: "Tailored training courses to enhance NGO fundraising and proposal writing skills.",

    //         };
    //         break;
    //     case "Reviewing":
    //         data = {
    //             img: imgserviec3,
    //             title: "Reviewing & Editing",
    //             subtitle: "Comprehensive reviewing and editing of NGO proposals for maximum impact.",

    //         };
    //         break;
    //     case "Training":
    //         data = {
    //             img: imgserviec,
    //             title: "Training Manuals Development",
    //             subtitle: "Development of effective training manuals for NGOs to facilitate their work.",

    //         };
    //         break;
    //     case "Donor":
    //         data = {
    //             img: imgserviec1,
    //             title: "Donor Mapping",
    //             subtitle: "Donor mapping to help NGOs identify potential donors and funding opportunities.",

    //         };
    //         break;
    //     default:
    //         break;
    // }
    let dispatch = useDispatch();
    let navigator = useNavigate();

    let onShowDetailHandler = () => {
        dispatch(serviceActions.setService(props.servic));
        navigator(`/dashboard/Services/ServiecDetail`);
    }
    return (
        <div className='serviec'>
            <img src={imgserviec} alt="" />
            <span>{props.servic.serviceName}</span>
            <span>{props.servic.description}</span>
            <div>
                <button onClick={onShowDetailHandler}>Show More</button>
            </div>
        </div>
    )
}

export default Serviec