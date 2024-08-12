import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TablePagination } from '@mui/material';
import NavbarDashboard from '../component/NavbarDashboard';
import Sidebar from '../component/Sidebar';

const Dash = () => {
    const [allApps, setAllApps] = useState([]);
    const [apps, setApps] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const fetchApps = async () => {
        const url = `http://localhost:4000/appData/`;
        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'content-type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setAllApps(data.data);
        } catch (error) {
            console.error("Failed to fetch apps:", error.message);
        }
    };

    useEffect(() => {
        fetchApps();
    }, []); 

    useEffect(() => {
        const newPageApps = allApps.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
        setApps(newPageApps);
    }, [allApps, page, rowsPerPage]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); 
    };

    return (
        <Paper sx={{ width: 1750, overflow: 'hidden', padding: 1, marginLeft: 32}}>
            <NavbarDashboard />
            <Sidebar />
            <Typography variant="h6" sx={{ p: 4, fontWeight: 'bold', textAlign: 'center', fontSize: 32}}>All Applications</Typography>
            <TableContainer sx={{ minHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: 18, backgroundColor: '#9A97FF'}}>Application Name</TableCell>
                            <TableCell sx= {{ fontWeight: 'bold', fontSize: 18, backgroundColor: '#9A97FF'}} align="center">Category</TableCell>
                            <TableCell sx= {{ fontWeight: 'bold', fontSize: 18, backgroundColor: '#9A97FF'}} align="center">Installs Number</TableCell>
                            <TableCell sx= {{ fontWeight: 'bold', fontSize: 18, backgroundColor: '#9A97FF'}} align="center">Rating</TableCell>
                            <TableCell sx= {{ fontWeight: 'bold', fontSize: 18, backgroundColor: '#9A97FF'}} align="center">Reviews</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apps.map((app) => (
                            <TableRow key={app._id}>
                                <TableCell sx={{ fontWeight: 'bold', borderColor: '#9A97FF' }} component="th" scope="row">{app.app}</TableCell>
                                <TableCell sx={{ borderColor: '#9A97FF' }} align="center">{app.category}</TableCell>
                                <TableCell sx={{ borderColor: '#9A97FF' }} align="center">{app.installs}</TableCell>
                                <TableCell sx={{ borderColor: '#9A97FF' }} align="center">{app.rating}</TableCell>
                                <TableCell sx={{ borderColor: '#9A97FF' }} align="center">{app.reviews}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination sx={{ display: 'flex', justifyContent: 'center' , color: '#605BFF'}}
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={allApps.length} 
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default Dash;
