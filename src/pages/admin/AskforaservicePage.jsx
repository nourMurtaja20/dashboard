import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useSelector } from 'react-redux';
import axios from 'axios'
const AskforaservicePage = () => {
  let service = useSelector((state) => state.services.service);
  let navigator = useNavigate();
  const [fullName, setfullName] = useState("");
  const [organizationName, setorganizationName] = useState("");
  const [position, setposition] = useState("");
  const [email, setemail] = useState("");
  const [servic, setservic] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [path, setpath] = useState("");
  const [prefferedDeliveryDate, setprefferedDeliveryDate] = useState("");
  const [requirements, setrequirements] = useState("");
  let onSubmitHandller = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/question/', {
        fullName,
        organizationName,
        position,
        email,
        servic,
        mobileNumber,
        prefferedDeliveryDate,
        path,
        requirements
      });
      window.alert("success")

    } catch (error) {
      console.error(error);
    }
  };
  let onclickHandller = () => {
    navigator(`/dashboard/Services`);
  };
  return (
    <>
      <div className='headerDetails'>
        <ArrowBackIcon style={{ fontSize: "16px", cursor: "pointer" }} onClick={onclickHandller} />
        <span>Back</span>
        <span>Ask for a service</span>
      </div>
      <form className='form' onSubmit={onSubmitHandller}>
        <div className='form-group'>
          <label>Full Name</label>
          <input type='text' placeholder='Full Name' onChange={(e) => { setfullName(e.target.value); }} />
        </div>
        <div className='form-group'>
          <label>Organization Name</label>
          <input type='text' placeholder='Organization Name' onChange={(e) => { setorganizationName(e.target.value); }} />
        </div>
        <div className='form-group'>
          <label>Position</label>
          <input type='text' placeholder='Position' onChange={(e) => { setposition(e.target.value); }} />
        </div>
        <div className='form-group'>
          <label>E-mail Address</label>
          <input type='text' placeholder='name@gmail.com' onChange={(e) => { setemail(e.target.value); }} />
        </div>
        <div className='form-group'>
          <label>Service</label>
          <div class="custom-select">
            <select>
              <option value={service.serviceName} onChange={(e) => { setservic(e.target.value); }}>{service.serviceName}</option>
              <option value="1">..</option>
            </select>
          </div>
        </div>
        <div className='form-group'>
          <label>Mobile Number</label>
          <input type='text' placeholder='0597105136' onChange={(e) => { setmobileNumber(e.target.value); }} />
        </div>
        <div className='form-group'>
          <label>Preffered Delivery Date</label>
          <input type='text' placeholder='03.03.2023' onChange={(e) => { setprefferedDeliveryDate(e.target.value); }} />
        </div>
        <div className='form-group'>
          <label>Attatchments</label>
          <div>Add Attachment
            <CloudUploadOutlinedIcon />
            <input type='file' placeholder='Add Attachment' onChange={(e) => { setpath(e.target.value); }} />
          </div>
        </div>
        <section>
          <label>Requirements</label>
          <textarea name="" id="" cols="30" rows="10" onChange={(e) => { setrequirements(e.target.value); }}></textarea>
        </section>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default AskforaservicePage