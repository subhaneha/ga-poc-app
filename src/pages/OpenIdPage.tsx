import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import { Breadcrumb } from '../components/common/BreadCrumb';
import { TableLayout } from '../components/common/Table';

const OpenIdPage = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const [age, setAge] = React.useState('');

    const columns: GridColDef[] = [
        { field: 'clientId', headerName: 'ClientID', flex: 1, sortable: false },
        { field: 'redirecturi', headerName: 'Redirect URI', flex: 1, sortable: false },
        { field: 'granttypes', headerName: 'Grant Types', flex: 1, sortable: false },
        {
            field: 'modify', headerName: 'Modify', width: 130, renderCell: () => (
                <IconButton aria-label="delete" className='list-icons' size='small'>
                    <EditIcon />
                </IconButton>
            ), flex: 1, sortable: false
        },
        {
            field: 'delete', headerName: 'Delete', width: 130,
            renderCell: () => (
                <IconButton aria-label="delete" className='list-icons' size='small'>
                    <DeleteIcon />
                </IconButton>
            ), flex: 1, sortable: false
        },
    ];

    const rows = [
        { id: 1, clientId: 'client', redirecturi: 'www.google.com', granttypes: 'authorization_code' },
        { id: 2, clientId: 'client2', redirecturi: 'www.google', granttypes: 'authorization_code' },
        { id: 3, clientId: 'client3', redirecturi: 'www.google.com', granttypes: 'authorization_code' },
        
    ];
    return (
        <>
            <Box display="flex" sx={{ my: 2, justifyContent: 'space-between' }}>
                <Typography className="pageHead" variant="h6" sx={{ my: 0 }}>OpenID Connect Client Registration</Typography>
                <Breadcrumb  title='RegClients' />
            </Box>
            <Box display="flex" className="searchBar" sx={{ my: 2, justifyContent: 'space-between' }}>
                <div className='find-user'>Find Clients</div>
                <div className='home'>
                    <input type="search" placeholder='Search' id="gsearch" name="gsearch" />
                </div>
            </Box>
            <div className="tableHeader">
                <Grid container spacing={0}>
                    <Grid item xs={11}>
                        <Button variant="contained" size='small' className='create-btn' onClick={handleClickOpen} startIcon={<AddIcon />}>
                            Create
                        </Button>
                    </Grid>
                    <Grid item xs={1} container justifyContent="flex-end">
                        <IconButton aria-label="delete" size='small' className='delete-btn'>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
            <div style={{ width: '100%' }}>
                <TableLayout rowvalues={rows} coloumnvalues={columns} />
            </div>
        </>

    );
};


export default OpenIdPage;