import React, { useRef } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../resources/AdminCSS/freelancerProfile.css"
import { useNavigate } from 'react-router-dom';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useDispatch } from 'react-redux';
import FreelancerController from '../../controllers/freelancer-controller';
import Freelancer from '../../models/Freelancer';
import { frrelancerActions } from '../../redux/freelancer-slic';
const AddNewFreelancerPage = () => {
    let nameRef = useRef();
    let countryRef = useRef();
    let phoneNoRef = useRef();
    let emailRef = useRef();
    let bioRef = useRef();
    let eductionRef = useRef();
    let experiencesRef = useRef();
    let skillsRef = useRef();
    let cerficatesRef = useRef();
    let talentTypeRef = useRef();
    let navigator = useNavigate();
    let dispatch = useDispatch();
    let freelancercontroller = new FreelancerController();
    let onclickHAndller = () => {
        navigator(`/adminDashboard/Freelancers`);
    }
    let checkData = () => {
        if (nameRef.current.value != "" &&
            countryRef.current.value != "" &&
            phoneNoRef.current.value != "" &&
            emailRef.current.value != "" &&
            bioRef.current.value != "" &&
            eductionRef.current.value != "" &&
            experiencesRef.current.value != "" &&
            skillsRef.current.value != "" &&
            cerficatesRef.current.value != "" &&
            talentTypeRef.current.value != "") {
            return true;
        }
        alert("Enter required data")
        return false;
    }
    let save = async () => {
        let freelancer = new Freelancer(nameRef.current.value, "full stack", countryRef.current.value, "gaza", phoneNoRef.current.value, emailRef.current.value, "12545", 3, "ascs", bioRef.current.value, eductionRef.current.value, experiencesRef.current.value, skillsRef.current.value, cerficatesRef.current.value);
        let newdonorId = await freelancercontroller.create(freelancer);
        console.log(newdonorId)
        if (newdonorId) {
            freelancer.newdonorId = newdonorId;
            dispatch(frrelancerActions.create(freelancer));
        }
    }
    let onaddProjectHandller = (event) => {
        event.preventDefault();
        if (checkData()) {
            save();
            navigator(`/adminDashboard/Freelancers`);
        }
    }
    return (
        <>
            <div className='headerDetails'>
                <ArrowBackIcon onClick={onclickHAndller} style={{ fontSize: "16px", cursor: "pointer" }} />
                <span>Back</span>
                <span>Freelancer's Profile</span>
            </div>
            <form className='freelancerProfileContent' onSubmit={onaddProjectHandller}>
                <div>
                    <label class="label-file" for="file">
                        <input type="file" id="file" accept="image/*" />
                        <EditNoteIcon style={{ color: "#505050" }} />
                    </label>
                    <div>
                        <div className='div-colum'>
                            <input type="text" placeholder='Full Name' ref={nameRef} />
                            <div class="custom-select">
                                <select ref={talentTypeRef}>
                                    <option>Talent Type</option>
                                </select>
                            </div>
                            <input type="text" placeholder='Role' />
                        </div>
                    </div>
                    <div>
                        <div className='div-colum'>
                            <input type="text" placeholder='Mobile Number' ref={phoneNoRef} />
                            <input type="text" placeholder='Email Address' ref={emailRef} />
                            <input type="text" placeholder='Country' ref={countryRef} />
                        </div>
                    </div>
                </div>
                <section>
                    <div>
                        <span>Bio</span>
                        <textarea cols="25" rows="5" ref={bioRef}>Type here</textarea>
                        <span>Contact Info’s</span>
                        <textarea cols="25" rows="5">Type here</textarea>
                    </div>
                    <div>
                        <span>Education</span>
                        <input type="text" placeholder='Type your academic role' ref={eductionRef} />
                        <span>Experiences</span>
                        <textarea cols="35" rows="5" ref={experiencesRef}>Type here</textarea>
                        <span>Certificates</span>
                        <textarea cols="35" rows="5" ref={cerficatesRef}>Type here</textarea>
                        <span>Skills</span>
                        <textarea cols="35" rows="5" ref={skillsRef}>Type here</textarea>
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