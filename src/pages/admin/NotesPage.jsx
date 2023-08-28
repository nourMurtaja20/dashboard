import React, { useEffect } from 'react'
import "../../resources/css/note.css"
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import { useDispatch, useSelector } from 'react-redux';
import ProjectController from '../../controllers/project-controller';
import DonorController from '../../controllers/donor-controller';
import Serviceontroller from '../../controllers/service-controller';
import { projectActions } from '../../redux/project-slic';
import { donorActions } from '../../redux/donor-slic';
import { serviceActions } from '../../redux/service-slic';
import imgdata from "../../resources/images/nodata.png"
const NotesPage = () => {
  let savedDataprojects = useSelector((state) => state.projects.savedData);
  let savedDatadonors = useSelector((state) => state.donors.savedData);
  console.log(savedDatadonors);
  let donors = useSelector((state) => state.donors.data);
  console.log(donors);

  let savedDataservices = useSelector((state) => state.services.savedData);
  let dispatch = useDispatch();
  let projectcontroller = new ProjectController();
  let donorcontroller = new DonorController();
  let servicecontroller = new Serviceontroller();
  let onupdate = async (project) => {
    console.log(project);
    let updatedProject = {
      ...project,
      isSave: !project.isSave
    };
    console.log(updatedProject);
    let response = await projectcontroller.update(project.id, project);
    if (response) {
      dispatch(projectActions.updateIsSave(updatedProject));
      let projects = await projectcontroller.readSave();
      dispatch(projectActions.readsave(projects));
    } else {
      console.log("error");
    }
  }
  let onupdatedonor = async (donor) => {
    console.log(donor);
    let updatedDonor = {
      ...donor,
      isSave: !donor.isSave
    };
    let response = await donorcontroller.update(donor.id);
    if (response) {
      dispatch(donorActions.updateIsSave(updatedDonor));
      let donors = await donorcontroller.readSave();
      dispatch(donorActions.readsave(donors));
    } else {
      console.log("error");
    }
  }
  let onClickSaveHandller = async (service) => {
    let updatedService = {
      ...service,
      isSave: !service.isSave
    };
    let response = await servicecontroller.update(service.id);
    if (response) {
      dispatch(serviceActions.updateIsSave(updatedService));
      let services = await servicecontroller.readSave();
      dispatch(serviceActions.readsave(services));
    } else {
      console.log("error");
    }
  }
  let fetchData = async () => {
    if (savedDataprojects.length === 0 || savedDatadonors.length === 0 || savedDataservices.length === 0) {
      let projects = await projectcontroller.readSave();
      let donors = await donorcontroller.readSave();
      let services = await servicecontroller.readSave();
      dispatch(projectActions.readsave(projects));
      dispatch(donorActions.readsave(donors));
      dispatch(serviceActions.readsave(services));
    }
  }
  let isEmpty = (savedDataprojects.length === 0) && (savedDatadonors.length === 0) && (savedDataservices.length === 0);
  console.log(isEmpty);
  useEffect(() => { fetchData(); }, []);
  return (
    <>
      <span className='mainTitle'>Saved Notes</span>
      {isEmpty ?
        <div className='divnodata'>
          <img src={imgdata} alt="no data" />
          <p>You have no Data to preview</p>
        </div> :
        <div>
          <span className='noteType'>Projects</span>
          <table className='table'>
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Field</th>
                <th>Founder Country</th>
                <th>Focus Country</th>
                <th>Deadline</th>
                <th>Save</th>
              </tr>
            </thead>
            <TableBody>
              {savedDataprojects
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id} >
                      <TableCell align='center'>
                        {row.projectName}
                      </TableCell>
                      <TableCell align='center'>
                        {row.field}
                      </TableCell>
                      <TableCell align='center'>
                        {row.founderCountry}
                      </TableCell>
                      <TableCell align='center'>
                        {row.focusCountry}
                      </TableCell>
                      <TableCell align='center'>
                        {row.deadline}
                      </TableCell>
                      <TableCell>
                        <TurnedInOutlinedIcon style={{ cursor: "pointer" }} onClick={() => onupdate(row)} />
                      </TableCell>
                    </TableRow>
                  );
                })
              }
            </TableBody >
          </table >
          <span className='noteType'>Donors</span>
          <table className='table'>
            <thead>
              <tr>
                <th>Donors Name</th>
                <th>Scope of Work</th>
                <th>Focus Country</th>
                <th>Save</th>
              </tr>
            </thead>
            <TableBody>
              {savedDatadonors
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id} >
                      <TableCell align='center'>
                        {row.donorName}
                      </TableCell>
                      <TableCell align='center'>
                        {row.scopeOfWork}
                      </TableCell>
                      <TableCell align='center'>
                        {row.focusCountry}
                      </TableCell>
                      <TableCell>
                        <TurnedInOutlinedIcon style={{ cursor: "pointer" }} onClick={() => onupdatedonor(row)} />
                      </TableCell>
                    </TableRow>
                  );
                })
              }
            </TableBody >
          </table >
          <span className='noteType'>Services</span>
          <table className='table'>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Type of Service</th>
                <th>Detail</th>
                <th>Save</th>
              </tr>
            </thead>
            <TableBody>
              {savedDataservices
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id} >
                      <TableCell align='center'>
                        {row.serviceName}
                      </TableCell>
                      <TableCell align='center'>
                        {row.serviceName}
                      </TableCell>
                      <TableCell align='center'>
                        {row.description}
                      </TableCell>
                      <TableCell>
                        <TurnedInOutlinedIcon style={{ cursor: "pointer" }} onClick={() => onClickSaveHandller(row)} />
                      </TableCell>
                    </TableRow>
                  );
                })
              }
            </TableBody >
          </table >
        </div>}

    </>)
}

export default NotesPage