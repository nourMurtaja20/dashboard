import React, { useState } from 'react'
import logo from '../../resources/images/logo.png';
import '../../resources/css/login.css';
// import SignUpPage from "./SignUpAsClientPage";
import { NavLink, useNavigate } from 'react-router-dom';
const JoinasPage = () => {
    let navigate = useNavigate();
    const [role, setRole] = useState('');

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleSignUp = () => {
        if (role === 'freelancer') {
            navigate('/signup-freelancer');
        } else if (role === 'client') {
            navigate('/signup-client');
        } else {
            console.error('Invalid role');
        }
    };
    return (
        <>
            <div className='div-login-top'>
                <img src={logo} alt="" />
                <span>WISE PLATFORM</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='div-login-main'>
                    <span>Join as a agence or freelancer</span>
                    <div>
                        <label htmlFor="client">
                            <input type="radio" id="client" name="user-type" value="client" onChange={handleRoleChange} />
                            I’m a Client,<br /> looking for worker
                        </label>
                        <label htmlFor="freelancer">
                            <input type="radio" id="freelancer" name="user-type" value="freelancer" onChange={handleRoleChange} />
                            I’m a freelancer, <br /> looking for work
                        </label>
                    </div>
                    <button className='btnDark' onClick={handleSignUp}>create account</button>
                    <p className='textsignup'>Already have an account?<NavLink to='/login'>Log In</NavLink></p>
                </div >
            </div >
        </>
    )
}

export default JoinasPage