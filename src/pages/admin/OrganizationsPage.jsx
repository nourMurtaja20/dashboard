import React, { useEffect, useState } from 'react'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
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
import '../../resources/AdminCSS/SideScreen.css';
import { frrelancerActions } from '../../redux/freelancer-slic';
import { useDispatch, useSelector } from "react-redux";
import FreelancerController from '../../controllers/freelancer-controller';
import Rating from '@mui/material/Rating';
import imgperson from '../../resources/images/Ellipse 15.png';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

Modal.setAppElement('#root');

const OrganizationsPage = () => {
    const columns = [
        { id: 'id', label: '#' },
        { id: 'Organization', label: 'Organization' },
        { id: 'Role', label: 'Role' },
        { id: 'Country', label: 'Country' },
        { id: 'Rating', label: 'Rating' },
        { id: 'action', label: 'Action', }
    ];

    //for navigator
    let navigator = useNavigate();
    let onclickHandller = () => {
        navigator(`/adminDashboard/OrganizationProfile`);
    }

    //for side menu 
    let freelancersfilter = useSelector((state) => state.frrelancers.filterdData);
    let freelancers = useSelector((state) => state.frrelancers.data);
    let freelancer = useSelector((state) => state.frrelancers.freelancer);
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = (freelancer) => {
        setIsOpen(true);
        dispatch(frrelancerActions.setfreelancer(freelancer));
    };
    const handleClose = () => {
        setIsOpen(false);
    };

    let dispatch = useDispatch();
    let freelancercontroller = new FreelancerController();
    let onfeildFilterHandler = (event) => {
        dispatch(frrelancerActions.filterByField(event.target.value));
    };
    let onareaFilterHandler = (event) => {
        dispatch(frrelancerActions.filterByGeographicArea(event.target.value));
    };
    let fetchData = async () => {
        if (freelancersfilter.length === 0) {
            let freelancers = await freelancercontroller.read();
            dispatch(frrelancerActions.read(freelancers));
            console.log(freelancers);
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

    return (
        <>
            <section className='sectionopen'>
                <span>Organizations</span>
                <section class="section-filter">
                    <span>Filed</span>
                    <div class="custom-select">
                        <select onChange={onfeildFilterHandler}>
                            <option value="All">All</option>
                            {freelancers.map((element) => (<option value={element.field} key={element.id}>{element.field}</option>))}
                        </select>
                    </div>
                    <span>Geographic Area</span>
                    <div class="custom-select">
                        <select onChange={onareaFilterHandler}>
                            <option value="All">All</option>
                            {freelancers.map((element) => (<option value={element.focusCountry} key={element.id}>{element.focusCountry}</option>))}
                        </select>
                    </div>
                    <button className='btnDark'>Add New</button>
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
                            {freelancersfilter
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={() => handleOpen(row)} >
                                            <TableCell align='center'>
                                                {parseInt(row.id) + parseInt(1)}
                                            </TableCell>
                                            <TableCell align='center'>
                                                {row.name}
                                            </TableCell>
                                            <TableCell align='center'>
                                                {row.fieldOfWork}
                                            </TableCell>
                                            <TableCell align='center'>
                                                {row.country}
                                            </TableCell>
                                            <TableCell align='center'>
                                                <Rating
                                                    name="simple-controlled"
                                                    value={row.rating}
                                                    readOnly
                                                />
                                            </TableCell>
                                            <TableCell align='center'>
                                                <DeleteOutlineIcon style={{ color: "red", marginRight: "30px", cursor: "pointer" }} />
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
                    count={freelancersfilter.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <Modal isOpen={isOpen} onRequestClose={handleClose} className="side-screen-freelancer" overlayClassName="overlay">
                <img src={imgperson} alt="" />
                <span>{freelancer.name}</span>
                <span>{freelancer.fieldOfWork}</span>
                <span>{freelancer.country}</span>
                <div className="ferrlancer-contact">
                    <SchoolOutlinedIcon />
                    <CallOutlinedIcon />
                    <MailOutlineOutlinedIcon />
                </div>
                <span>About</span>
                <p>{freelancer.about}</p>
                <button className='btnwhite' onClick={onclickHandller}>Hire Ucas</button>
                <button className='btnDark' onClick={onclickHandller}>view Profile</button>
            </Modal>
        </>
    )
}

export default OrganizationsPage