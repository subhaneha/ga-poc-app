import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  FormControl,
  Grid,
  OutlinedInput,
  TextareaAutosize,
} from "@mui/material";
import "../../pages/UserPage.css";
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
      <DialogTitle bgcolor={"#1e81b0"} color="#ffffff">
        Create Server
      </DialogTitle>
      <Box padding={"12px"}>
        <Grid display={"flex"} justifyContent={"flex-end"} marginBottom={"4px"}>
          <span className="required">*</span>Mandatory Fields
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className="form-container">
            <p className="title">Server Information</p>
            <Grid display={"flex"} columnGap="8px">
              <FormControl fullWidth className="form-design">
                <label htmlFor="component-outlined">
                  ID<span className="required">*</span>
                </label>
                <OutlinedInput
                  autoFocus
                  required
                  margin="dense"
                  id="id"
                  type="text"
                  fullWidth
                  {...register("id", { required: true })}
                />
              </FormControl>
              <FormControl fullWidth className="form-design">
                <label htmlFor="component-outlined">
                  Protocol<span className="required">*</span>
                </label>
                <OutlinedInput
                  autoFocus
                  required
                  margin="dense"
                  {...register("protocol", { required: true })}
                  name="protocol"
                  type="text"
                  fullWidth
                />
              </FormControl>
              <FormControl fullWidth className="form-design">
                <label htmlFor="component-outlined">
                  Name<span className="required">*</span>
                </label>
                <OutlinedInput
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  {...register("name", { required: true })}
                  type="text"
                  fullWidth
                />
              </FormControl>
              <FormControl fullWidth className="form-design">
                <label htmlFor="component-outlined">
                  Port<span className="required">*</span>
                </label>
                <OutlinedInput
                  autoFocus
                  required
                  margin="dense"
                  id="port"
                  {...register("port", { required: true })}
                  type="number"
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl className="form-design">
                <label htmlFor="component-outlined">
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
                <label>
                  Login Challenge URL<span className="required">*</span>
                </label>
                <FormControl className="form-design">
                  <OutlinedInput
                    style={{ width: "450px", height: "48px" }}
                    autoFocus
                    required
                    margin="dense"
                    id="loginChallengeUrl"
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
                <label>
                  Restricted URL<span className="required">*</span>
                </label>

                <FormControl className="form-design">
                  <OutlinedInput
                    style={{ width: "350px", height: "48px" }}
                    autoFocus
                    required
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
                <label>
                  Idle Timeout URL<span className="required">*</span>
                </label>
                <FormControl className="form-design">
                  <OutlinedInput
                    style={{ width: "350px", height: "48px" }}
                    autoFocus
                    required
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
                <label>
                  General Timeout URL<span className="required">*</span>
                </label>
                <FormControl className="form-design">
                  <OutlinedInput
                    style={{ width: "350px", height: "48px" }}
                    autoFocus
                    required
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
                <label>
                  Administrator Revoke URL<span className="required">*</span>
                </label>
                <FormControl className="form-design">
                  <OutlinedInput
                    style={{ width: "350px", height: "48px" }}
                    autoFocus
                    required
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
              <Button variant="contained">Reset</Button>
              <Grid display={"flex"} columnGap={"8px"}>
                <Button variant="contained" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="contained">
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
