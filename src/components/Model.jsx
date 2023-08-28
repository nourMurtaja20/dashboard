import React from 'react'
import Modal from 'react-modal';
import { useState } from 'react';

const Model = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = (props) => {
        setIsOpen(true);
        // dispatch(frrelancerActions.setfreelancer(props));
    }

    const handleClose = () => {
        setIsOpen(false);
    };
    let onclickHandller = () => {
        navigator(`/dashboard/openProject/ProjectDetails`);
    }
    return (
        <Modal isOpen={isOpen} onRequestClose={handleClose} className="side-screen" overlayClassName="overlay">
            <h2 className='h2-apply'>Applying for a Project</h2>
            <div className="job-details">
                <div className="job-details-header">
                    <span>About Project</span>
                </div>
                <p></p>
                <span>Deadline</span>
                <span>30.07.2023</span>
                <span>Country</span>
                <span>United Arab Emarates</span>
                <div className="job-details-footer">
                    <button className='btnDark' onClick={onclickHandller}>Show More</button>
                    <button className='btnDark' onClick={handleClose}>Cancel</button>
                </div>
                {/* <button onClick={handleClose} className="close-btn">X</button> */}
            </div>
        </Modal>

    );
}

export default Model