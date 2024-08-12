import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TablePagination } from '@mui/material';
import NavBar from '../component/Navbar/NavBar';


const Dash = () => {
    const [allApps, setAllApps] = useState([]);
    const [apps, setApps] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const fetchApps = async () => {
        const url = `http://localhost:4000/appData/`;
        try {
            const response = await fetch(url);
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
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <NavBar />
            <Typography variant="h6" sx={{ p: 4 }}>All applications</Typography>
            <TableContainer sx={{ minHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Application Name</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Installs Number</TableCell>
                            <TableCell align="right">Rating</TableCell>
                            <TableCell align="right">Reviews</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apps.map((app) => (
                            <TableRow key={app._id}>
                                <TableCell component="th" scope="row">{app.app}</TableCell>
                                <TableCell align="right">{app.category}</TableCell>
                                <TableCell align="right">{app.installs}</TableCell>
                                <TableCell align="right">{app.rating}</TableCell>
                                <TableCell align="right">{app.reviews}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
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
