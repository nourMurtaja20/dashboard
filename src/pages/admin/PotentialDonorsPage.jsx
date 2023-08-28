import React, { useEffect, useState } from 'react';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "../../resources/images/logo.png"
import { useDispatch, useSelector } from 'react-redux';
import DonorController from '../../controllers/donor-controller';
import { donorActions } from '../../redux/donor-slic';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Swal from 'sweetalert2';

const PotentialDonorsPage = () => {
    const columns = [
        { id: 'id', label: '#' },
        {
            id: 'logo',
            label: 'Logo',

        },
        {
            id: 'DonorName',
            label: 'Donor’s Name',
        },
        {
            id: 'ScopeofWork',
            label: 'Scope of Work',
        },
        {
            id: 'FocusCountry',
            label: 'FocusCountry',
        }

    ];
    //for side menu 
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = (donor) => {
        setIsOpen(true);
        dispatch(donorActions.setdonor(donor));

    }
    const handleClose = () => {
        setIsOpen(false);
    };
    //for navigator
    let navigator = useNavigate();
    let onclickHandller = () => {
        navigator(`/adminDashboard/PotentialDonors/DonorDetails`);
    }
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    let donorfilter = useSelector((state) => state.donors.filterdData);
    let donors = useSelector((state) => state.donors.data);
    // let donor = useSelector((state) => state.donors.donor);

    let dispatch = useDispatch();
    let donorcontroller = new DonorController();
    let onfeildFilterHandler = (event) => {
        dispatch(donorActions.filterByField(event.target.value));
    };
    let onareaFilterHandler = (event) => {
        dispatch(donorActions.filterByGeographicArea(event.target.value));

    };
    let onupdate = async (donor) => {
        let updatedDonor = {
            ...donor,
            isSave: !donor.isSave
        };
        let response = await donorcontroller.update(donor.id);
        if (response) {
            dispatch(donorActions.updateIsSave(updatedDonor));
            console.log(donorfilter);
        } else {
            console.log("error");
        }
    }
    const showAlert = (donor) => {
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
                let result = donorcontroller.delete(donor.id);
                if (result) {
                    dispatch(donorActions.delete(donor.id));
                } else {
                    console.log("error");
                }
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Code to execute if the user cancels the action
                Swal.fire('Cancelled', 'Your item  is safe :)', 'info');
            }
        });
    };
    let fetchData = async () => {
        if (donorfilter.length === 0) {
            let projects = await donorcontroller.read();
            dispatch(donorActions.read(projects));
        }
    }
    useEffect(() => { fetchData(); }, []);
    const ImageTableCell = ({ src }) => (
        <TableCell align="center">
            <img src={src} alt="avatar" />
        </TableCell>
    );
    let onclickAddDonorHandller = () => {
        navigator(`/adminDashboard/PotentialDonors/addnew`);
    }
    return (
        <>
            <section className='sectionopen'>
                <span>Potential Donors </span>
                <section class="section-filter">
                    <span>Filed</span>
                    <div class="custom-select">
                        <select onChange={onfeildFilterHandler}>
                            <option value="All">All</option>
                            <option value="Empowerment">Empowerment</option>
                            <option value="healt">healt</option>
                        </select>
                    </div>
                    <span>Geographic Area</span>
                    <div class="custom-select">
                        <select onChange={onareaFilterHandler}>
                            <option value="All">All</option>
                            {donors.map((element) => (<option value={element.focusCountry}>{element.focusCountry}</option>))}
                        </select>
                    </div>
                    <button className='btnDark' onClick={onclickAddDonorHandller}>Add New</button>
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
                                <TableCell align='center'>
                                    Save
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {donors
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code} align='center' >
                                            <TableCell align='center' onClick={() => handleOpen(row)}>
                                                {row.id}
                                            </TableCell>
                                            <ImageTableCell src={row.imageSrc} onClick={() => handleOpen(row)} />
                                            <TableCell align='center' onClick={() => handleOpen(row)}>
                                                {row.donorName}
                                            </TableCell>
                                            <TableCell align='center' onClick={() => handleOpen(row)}>
                                                {row.scopeOfWork}
                                            </TableCell>
                                            <TableCell align='center' onClick={() => handleOpen(row)}>
                                                {row.focusCountry}
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
                    count={donors.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <Modal isOpen={isOpen} onRequestClose={handleClose} className="side-screen-donor" overlayClassName="overlay">
                <h2 className='h2-apply'>Donors Details</h2>
                <div className="job-details">
                    <div className="job-details-header">
                        <span>About European Union</span>
                        <TurnedInNotIcon style={{ cursor: "pointer" }} />
                    </div>
                    <p className='pNotification'>A hall, hospitality and meals for the implementation of the activities of the project to promote civil and political participation of youth in the Gaza Strip in partnership with the Norwegian People’s Aid NPA, in accordance with the general and special conditions of the tender. Below we list the conditions that must be met by everyone who wishes</p>
                    <div className="job-details-footer">
                        <button className='btnDark' onClick={onclickHandller}>Show More</button>
                        <button className='btnwhite' onClick={handleClose}>Cancel</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default PotentialDonorsPage