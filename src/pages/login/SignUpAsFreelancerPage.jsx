import React from 'react'
import logo from '../../resources/images/logo.png';
import '../../resources/css/login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const SignUpAsFreelancerPage = () => {
    const [Fname, setFnameReg] = useState("");
    const [Lname, setLnameReg] = useState("");
    const [email, setemailReg] = useState("");
    const [password, setPasswordReg] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    let navigator = useNavigate();

    // let authController = new AuthController();
    function handleChange() {
        setIsChecked(!isChecked);
    }
    const handlesignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/user/signup', {
                Fname,
                Lname,
                email,
                password,
                role: "freelancer",
                Fname,
                fieldOfWork:"null",
                country:"null",
                city:"null",
                phoneNo:"null",
                email,
                password,
                rating:4,
                about:"null",
                bio:"null",
                eduction:"null",
                experience:"null",
                skills:"null",
                cerficates:"null",
            });
            console.log(response.data);
            // navigator(`/dashboard`);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className='div-login-top'>
                <img src={logo} alt="" />
                <span>WISE PLATFORM</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='div-login-main'>
                    <span>Sign Up To Find Work</span>
                    <form className='form-login' onSubmit={handlesignup}>
                        <div>
                            <input type='text' placeholder='first name' onChange={(e) => {
                                setFnameReg(e.target.value);
                            }} />
                            <input type='text' placeholder='last name' onChange={(e) => {
                                setLnameReg(e.target.value);
                            }} />
                        </div>
                        <input type='email' placeholder='Your Email Adress' onChange={(e) => {
                            setemailReg(e.target.value);
                        }} />
                        <input type='password' placeholder='password (8 or more character)' onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }} />
                        <input type='text' placeholder='Country of Residense' />
                        <label>
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleChange}
                                style={{
                                    appearance: 'none',
                                    width: '16px',
                                    height: '16px',
                                    borderRadius: '50%',
                                    backgroundColor: isChecked ? '#0FA958' : 'white',
                                    border: '1px solid #D6D6D6',
                                    cursor: 'pointer',
                                }}
                            />
                            <span
                                style={{
                                    position: 'absolute',
                                    paddingLeft: '3px',
                                    display: isChecked ? 'block' : 'none',
                                    color: '#FFF',
                                    fontSize: '12px',
                                }}
                            >
                                {'\u2714'}
                            </span>
                            I agree with terms & conditions
                        </label>
                        <button className='btnDark' >Create Account</button>
                        <span className='textsignup'>Already have an account?<NavLink to='/login'>Log In</NavLink></span>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUpAsFreelancerPage