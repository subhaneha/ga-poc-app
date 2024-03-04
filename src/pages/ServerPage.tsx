import React from "react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { TableLayout } from "../components/common/Table";
import { Breadcrumb } from "../components/common/BreadCrumb";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ListIcon from "@mui/icons-material/List";
import { GridColDef } from "@mui/x-data-grid";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { CreateServerModal } from "../components/modals/CreateServerModal";
import WarningIcon from '@mui/icons-material/Warning';
import { ConfirmationAlert } from "../components/common/ConfirmationAlert";

const ServerPage = () => {
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleOpenAlert = () => {
    setOpenAlert(true);
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1, sortable: false },
    {
      field: "protocol",
      headerName: "Protocol",
      flex: 1,
      sortable: false,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      sortable: false,
    },
    {
      field: "port",
      headerName: "Port",
      flex: 1,
      sortable: false,
    },
    {
      field: "clone",
      headerName: "Clone",
      width: 130,
      renderCell: () => (
        <IconButton aria-label="delete" className="list-icons" size="small">
          <FileCopyIcon />
        </IconButton>
      ),
      flex: 1,
      sortable: false,
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
      flex: 1,
      sortable: false,
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
      flex: 1,
      sortable: false,
    },
    {
      field: "update",
      headerName: "Update",
      width: 130,
      renderCell: () => (
        <IconButton aria-label="delete" className="list-icons" size="small">
          <ListIcon />
        </IconButton>
      ),
      flex: 1,
      sortable: false,
    },
  ];

  const rows = [
    {
      id: "qmspgaw22eca81wnkkmms",
      protocol: "http",
      name: "qmspgaw22eca.dev.entrust.com",
      port: 81,
    },
    {
      id: "qmspgaw22eca81443tnejs",
      protocol: "https",
      name: "qmspgaw22eca.dev.entrust.com",
      port: 443,
    },
    {
      id: "gainfrastructure",
      protocol: "https",
      name: "dmspw22gaesw.dev.entrust.com",
      port: 50002,
    },
  ];

  return (
    <>
      <CreateServerModal openModal={open} handleClose={() => setOpen(false)} />
      <ConfirmationAlert openModal={openAlert} title={'Delete Confirmation'} desc={'You were able to delete this server., Once you do so there is no way to undo action'} IconComponent={WarningIcon} handleClose={() => setOpenAlert(false)}/>
      <Box display="flex" sx={{ my: 2, justifyContent: "space-between" }}>
        <Typography className="pageHead" variant="h6" sx={{ my: 0 }}>
          Server Administration
        </Typography>
        <Breadcrumb title="Servers" />
      </Box>
      <Box
        display="flex"
        className="searchBar"
        sx={{ my: 2, justifyContent: "space-between" }}
      >
        <div className="find-user">Find Servers</div>
        <div className="home">
          <input
            type="search"
            placeholder="Search"
            id="gsearch"
            name="gsearch"
          />
        </div>
      </Box>
      <div className="tableHeader">
        <Grid container spacing={0}>
          <Grid item xs={11}>
            <Button
              variant="contained"
              size="small"
              className="create-btn"
              onClick={handleClickOpen}
              startIcon={<AddIcon />}
            >
              Create
            </Button>
          </Grid>
          <Grid item xs={1} container justifyContent="flex-end">
            <IconButton onClick={handleOpenAlert} aria-label="delete" size="small" className="delete-btn">
              <DeleteIcon   />
            </IconButton>
            <IconButton aria-label="update" size="small" className="delete-btn">
              <ListIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
      <div style={{ width: "100%" }}>
        <TableLayout rowvalues={rows} coloumnvalues={columns} />
      </div>
    </>
  );
};

export default ServerPage;
