import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  OutlinedInput,
  TextareaAutosize,
} from "@mui/material";
import "../../pages/UserPage.css";
import CloseIcon from '@mui/icons-material/Close';
import SaveIconOutlinedIcon from '@mui/icons-material/Save';
import { SubmitHandler, useForm } from "react-hook-form";
interface ModalProps {
  openModal: boolean;
  handleClose: () => void;
}
type Inputs = {
  id: string;
  name: string;
  protocol: string;
  port: number;
  description: string;
  loginChallengeUrl: string;
  restrictedUrl: string;
  generalTimeoutUrl: string;
  idleTimeoutUrl: string;
  revokeAdministratorUrl: string;
};
export const CreateServerModal = ({ openModal, handleClose }: ModalProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Dialog open={openModal} maxWidth="xl" onClose={handleClose}>
      <DialogTitle bgcolor={"rgb(83 127 174)"} color="#ffffff">
        Create Server
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 4,
          top: 4,
          color: 'white'
        }}
      >
        <CloseIcon />
      </IconButton>
      <Box padding={"12px"}>
        <Grid display={"flex"} justifyContent={"flex-end"} marginBottom={"4px"}>
          <span className="required">*</span>Mandatory Fields
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className="form-container">
            <p className="title">Server Information</p>
            <Grid display={"flex"} columnGap="8px">
              <FormControl fullWidth className="form-design">
                <label htmlFor="component-outlined" style={{ fontSize: "14px" }}>
                  ID<span className="required">*</span>
                </label>
                <OutlinedInput
                  autoFocus
                  required
                  margin="dense"
                  placeholder="ID"
                  id="id"
                  type="text"
                  fullWidth
                  {...register("id", { required: true })}
                />
              </FormControl>
              <FormControl fullWidth className="form-design">
                <label htmlFor="component-outlined" style={{ fontSize: "14px" }}>
                  Protocol<span className="required">*</span>
                </label>
                <OutlinedInput
                  autoFocus
                  required
                  placeholder="Protocol"
                  margin="dense"
                  {...register("protocol", { required: true })}
                  name="protocol"
                  type="text"
                  fullWidth
                />
              </FormControl>
              <FormControl fullWidth className="form-design">
                <label htmlFor="component-outlined" style={{ fontSize: "14px" }}>
                  Name<span className="required">*</span>
                </label>
                <OutlinedInput
                  autoFocus
                  required
                  margin="dense"
                  placeholder="Name"
                  id="name"
                  {...register("name", { required: true })}
                  type="text"
                  fullWidth
                />
              </FormControl>
              <FormControl fullWidth className="form-design">
                <label htmlFor="component-outlined" style={{ fontSize: "14px" }}>
                  Port<span className="required">*</span>
                </label>
                <OutlinedInput
                  autoFocus
                  required
                  margin="dense"
                  placeholder="Port"
                  id="port"
                  {...register("port", { required: true })}
                  type="number"
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl className="form-design">
                <label htmlFor="component-outlined" style={{ fontSize: "14px" }}>
                  Description
                  <span className="required">*</span>
                </label>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={6}
                  style={{ width: "300px" }}
                  placeholder="Description"
                  {...register("description", { required: true })}
                />
              </FormControl>
            </Grid>
          </Box>
          <Box className="form-container">
            <p className="title">URL's</p>
            <Grid>
              <Grid
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <label style={{ fontSize: "14px" }}>
                  Login Challenge URL<span className="required">*</span>
                </label>
                <FormControl className="form-design">
                  <OutlinedInput className="outlineInput"
                    autoFocus
                    required
                    margin="dense"
                    id="loginChallengeUrl"
                    placeholder="Login Challenge URL"
                    {...register("loginChallengeUrl", { required: true })}
                    type="string"
                    fullWidth
                  />
                </FormControl>
              </Grid>
              <Grid
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <label style={{ fontSize: "14px" }}>
                  Restricted URL<span className="required">*</span>
                </label>

                <FormControl className="form-design">
                  <OutlinedInput
                    className="outlineInput"
                    autoFocus
                    required
                    placeholder="Restricted URL"
                    margin="dense"
                    id="restrictedUrl"
                    {...register("restrictedUrl", { required: true })}
                    type="string"
                    fullWidth
                  />
                </FormControl>
              </Grid>
              <Grid
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <label style={{ fontSize: "14px" }}>
                  Idle Timeout URL<span className="required">*</span>
                </label>
                <FormControl className="form-design">
                  <OutlinedInput
                    className="outlineInput"
                    autoFocus
                    required
                    placeholder="Idle Timeout URL"
                    margin="dense"
                    id="idleTimeoutUrl"
                    {...register("idleTimeoutUrl", { required: true })}
                    type="string"
                    fullWidth
                  />
                </FormControl>
              </Grid>
              <Grid
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <label style={{ fontSize: "14px" }}>
                  General Timeout URL<span className="required">*</span>
                </label>
                <FormControl className="form-design">
                  <OutlinedInput
                    className="outlineInput"
                    autoFocus
                    required
                    placeholder="General Timeout URL"
                    margin="dense"
                    id="generalTimeoutUrl"
                    {...register("generalTimeoutUrl", { required: true })}
                    type="string"
                    fullWidth
                  />
                </FormControl>
              </Grid>
              <Grid
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <label style={{ fontSize: "14px" }}>
                  Administrator Revoke URL<span className="required">*</span>
                </label>
                <FormControl className="form-design">
                  <OutlinedInput
                    className="outlineInput"
                    autoFocus
                    required
                    placeholder="Administrator Revoke URL"
                    margin="dense"
                    id="revokeAdministratorUrl"
                    {...register("revokeAdministratorUrl", { required: true })}
                    type="string"
                    fullWidth
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <DialogActions>
            <Grid
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Button variant="contained" className="buttonStyle">Reset</Button>
              <Grid display={"flex"} columnGap={"8px"}>
                <Button variant="contained" className="buttonStyle" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" className="buttonStyle" variant="contained">
                  <SaveIconOutlinedIcon style={{ fontSize: "18px", padding: "4px" }} />
                  Save & Close
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </form>
      </Box>
    </Dialog>
  );
};
