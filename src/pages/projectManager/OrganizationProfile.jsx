import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import "../../resources/css/freelancerProfile.css"
import person from "../../resources/images/Ellipse 15.png"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const OrganizationProfile = () => {
    let navigator = useNavigate();
    let onclickHAndller = () => {
        navigator(`/managerDashboard/OrganizationsPage`);
    }
    let freelancer = useSelector((state) => state.frrelancers.freelancer);
    let experiences = freelancer.experiences;
    let skills = freelancer.skills;
    let cerficates = freelancer.cerficates;
    return (
        <>
            <div className='headerDetails'>
                <ArrowBackIcon onClick={onclickHAndller} style={{ fontSize: "16px", cursor: "pointer" }} />
                <span>Back</span>
                <span>Organization`s Profile</span>
            </div>
            <div className='freelancerProfileContent'>
                <div>
                    <img src={person} alt="" />
                    <div>
                        <span>{freelancer.name}</span>
                        <span>{freelancer.fieldOfWork}</span>
                        <span>{freelancer.country}</span>
                        <div>
                            <SchoolOutlinedIcon />
                            <CallOutlinedIcon />
                            <MailOutlineIcon />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <span>Bio</span>
                        <p>{freelancer.bio}</p>
                        <span>Contact Info’s</span>
                        <div><MailOutlineIcon />{freelancer.email}</div>
                        <div><CallOutlinedIcon />+{freelancer.phoneNo}</div>
                    </div>
                    <div>
                        <span>Education</span>
                        <text>{freelancer.eduction}</text>
                        <span>Experiences</span>
                        <ul>
                            {experiences.map((element) => (<li>{element}</li>))}
                        </ul>
                        <span>Skills</span>
                        <ul>
                            {skills.map((element) => (<li>{element}</li>))}
                        </ul>
                        <span>Certificates</span>
                        <ul>
                            {cerficates.map((element) => (<li>{element}</li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrganizationProfile