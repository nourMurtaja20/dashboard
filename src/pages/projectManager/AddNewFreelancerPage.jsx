import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../resources/AdminCSS/freelancerProfile.css"
import { useNavigate } from 'react-router-dom';
import EditNoteIcon from '@mui/icons-material/EditNote';
const AddNewFreelancerPage = () => {
    let navigator = useNavigate();
    let onclickHAndller = () => {
        navigator(`/managerDashboard/Freelancers`);
    }
    return (
        <>
            <div className='headerDetails'>
                <ArrowBackIcon onClick={onclickHAndller} style={{ fontSize: "16px", cursor: "pointer" }} />
                <span>Back</span>
                <span>Freelancer's Profile</span>
            </div>
            <form className='freelancerProfileContent'>
                <div>
                    <label class="label-file" for="file">
                        <input type="file" id="file" accept="image/*" />
                        <EditNoteIcon style={{ color: "#505050" }} />
                    </label>
                    <div>
                        <div className='div-colum'>
                            <input type="text" placeholder='Full Name' />
                            <div class="custom-select">
                                <select>
                                    <option>Talent Type</option>
                                </select>
                            </div>
                            <input type="text" placeholder='Role' />
                        </div>
                    </div>
                    <div>
                        <div className='div-colum'>
                            <input type="text" placeholder='Mobile Number' />
                            <input type="text" placeholder='Email Address' />
                            <input type="text" placeholder='Country' />
                        </div>
                    </div>
                </div>
                <section>
                    <div>
                        <span>Bio</span>
                        <textarea cols="25" rows="5">Type here</textarea>
                        <span>Contact Info’s</span>
                        <textarea cols="25" rows="5">Type here</textarea>
                    </div>
                    <div>
                        <span>Education</span>
                        <input type="text" placeholder='Type your academic role' />
                        <span>Experiences</span>
                        <textarea cols="35" rows="5">Type here</textarea>
                        <span>Certificates</span>
                        <textarea cols="35" rows="5">Type here</textarea>
                        <span>Skills</span>
                        <textarea cols="35" rows="5">Type here</textarea>
                        <div>
                            <button className='btnDark'>Add a Freelancer Profile</button>
                        </div>
                    </div>
                </section>
            </form>
        </>
    )
}

export default AddNewFreelancerPage