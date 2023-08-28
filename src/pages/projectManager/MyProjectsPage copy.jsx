import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../resources/css/openProject.css"
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';
const MyProject = () => {
    let navigator = useNavigate();
    let onclickHandller = () => {
        navigator(`/dashboard/openProject`);
    }
    const columns = [
        { id: 'id', label: '#' },
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
            id: 'Action',
            label: 'Action',
        }
    ];
    let projectsfilter = useSelector((state) => state.projects.filterdData);

    return (
        <>
            <div className='headerDetails' style={{ marginBottom: "50px" }}>
                <ArrowBackIcon style={{ fontSize: "16px", cursor: "pointer" }} onClick={onclickHandller} />
                <span>Back</span>
                <span>My Project</span>
            </div>
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
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id} >
                                            <TableCell align='center'  >
                                                {parseInt(row.id) + parseInt(1)}
                                            </TableCell>
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
                                            <TableCell align='center'>
                                                {/* {row.deadline} */} oppened
                                            </TableCell>
                                            <TableCell align='center'>
                                                <button className='btnRed'>Cancel</button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    )
}

export default MyProject