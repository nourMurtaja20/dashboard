import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import '../../resources/css/SideScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import FreelancerController from '../../controllers/freelancer-controller';
import { frrelancerActions } from '../../redux/freelancer-slic';
import imgperson from '../../resources/images/Ellipse 15.png';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
const FreelancersPage = () => {
    const columns = [
        { id: 'id', label: '#' },
        { id: 'Freelancer', label: 'Freelancer' },
        {
            id: 'FieldofWork',
            label: 'Field of Work',
        },
        {
            id: 'Country',
            label: 'Country',
        },

    ];

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

    //for navigator
    let navigator = useNavigate();
    let onclickHandller = () => {
        navigator(`/dashboard/Freelancers/FreelancerProfile`);
    }

    let freelancersfilter = useSelector((state) => state.frrelancers.filterdData);
    let freelancers = useSelector((state) => state.frrelancers.data);
    let freelancer = useSelector((state) => state.frrelancers.freelancer);
    // console.log(freelancer);
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
    //for side menu 
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = (freelancer) => {
        setIsOpen(true);
        dispatch(frrelancerActions.setfreelancer(freelancer));

    }
    const handleClose = () => {
        setIsOpen(false);
    };

    useEffect(() => { fetchData(); }, []);
    return (
        <>
            <section className='sectionopen'>
                <span>Freelancers </span>
                <section class="section-filter">
                    <span>Filed</span>
                    <div class="custom-select">
                        <select onChange={onfeildFilterHandler}>
                            <option value="All">All</option>
                            {freelancers.map((element) => (<option value={element.fieldOfWork} key={element.id}>{element.fieldOfWork}</option>))}

                        </select>
                    </div>
                    <span>Geographic Area</span>
                    <div class="custom-select">
                        <select onChange={onareaFilterHandler}>
                            <option value="All">All</option>
                            {freelancers.map((element) => (<option value={element.country} key={element.id}>{element.country}</option>))}
                        </select>
                    </div>
                    <span>Availability</span>
                    <div class="custom-select">
                        <select>
                            <option value="0">All</option>
                            <option value="1">..</option>
                        </select>
                    </div>
                </section>
            </section>
            <div>
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
                                    <TableCell align='center'>
                                        Rating
                                    </TableCell>
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
                    <button className='btnwhite' onClick={onclickHandller}>view Profile</button>
                </Modal>

            </div>
        </>
    )
}

export default FreelancersPage