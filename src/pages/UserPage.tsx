import React from 'react';
import './UserPage.css';
import { GridColDef } from '@mui/x-data-grid';
import { Box, Button, Card, Grid, IconButton, MenuItem, Typography } from '@mui/material';
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
import { Breadcrumb } from '../components/common/BreadCrumb';
import { TableLayout } from '../components/common/Table';
import { CreateUserModal } from '../components/modals/CreateUserModal';

const UserPage: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const columns: GridColDef[] = [
    {
      field: "firstName",
      headerName: "First name",
      width: 130,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 130,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "useType",
      headerName: "Use Type",
      width: 130,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "loginName",
      headerName: "Login Name",
      width: 130,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "close",
      headerName: "Close",
      width: 130,
      renderCell: () => (
        <IconButton aria-label="delete" className="list-icons" size="small">
          <FileCopyIcon />
        </IconButton>
      ),
      headerClassName: "super-app-theme--header",
    },
    {
      field: "modify",
      headerName: "Modify",
      width: 130,
      renderCell: () => (
        <IconButton aria-label="delete" className="list-icons" size="small">
          <EditIcon />
        </IconButton>
      ),
      headerClassName: "super-app-theme--header",
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 130,
      renderCell: () => (
        <IconButton aria-label="delete" className="list-icons" size="small">
          <DeleteIcon />
        </IconButton>
      ),
      headerClassName: "super-app-theme--header",
    },
    {
      field: "revoke",
      headerName: "Revoke",
      width: 130,
      renderCell: () => (
        <IconButton aria-label="delete" className="list-icons" size="small">
          <InfoIcon />
        </IconButton>
      ),
      headerClassName: "super-app-theme--header",
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      useType: "Consultant",
      loginName: "Snow ",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
      useType: "Consultant",
      loginName: "Snow Lannister",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      age: 16,
      useType: "Unknown",
      loginName: "Snow Dog",
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: null,
      useType: "Consultant",
      loginName: "Snow Stark",
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: null,
      age: 150,
      useType: "Consultant",
      loginName: "Snow Targaryen",
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
      useType: "Unknown",
      loginName: "Snow Melisandre",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
      useType: "Consultant",
      loginName: "Snow Frances",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      age: 65,
      useType: "Consultant",
      loginName: "Snow Roxie",
    },
  ];
  return (
    <>
            <Box display="flex" sx={{ my: 2, justifyContent: 'space-between' }}>
                <Typography className="pageHead" variant="h6" sx={{ my: 0 }}>User Administration</Typography>
                <Breadcrumb  title='Users' />
            </Box>

            <Box display="flex" className="searchBar" sx={{ my: 2, justifyContent: 'space-between' }}>
                <div className='find-user'>Find Users</div>
                <div className='home'>
                    <input type="search" placeholder='Search' id="gsearch" name="gsearch" />
                    <label className='select-user'>in</label>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </Box>

            <div className="tableHeader">
                <Grid container spacing={0}>
                    <Grid item xs={10}>
                        <Button variant="contained" size='small' className='create-btn' onClick={handleClickOpen} startIcon={<AddIcon />}>
                            Create
                        </Button>
                    </Grid>
                    <Grid item xs={2} container justifyContent="flex-end">
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
            <div style={{ width: '100%' }}>
                <TableLayout rowvalues={rows} coloumnvalues={columns} />
            </div>
            <CreateUserModal openModal={open} handleClose={() => setOpen(false)} />
    </>
  );
};
export default UserPage;
