import React from 'react';
import './UserPage.css';
import HomeIcon from '@mui/icons-material/Home';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Grid, IconButton, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import InfoIcon from '@mui/icons-material/Info';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import DialogTitle from '@mui/material/DialogTitle';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const UserPage: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };


    const handleClose = () => {
        setOpen(false);
    };
    const columns: GridColDef[] = [
        { field: 'firstName', headerName: 'First name', width: 130, headerClassName: 'super-app-theme--header' },
        { field: 'lastName', headerName: 'Last name', width: 130, headerClassName: 'super-app-theme--header' },
        { field: 'useType', headerName: 'Use Type', width: 130, headerClassName: 'super-app-theme--header' },
        { field: 'loginName', headerName: 'Login Name', width: 130, headerClassName: 'super-app-theme--header' },
        {
            field: 'close', headerName: 'Close', width: 130,
            renderCell: () => (
                <IconButton aria-label="delete" className='list-icons' size='small'>
                    <FileCopyIcon />
                </IconButton>
            ),
            headerClassName: 'super-app-theme--header'
        },
        {
            field: 'modify', headerName: 'Modify', width: 130, renderCell: () => (
                <IconButton aria-label="delete" className='list-icons' size='small'>
                    <EditIcon />
                </IconButton>
            ), headerClassName: 'super-app-theme--header'
        },
        {
            field: 'delete', headerName: 'Delete', width: 130,
            renderCell: () => (
                <IconButton aria-label="delete" className='list-icons' size='small'>
                    <DeleteIcon />
                </IconButton>
            ), headerClassName: 'super-app-theme--header'
        },
        {
            field: 'revoke', headerName: 'Revoke', width: 130,
            renderCell: () => (
                <IconButton aria-label="delete" className='list-icons' size='small'>
                    <InfoIcon />
                </IconButton>
            ), headerClassName: 'super-app-theme--header'
        },

    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', useType: 'Consultant', loginName: 'Snow ' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, useType: 'Consultant', loginName: 'Snow Lannister' },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, useType: 'Unknown', loginName: 'Snow Dog' },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, useType: 'Consultant', loginName: 'Snow Stark' },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150, useType: 'Consultant', loginName: 'Snow Targaryen' },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, useType: 'Unknown', loginName: 'Snow Melisandre' },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, useType: 'Consultant', loginName: 'Snow Frances' },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, useType: 'Consultant', loginName: 'Snow Roxie' },
    ];
    return (
        <>
            <div className='home-root'>
                <div><span className='title'>User Administration</span><span className='home'><HomeIcon className='home-icon' fontSize="small" color="primary" />/ Users</span></div>
            </div>

            <div className='search'>
                <div><span className='find-user'>Find Users</span><span className='home'>
                    <input type="search" placeholder='Search' id="gsearch" name="gsearch" />
                    <label className='select-user'>in</label>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </span>
                </div>
            </div>

            <div className="title-create">
                <Grid container spacing={0}>
                    <Grid xs={10}>
                        <Button variant="contained" size='small' className='create-btn' onClick={handleClickOpen} startIcon={<AddIcon />}>
                            Create
                        </Button>
                    </Grid>
                    <Grid xs={2}>
                        <IconButton aria-label="delete" size='small' className='delete-btn'>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="delete" size='small' className='delete-btn'>
                            <HighlightOffIcon />
                        </IconButton>
                        <IconButton aria-label="delete" size='small' className='delete-btn'>
                            <InsertDriveFileIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
            <div className='home-root' >
                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </div>
            </div>
            <React.Fragment>
                <Dialog
                    open={open}
                    fullWidth
                    onClose={handleClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries((formData as any).entries());
                            const email = formJson.email;
                            console.log(formJson, email);
                            handleClose();
                        },
                    }}
                >
                    <DialogTitle>Personal Information</DialogTitle>
                    <DialogContent >
                        <FormControl fullWidth className='form-design'>
                            <InputLabel htmlFor="component-outlined">Name</InputLabel>
                            <OutlinedInput
                                label="Name"
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                name="name"
                                type="text"
                                fullWidth
                            />
                        </FormControl>
                        <FormControl fullWidth className='form-design'>
                            <InputLabel htmlFor="component-outlined">Middle Initial</InputLabel>
                            <OutlinedInput
                                label="Middle Initial"
                                autoFocus
                                required
                                margin="dense"
                                id="middle"
                                name="middle"
                                type="text"
                                fullWidth
                            />
                        </FormControl>
                        <FormControl fullWidth className='form-design'>
                            <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                            <OutlinedInput
                                label="Last Name"
                                autoFocus
                                required
                                margin="dense"
                                id="lname"
                                name="lname"
                                type="text"
                                fullWidth
                            />
                        </FormControl>
                        <FormControl fullWidth className='form-design'>
                            <InputLabel htmlFor="component-outlined">Email Id</InputLabel>
                            <OutlinedInput
                                label="Email"
                                autoFocus
                                required
                                margin="dense"
                                id="email"
                                name="email"
                                type="email"
                                fullWidth
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Submit</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </>
    )
}

export default UserPage;