import React, { useEffect, useState } from 'react'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "../../resources/css/openProject.css"
import Modal from 'react-modal';
import '../../resources/css/SideScreen.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import ProjectController from '../../controllers/project-controller';
import { projectActions } from '../../redux/project-slic';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
import image1 from '../../resources/images/Ellipse 15.png';
import Swal from 'sweetalert2';

Modal.setAppElement('#root');

const OpenProjectPage = () => {
    const columns = [
        { id: 'id', label: '#' },
        { id: 'owner', label: 'owner' },
        { id: 'ProjectName', label: 'ProjectName' },
        {
            id: 'Field',
            label: 'Field',
        },
        {
            id: 'FounderCountry',
            label: 'FounderCountry',
        },
        {
            id: 'FocusCountry',
            label: 'FocusCountry',
        }, {
            id: 'Deadline',
            label: 'Deadline',
        }, {
            id: 'status',
            label: 'Status',
        }, {
            id: 'save',
            label: 'Save',
        }
    ];

    //for navigator
    let navigator = useNavigate();
    let onclickHandller = () => {
        navigator(`/adminDashboard/openProject/ProjectDetails`);
    }
    let onclickMyprojectHandller = () => {
        navigator(`/adminDashboard/openProject/addnew`);

    }
    //for side menu 
    let project = useSelector((state) => state.projects.project);
    let projectsfilter = useSelector((state) => state.projects.filterdData);
    let projects = useSelector((state) => state.projects.data);
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = (project) => {
        setIsOpen(true);
        dispatch(projectActions.setProject(project));
    };
    const handleClose = () => {
        setIsOpen(false);
    };

    let dispatch = useDispatch();
    let projectcontroller = new ProjectController();
    const showAlert = (project) => {
        Swal.fire({
            title: 'Are you sure?',
            // text: 'This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // Code to execute if the user confirms the action
                Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
                let result = projectcontroller.delete(project.id);
                if (result) {
                    dispatch(projectActions.delete(project.id));
                } else {
                    console.log("error");
                }
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Code to execute if the user cancels the action
                Swal.fire('Cancelled', 'Your item  is safe :)', 'info');
            }
        });
    };

    let onfeildFilterHandler = (event) => {
        dispatch(projectActions.filterByField(event.target.value));
    };
    let onareaFilterHandler = (event) => {
        dispatch(projectActions.filterByGeographicArea(event.target.value));
    };
    let onstatusFilterHandler = (event) => {
        dispatch(projectActions.filterBystatus(event.target.value));
    };
    let onupdate = async (project) => {
        let updatedProject = {
            ...project,
            isSave: !project.isSave
        };
        let response = await projectcontroller.update(project.id);
        if (response) {
            dispatch(projectActions.updateIsSave(updatedProject));
        } else {
            console.log("error");
        }
    }

    let fetchData = async () => {
        if (projectsfilter.length === 0) {
            let projects = await projectcontroller.read();
            console.log(projects);
            dispatch(projectActions.read(projects));
        }
    }
    useEffect(() => { fetchData(); }, []);

    //for table Pagination
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const ImageTableCell = ({ src }) => (
        <TableCell align="center">
            <img src={image1} alt="avatar" width={50} height={50} />
        </TableCell>
    );
    return (
        <>
            <section className='sectionopen'>
                <span>Open Projects </span>
                <section class="section-filter">
                    <span>Owner</span>
                    <div class="custom-select">
                        <select>
                            <option value="All">All</option>
                            <option value="All">...</option>
                            <option value="All">....</option>
                        </select>
                    </div>
                    <span>Status</span>
                    <div class="custom-select">
                        <select onChange={onstatusFilterHandler}>
                            <option value="All">All</option>
                            <option value="oppened">oppened</option>
                            <option value="closed">closed</option>
                        </select>
                    </div>
                    <span>Filed</span>
                    <div class="custom-select">
                        <select onChange={onfeildFilterHandler}>
                            <option value="All">All</option>
                            {projects.map((element) => (<option value={element.field} key={element.id}>{element.field}</option>))}

                        </select>
                    </div>
                    <span>Focus Co.</span>
                    <div class="custom-select">
                        <select onChange={onareaFilterHandler}>
                            <option value="All">All</option>
                            {projects.map((element) => (<option value={element.focusCountry} key={element.id}>{element.focusCountry}</option>))}
                        </select>
                    </div>
                    {/* {typeUser === "freelancer" && (
                        <button className='btnDark' onClick={onclickMyprojectHandller}>مشاريعي</button>
                    )}
                    {typeUser === "admin" && (
                        <button className='btnDark' onClick={onclickMyprojectHandller}>إضافة مشاريع</button>
                    )}
                    {typeUser !== "freelancer" && typeUser !== "admin" && (
                        <button className='btnDark' onClick={onclickMyprojectHandller}>مشاريع</button>
                    )} */}
                    <button className='btnDark' onClick={onclickMyprojectHandller}>add Project</button>
                </section>
            </section>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column.id} align='center'>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {projectsfilter
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id} >
                                            <TableCell align='center' onClick={() => handleOpen(row)}>
                                                {parseInt(row.id)}
                                            </TableCell>
                                            <ImageTableCell src={row.imageSrc} onClick={() => handleOpen(row)} />
                                            <TableCell align='center' onClick={() => handleOpen(row)}>
                                                {row.projectName}
                                            </TableCell>
                                            <TableCell align='center' onClick={() => handleOpen(row)}>
                                                {row.field}
                                            </TableCell>
                                            <TableCell align='center' onClick={() => handleOpen(row)}>
                                                {row.founderCountry}
                                            </TableCell>
                                            <TableCell align='center' onClick={() => handleOpen(row)}>
                                                {row.focusCountry}
                                            </TableCell>
                                            <TableCell align='center' onClick={() => handleOpen(row)}>
                                                {row.deadline}
                                            </TableCell>
                                            <TableCell align='center' onClick={() => handleOpen(row)}>
                                                {/* {row.deadline} */} oppened
                                            </TableCell>
                                            <TableCell align='center'>
                                                {row.isSave ? <BookmarkIcon style={{ cursor: "pointer" }} onClick={() => onupdate(row)} /> : <TurnedInNotIcon style={{ cursor: "pointer" }} onClick={() => onupdate(row)} />}
                                                <EditNoteIcon />
                                                <DeleteOutlineIcon style={{ color: "red", marginRight: "30px", cursor: "pointer" }} onClick={() => showAlert(row)} />
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={projectsfilter.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <Modal isOpen={isOpen} onRequestClose={handleClose} className="side-screen" overlayClassName="overlay">
                <h2 className='h2-apply'>Applying for a Project</h2>
                <div className="job-details">
                    <div className="job-details-header">
                        <span>About Project</span>
                        <TurnedInNotIcon style={{ cursor: "pointer" }} />
                    </div>
                    <p>{project.about}</p>
                    <span>Deadline</span>
                    <span>{project.deadline}</span>
                    <span>Country</span>
                    <span>{project.focusCountry}</span>
                    <div className="job-details-footer">
                        <button className='btnDark' onClick={onclickHandller}>Show More</button>
                        <button className='btnwhite' onClick={handleClose}>Cancel</button>
                    </div>
                    {/* <button onClick={handleClose} className="close-btn">X</button> */}
                </div>
            </Modal>
        </>
    )
}

export default OpenProjectPage