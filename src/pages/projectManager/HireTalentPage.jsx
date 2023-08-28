import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../resources/AdminCSS/freelancerProfile.css"
import { useNavigate } from 'react-router-dom';
const HireTalentPage = () => {
    let navigator = useNavigate();
    let onclickHAndller = () => {
        navigator(`/managerDashboard/Freelancers`);
    }
    return (
        <>
            <div className='headerDetails'>
                <ArrowBackIcon onClick={onclickHAndller} style={{ fontSize: "16px", cursor: "pointer" }} />
                <span>Back</span>
                <span>Hire a talent</span>
            </div>
            <form className='hiretalent'>
                <span>Talent Details</span>
                <div>
                    <input type="text" placeholder='Full Name' />
                    <input type="text" placeholder='Mobile Number' />
                </div>
                <div>
                    <div class="custom-select" >
                        <select>
                            <option value="All">All</option>
                            <option value="0">palestain</option>
                        </select>
                    </div>
                    <input type="text" placeholder='Email Address' />
                </div><div>
                    <input type="text" placeholder='Role' />
                    <input type="text" placeholder='Country' />
                </div>
                <span>Project Details</span>
                <input type="text" placeholder='Project Name' />
                <input type="text" placeholder='Project Field of work' />
                <input type="text" placeholder='Founder Country' />
                <input type="text" placeholder='Focus Country' />
                <input type="text" placeholder='Project Deadline' />
                <textarea rows={10}></textarea>
                <div>
                    <button className='btnDark'>Hire Talent</button>
                </div>

            </form>
        </>
    )
}

export default HireTalentPage