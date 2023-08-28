import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../resources/css/openProject.css"
import { useNavigate } from 'react-router-dom';
const DonorDetails = () => {
    let navigator = useNavigate();
    let onclickHandller = () => {
        navigator(`/managerDashboard/PotentialDonors`);
    }
    return (
        <>
            <div className='headerDetails'>
                <ArrowBackIcon style={{ fontSize: "16px", cursor: "pointer" }} onClick={onclickHandller} />
                <span>Back</span>
                <span>European Union Details</span>
            </div>
            <div className='projectDetailsContent'>
                <div>
                    <h1 className='donorH1'>About</h1>
                    <p>The Communication Forum Association announces a bid to provide a hall, hospitality and meals for the implementation of the activities of the project to promote civil and political participation of youth in the Gaza Strip in partnership with the Norwegian People’s Aid NPA, in accordance with the general and special conditions of the tender. Below we list the conditions that must be met by everyone who wishes</p>
                    <h1 className='donorH1'>Fieds of work:</h1>
                    <p>The Communication Forum Association announces a bid to provide a hall, hospitality and meals for the implementation of the activities of the project to promote civil and political participation of youth in the Gaza Strip in partnership with the Norwegian People’s Aid NPA, in accordance with the general and special conditions of the tender. Below we list the conditions that must be met by everyone who wishes</p>
                    <h1 className='donorH1'>Countries we provide our services:</h1>
                    <ul>
                        <li>Palestine.</li>
                        <li>Syria.</li>
                        <li>Iraq.</li>
                        <li>Yemen.</li>
                    </ul>
                    <h1 className='donorH1'>Our work History:</h1>
                    <ol>
                        <li>Financing and implementation of the sea water desalination plant project.</li>
                        <span>Gaza - Palestine - 2022</span>
                        <li>Financing and implementation of the sea water desalination plant project.</li>
                        <span>Gaza - Palestine - 2022</span>
                        <li>Financing and implementation of the sea water desalination plant project.</li>
                        <span>Gaza - Palestine - 2022</span>
                    </ol>
                </div>
                <button>Read More on Our Website</button>
            </div>
        </>
    )
}

export default DonorDetails