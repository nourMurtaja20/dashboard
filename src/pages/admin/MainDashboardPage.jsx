import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CircleIcon from '@mui/icons-material/Circle';
import Widget from '../../components/Widget'
import "../../resources/AdminCSS/mainDashboard.css"
import person from "../../resources/images/Ellipse 15.png"

const MainAdminDashboardPage = () => {

    const columns = [
        { id: 'id', label: '#' },
        { id: 'ProjectName', label: 'ProjectName' },
        {
            id: 'Field',
            label: 'Field',
        },
        {
            id: 'Deadline',
            label: 'Deadline',
        }

    ];

    function createData(id, ProjectName, Field, Deadline) {
        return { id, ProjectName, Field, Deadline };
    }
    const rows = [
        createData(1, 'project1', 'dev', "uae", "uk", "2202."),
        createData(2, 'project2', 'dev', "uae", "uk", "2202."),
    ];

    const data = [
        {
            name: 'Jan',
            uv: 0,
        },
        {
            name: 'Fab',
            uv: 2000,
        },
        {
            name: 'Mar',
            uv: 4000,
        },
        {
            name: 'Apr',
            uv: 2000,
        },
        {
            name: 'May',
            uv: 6000,
        },
        {
            name: 'Jun',
            uv: 4000,
        },
        {
            name: 'Jul',
            uv: 8000,
        },
    ];

    const data2 = [
        { name: "Group A", value: 420 },
        { name: "Group B", value: 390 },
        { name: "Group C", value: 240 },
        { name: "Group C", value: 390 },
        { name: "Group D", value: 240 },
        { name: "Group C", value: 230 }
    ];
    const COLORS = ['#90BE6D', '#F94144', '#F8961E', '#F3722C', '#2D9CDB', '#F9C74F'];

    const RADIAN = Math.PI / 189;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <>
            <div className="widgets">
                <Widget type="TotalProjects" />
                <Widget type="Freelancers" />
                <Widget type="Donors" />
            </div>
            <span className='mainTitle'>Profit Timeline</span>
            <div className='div_chart'>
                <div style={{ flex: 2, height: 350 }}>
                    <ResponsiveContainer>
                        <AreaChart
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className='OnlineServices'>
                    <span>Online Services</span>
                    <PieChart width={400} height={220}>
                        <Pie
                            data={data2}
                            cx={200}
                            cy={100}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data2.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                    <div className='divcolor' style={{ paddingLeft: "50px" }}>
                        <CircleIcon style={{ color: "#F94144", fontSize: "12px" }} /> <span>Guiding</span>
                        <CircleIcon style={{ color: "#F3722C", fontSize: "12px" }} /> <span>Writing</span>
                        <CircleIcon style={{ color: "#F8961E", fontSize: "12px" }} /> <span>Training</span>
                    </div>
                    <div className='divcolor'>
                        <CircleIcon style={{ color: "#F9C74F", fontSize: "12px" }} /> <span>Reviewing</span>
                        <CircleIcon style={{ color: "#90BE6D", fontSize: "12px" }} /> <span>Development</span>
                        <CircleIcon style={{ color: "#2D9CDB", fontSize: "12px" }} /> <span>Mapping</span>
                    </div>
                </div>
            </div>
            <div className='ProjectProgress'>
                <div>
                    <span className='mainTitle'>Project Progress</span>
                    <Paper sx={{ width: '100%', overflow: 'hidden', marginY: '30px' }}>
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
                                    {rows

                                        .map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align='center'>
                                                                {column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </div>
                <div>
                    <span className='mainTitle'>Trusted Members</span>
                    <div>
                        <div>
                            <img src={person} alt="" width="48px" height="48px" />
                            <div>
                                <span>Ali Hamed</span>
                                <span>Proposal Writer</span>
                            </div>
                        </div>
                        <div>
                            <img src={person} alt="" width="48px" height="48px" />
                            <div>
                                <span>Ali Hamed</span>
                                <span>Proposal Writer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainAdminDashboardPage