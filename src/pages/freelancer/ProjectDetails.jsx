import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../resources/css/openProject.css"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProjectDetails = () => {
    let navigator = useNavigate();
    let onclickHandller = () => {
        navigator(`/dashboard/openProject`);
    }
    let project = useSelector((state) => state.projects.project);
    let steps = project.stepsApply;
    return (
        <>
            <div className='headerDetails'>
                <ArrowBackIcon style={{ fontSize: "16px", cursor: "pointer" }} onClick={onclickHandller} />
                <span>Back</span>
                <span>Project Details</span>
            </div>
            <div className='projectDetailsContent'>
                <span>{project.projectName}</span>
                <div>
                    <p>{project.details}</p>
                    <span>apply for the tender as follows: -</span>
                    <ul className='tender'>
                        {steps.map((element) => (<li>{element}</li>))}
                        {/* <li>The company must be officially registered with the tax departments.
                        </li>
                        <li>The supplier undertakes to present a valid discount certificate from the source.
                        </li>
                        <li>The winning supplier undertakes to provide an official tax invoice and receipt in the name of the Communication Forum Association.
                        </li>
                        <li>Each company wishing to apply for this bid can obtain a copy of the bid documents from the headquarters of the Communication Forum Association located in the Central Governorate - Nusseirat Camp - Camp 2 - Shuhada al-Quds Street, as of Saturday 04/08/2023 AD until Tuesday 18/ 04/2023 AD during official working hours from 09:00 am to 02:00 pm on all days of the week except for official holidays.
                        </li>
                        <li>The bid is received against a non-refundable fee of 100 shekels.
                        </li>
                        <li>The company applying for the bid must attach a bank check or a bid guarantee from a bank approved by the Palestinian Monetary Authority, amounting to 5% of the value of the submitted bid, valid for 90 days from the date of submitting the bid.
                        </li>
                        <li>Personal checks are not accepted and any bid that is not accompanied by a bank guarantee or bank check from a bank approved by the Palestinian Monetary Authority as mentioned above will be excluded.
                        </li>
                        <li>Personal checks are not accepted and any bid not accompanied by a bank guarantee as mentioned above will be excluded.
                        </li>
                        <li>This bid must be delivered stamped on each of its pages with the supplier's seal and signature.
                        </li>
                        <li>The association has the right to re-offer the tender in its current form or to add amendments without objection from any of the applicants. The Communication Forum Association has the right to cancel the bid without giving reasons.
                        </li>
                        <li>Communication Forum Association is not obligated to award the lowest prices without giving reasons.
                        </li>
                        <li>The Communication Forum Association has the right to divide the bid between more than one company and to refer the bid to each part separately.
                        </li>
                        <li>The fees for this advertisement for a day, in addition to the advertising fees on the Jobs website, are borne by the person who will be awarded the bid. In the case of division, the amount will be divided proportionally to the award amount.
                        </li>
                        <li>There will be an introductory meeting on Saturday 04/15/2023 AD at eleven in the morning at the association’s headquarters
                        </li>
                        <li>The last date for submitting the bid at the association’s headquarters is on Wednesday 04/19/2023 AD, before 12:00 noon at the association’s headquarters.
                        </li>
                        <li>The envelopes will be opened on Wednesday, corresponding to 04/19/2023 AD, at 12:00 noon, at the association’s headquarters.
                        </li>
                        <li>The bidding company must have an account in one of the banks approved by the Monetary Authority.
                        </li>
                        <li>The bidder must submit a blank copy of the company's invoice, the official receipt voucher, and a bank certificate proving that the company has a bank account in one of the banks approved by the Monetary Authority.
                        </li> */}
                    </ul>
                    <span>For more inquiries, you can visit the association's headquarters or call the following numbers: Tel. 08-2557209</span>
                    <span>Deadline</span>
                    <span>{project.deadline}</span>
                    <span>Country</span>
                    <span>{project.focusCountry}</span>
                </div>
                <button>Apply for this Project</button>
            </div>
        </>
    )
}

export default ProjectDetails