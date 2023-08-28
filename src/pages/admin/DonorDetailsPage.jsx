import React, { useRef, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../resources/AdminCSS/openProject.css"
import { useNavigate } from 'react-router-dom';
import DonorController from '../../controllers/donor-controller';
import { useDispatch, useSelector } from 'react-redux';
import { donorActions } from '../../redux/donor-slic';
import Donor from '../../models/Donor';

const DonorDetails = () => {
    let scopeOfWorkRef = useRef();
    let workHistoryRef = useRef();
    let aboutRef = useRef();
    let focusCountryRef = useRef();
    let navigator = useNavigate();
    let dispatch = useDispatch();
    let donorcontroller = new DonorController();
    let donor = useSelector((state) => state.donors.donor);

    let onclickHandller = () => {
        navigator(`/adminDashboard/PotentialDonors`);
    }
    const [editing, setEditing] = useState(false);
    const handleEditClick = () => {
        setEditing(true);
    };
    const handleSaveClick = () => {
        // Perform save or update logic here
        setEditing(false);
    };
    let clear = () => {
        scopeOfWorkRef.current.value = "";
        workHistoryRef.current.value = "";
        aboutRef.current.value = "";
        focusCountryRef.current.value = "";
    }
    let save = async () => {
        let updateDonor = new Donor("https://picsum.photos/50", "donor1", scopeOfWorkRef.current.value, focusCountryRef.current.value, aboutRef.current.value, workHistoryRef.current.value);
        updateDonor.id = donor.id;
        let newprojectId = await donorcontroller.edit(updateDonor);
        if (newprojectId) {
            dispatch(donorActions.update(updateDonor));
            clear();
            setEditing(false);
        }
    }
    let onupdateHandller = (event) => {
        event.preventDefault();
        save();

    }
    let onDeleteHandller = async (donor) => {
        let result = await donorcontroller.delete(donor.id);
        if (result) {
            dispatch(donorActions.delete(donor.id));
        } else {
            console.log("error");
        }
    }
    return (
        <>
            <div className='headerDetails'>
                <ArrowBackIcon style={{ fontSize: "16px", cursor: "pointer" }} onClick={onclickHandller} />
                <span>Back</span>
                <span>{donor.donorName} Details</span>
            </div>
            {editing ?
                (<form className='div-addDonor'>
                    <span>About</span>
                    <textarea type="text" placeholder={donor.about} ref={aboutRef}></textarea>
                    <span>Fieds of work:y</span>
                    <textarea type="text" placeholder={donor.scopeOfWork} ref={scopeOfWorkRef}></textarea>
                    <span>Countries we provide our services:</span>
                    <textarea type="text" placeholder={donor.focusCountry} ref={focusCountryRef}></textarea>
                    <span>Our work History:</span>
                    <textarea type="text" placeholder={donor.workHistory} ref={workHistoryRef}></textarea>
                    <div>
                        <button className='btnDark' onClick={onupdateHandller}>Save Changes</button>
                        <button className='btnwhite' style={{ color: "red" }} onClick={() => onDeleteHandller(donor)} >Delete European Union Data</button>
                    </div>
                </form >
                ) :
                (<div className='projectDetailsContent'>
                    <div>
                        <h1 className='donorH1'>About</h1>
                        <p>{donor.about}</p>
                        <h1 className='donorH1'>Fieds of work:</h1>
                        <p>{donor.scopeOfWork}</p>
                        <h1 className='donorH1'>Countries we provide our services:</h1>
                        <ul>
                            <li>{donor.focusCountry}.</li>
                            {/* <li>Syria.</li>
                            <li>Iraq.</li>
                            <li>Yemen.</li> */}
                        </ul>
                        <h1 className='donorH1'>Our work History:</h1>
                        <ol>
                            <li>{donor.workHistory}</li>
                            <span>Gaza - Palestine - 2022</span>
                            {/* <li>Financing and implementation of the sea water desalination plant project.</li>
                            <span>Gaza - Palestine - 2022</span>
                            <li>Financing and implementation of the sea water desalination plant project.</li>
                            <span>Gaza - Palestine - 2022</span> */}
                        </ol>
                    </div>
                    <div>
                        <button className='btnDark'>Read More on Our Website</button>
                        <button className='btnwhite' onClick={handleEditClick}>Edit Donor’s Data</button>
                    </div>
                </div>)}

        </>
    )
}

export default DonorDetails