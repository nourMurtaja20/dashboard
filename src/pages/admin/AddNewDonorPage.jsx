import React, { useRef } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../resources/AdminCSS/openProject.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DonorController from '../../controllers/donor-controller';
import Donor from '../../models/Donor';
import { donorActions } from '../../redux/donor-slic';
const AddNewDonorPage = () => {
    let aboutRef = useRef();
    let scopeOfWorkRef = useRef();
    let focusCountryRef = useRef();
    let workHistory = useRef();
    let navigator = useNavigate();
    let dispatch = useDispatch();
    let donorController = new DonorController();
    let onclickHandller = () => {
        navigator(`/adminDashboard/PotentialDonors`);
    }
    let checkData = () => {
        if (aboutRef.current.value != "" &&
            scopeOfWorkRef.current.value != "" &&
            focusCountryRef.current.value != "" &&
            workHistory.current.value != "") {
            return true;
        }
        alert("Enter required data")
        return false;
    }
    let clear = () => {
        aboutRef.current.value = "";
        scopeOfWorkRef.current.value = "";
        focusCountryRef.current.value = "";
        workHistory.current.value = "";
    }
    let save = async () => {
        let donor = new Donor("https://picsum.photos/50", "donor1", scopeOfWorkRef.current.value, focusCountryRef.current.value, aboutRef.current.value, workHistory.current.value);
        let newdonorId = await donorController.create(donor);
        console.log(newdonorId)
        if (newdonorId) {
            donor.newdonorId = newdonorId;
            dispatch(donorActions.create(donor));
            clear();
        }
    }
    let onaddProjectHandller = (event) => {
        event.preventDefault();
        if (checkData()) {
            save();
            navigator(`/adminDashboard/PotentialDonors`);
        }
    }
    return (
        <>
            <div className='headerDetails'>
                <ArrowBackIcon style={{ fontSize: "16px", cursor: "pointer" }} onClick={onclickHandller} />
                <span>Back</span>
                <span>Add a new Donor Details</span>
            </div>
            <form className='div-addDonor' onSubmit={onaddProjectHandller}>
                <span>About</span>
                <textarea type="text" placeholder='Type a brief about the donor.' ref={aboutRef}></textarea>
                <span>Fieds of work:y</span>
                <textarea type="text" placeholder='Type a brief about the donor.' ref={scopeOfWorkRef}></textarea>
                <span>Countries we provide our services:</span>
                <textarea type="text" placeholder='Type a brief about the donor.' ref={focusCountryRef}></textarea>
                <span>Our work History:</span>
                <textarea type="text" placeholder='Type a brief about the donor.' ref={workHistory}></textarea>
                <div>
                    <button className='btnDark'>Add Donor</button>
                </div>
            </form >
        </>
    )
}

export default AddNewDonorPage