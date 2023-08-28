import React, { useState } from 'react'
import logo from '../../resources/images/logo.png';
import '../../resources/css/login.css';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginPage = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let navegator = useNavigate();
    let onclickHAndller = () => {
        navegator('/join');
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/user/login', {
                email,
                password
            });
            console.log(response.data);
            navegator(`/dashboard`);

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
                    <span>Log in to WISE PLATFORM</span>
                    <form className='form-login' onSubmit={handleLogin}>
                        <input type='email' placeholder='useaname or email' onChange={e => setEmail(e.target.value)} />
                        <input type='password' placeholder='password' onChange={e => setPassword(e.target.value)} />
                        <button className='btnDark'>login</button>
                        <span className='textLogin'><HorizontalRuleIcon />Don’t have an WISE PLATFORM account?<HorizontalRuleIcon /></span>
                        <button className='btnLight' onClick={onclickHAndller}>sing up</button>
                    </form>
                </div >
            </div >
        </>
    )
}

export default LoginPage