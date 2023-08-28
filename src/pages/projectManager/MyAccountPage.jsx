import React, { useState } from 'react'
import person from "../../resources/images/Ellipse 15.png"
import "../../resources/css/account.css"
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Modal from 'react-modal';
import '../../resources/css/SideScreen.css';
import Switch from '@mui/material/Switch';
import NorthIcon from '@mui/icons-material/North';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const MyAccountPage = () => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: " #EDEDED",
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: "#1E1E2D",
        },
    }));
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const mytabsStyle = {
        color: 'black',
        textTransform: "none",
    };
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };
    const [editing, setEditing] = useState(false);
    const handleEditClick = () => {
        setEditing(true);
    };
    const handleSaveClick = () => {
        // Perform save or update logic here
        setEditing(false);
    };
    return (
        <>
            <span className='mainTitle'>My Account</span>
            <div className='accountContent'>
                <div className='div-top'>
                    <img src={person} alt="" />
                    <div className='div-top-col'>
                        <span>Ali Hamed</span>
                        <div>
                            <CommentOutlinedIcon />
                            <span>Proposal Writer</span>
                            <PersonOutlineOutlinedIcon />
                            <span>Freelancer</span>
                        </div>
                        <BorderLinearProgress variant="determinate" value={50} />
                        <div>
                            <span>Profile Completion</span>
                            <span>80%</span>
                        </div>
                    </div>
                    <div className='div-top-border'>
                        <span>40</span>
                        <span>Project</span>
                    </div>
                    <div className='div-top-border'>
                        <span>85%</span>
                        <span>Successful Rate</span>
                    </div>
                </div>

                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', marginLeft: '100px', marginRight: '10px' }} >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            <Tab style={mytabsStyle} label="Personal Information" {...a11yProps(0)} />
                            <Tab style={mytabsStyle} label="Settings" {...a11yProps(1)} />
                            <Tab style={mytabsStyle} label="Security" {...a11yProps(2)} />
                            <Tab style={mytabsStyle} label="Billing & Payments" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    {editing ?
                        (<TabPanel value={value} index={0} >
                            <form>
                                <div style={{ display: "flex" }}>
                                    <div className='div-tab-content'>
                                        <section className='div-tab-edit'>
                                            <span>Full Name</span>
                                            <span>Role</span>
                                            <span>Country</span>
                                            <span>City</span>
                                            <span>Phone Number</span>
                                            <span>E-mail Address</span>
                                            <span>Website</span>
                                            <span>Education</span>

                                        </section>
                                        <div>
                                            <input placeholder='Ali' />
                                            <input placeholder='Proposal Writer' />
                                            <input placeholder='Palestine' />
                                            <input placeholder='Gaza' />
                                            <input placeholder='+970599224877' />
                                            <input placeholder='alihamed2@gmail.com' />
                                            <input placeholder='https://techshef.com' />
                                            <input placeholder='Bachelor of Maltimedia - 2020' />
                                        </div>
                                    </div>
                                    <div className='div-tab-content2'>
                                        <section>
                                            <span>BIO</span>
                                            <textarea cols="30" rows="4">Ali Hamed is a proposal writer with 3 years of experience and I’m working to achieve my goals with high confidence</textarea>
                                        </section>
                                        <section>
                                            <span style={{ marginRight: "20%" }}>Experience</span>
                                            <textarea cols="30" rows="4">
                                                lkmlkmlkmlmk
                                            </textarea>
                                        </section>
                                        <section>
                                            <span style={{ marginRight: "28%" }}>Skills</span>
                                            <textarea cols="30" rows="4">
                                                lkmlkmlkmlmk
                                            </textarea>
                                        </section>
                                        <section>
                                            <span style={{ marginRight: "20%" }}>Certificates</span>
                                            <textarea cols="30" rows="4">
                                                lkmlkmlkmlmk
                                            </textarea>
                                        </section>
                                        <section>
                                            <span >Profile image</span>
                                            <label class="label-file" for="file">
                                                <input type="file" id="file" accept="image/*" />
                                                <NorthIcon style={{ color: "#505050" }} />
                                            </label>
                                        </section>
                                    </div>
                                </div>
                                <div className='div-bottom'>
                                    <button onClick={handleSaveClick}>Save Changes</button>
                                </div>
                            </form>
                        </TabPanel>) :
                        (<TabPanel value={value} index={0} >
                            <div style={{ display: "flex" }}>
                                <div className='div-tab-content'>
                                    <div>
                                        <span>Full Name</span>
                                        <span>Role</span>
                                        <span>Country</span>
                                        <span>City</span>
                                        <span>Phone Number</span>
                                        <span>E-mail Address</span>
                                        <span>Website</span>
                                    </div>
                                    <div>
                                        <span>Ali Ahmed</span>
                                        <span>Proposal Writer</span>
                                        <span>Palestine</span>
                                        <span>Gaza</span>
                                        <span>+970599224877</span>
                                        <span>alihamed2@gmail.com</span>
                                        <span>https://techshef.com</span>
                                    </div>
                                </div>
                                <div className='div-tab-content2'>
                                    <section>
                                        <span>BIO</span>
                                        <p>Ali Hamed is a proposal writer with 3 years of experience and I’m working to achieve my goals with high confidence</p>
                                    </section>
                                    <section>
                                        <span>Education</span>
                                        <p>Bachelor of Maltimedia - 2020</p>
                                    </section>
                                    <section>
                                        <span>Experience</span>
                                        <ul>
                                            <li>Content way - Proposal writer</li>
                                            <li>Content way - Proposal writer</li>
                                            <li>Content way - Proposal writer</li>
                                        </ul>
                                    </section>
                                    <section>
                                        <span>Skills</span>
                                        <ul>
                                            <li>Content way - Proposal writer</li>
                                            <li>Content way - Proposal writer</li>
                                        </ul>
                                    </section>
                                    <section>
                                        <span className='Certificates'>Certificates</span>
                                        <ul>
                                            <li>Content way - Proposal writer</li>
                                            <li>Content way - Proposal writer</li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                            <div className='div-bottom'>
                                <button onClick={handleEditClick}>Edit Profile</button>
                                <button onClick={handleOpen}>Delete Account</button>
                            </div>
                        </TabPanel>)}
                    <TabPanel value={value} index={1}>
                        <div className='div-tab-content'>
                            <div style={{ rowGap: "40px" }}>
                                <span>Language</span>
                                <span>Communicate By</span>
                                <span>Allow Notifications</span>
                            </div>
                            <div>
                                <div class="custom-select">
                                    <select>
                                        <option value="0">English</option>
                                        <option value="1">..</option>
                                    </select>
                                </div>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio sx={{ '&.Mui-checked': { color: 'black' } }} />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio sx={{ '&.Mui-checked': { color: 'black' } }} />} label="Male" />
                                    </RadioGroup>
                                </FormControl>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio sx={{ '&.Mui-checked': { color: 'black' } }} />} label="Yes" />
                                        <FormControlLabel value="male" control={<Radio sx={{ '&.Mui-checked': { color: 'black' } }} />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <button className='save-seeting'>Save Changes</button>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className='div-tab-content'>
                            <section className='divSecurity'>
                                <span>Current Password</span>
                                <span>New Password</span>
                                <span>Confirm New Password</span>
                                <span>Sign in Text Message notification</span>
                            </section>
                            <div>
                                <form action="" className='formSecurity'>
                                    <input type="password" placeholder='**********' />
                                    <input type="password" placeholder='**********' />
                                    <input type="password" placeholder='**********' />
                                    <Switch defaultChecked color="default" />
                                </form>
                            </div>
                        </div>
                        <button className='save-seeting'>Save Changes</button>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <div className='div-billing'>
                            <span>Billing Methods</span>
                            <span>You have not set any billing method Yet</span>
                            <button>Add A new Billing Method</button>
                            <span>Payment Methods</span>
                            <span>Withdraw your finds by:</span>
                        </div>
                    </TabPanel>

                </Box>

                <Modal isOpen={isOpen} onRequestClose={handleClose} className="side-screen-delete" overlayClassName="overlay">
                    <h2 className='h2-apply'>Delete Account</h2>
                    <p className='p-delete'>Are you sure to Delete your account data and exit the system?</p>
                    <div className="job-details-footer">
                        <button className='btnDark' style={{ background: 'red' }}>Yes,Delete it</button>
                        <button className='btnDark' style={{ background: 'white', color: 'black' }} onClick={handleClose}>Cancel</button>
                    </div>
                    {/* <button onClick={handleClose} className="close-btn">X</button> */}

                </Modal>
            </div>
        </>
    )
}

export default MyAccountPage