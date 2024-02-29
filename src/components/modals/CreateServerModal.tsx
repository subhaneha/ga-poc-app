import React from "react";
import {
  Box,
  Dialog,
  FormControl,
  Grid,
  InputLabel,
  Modal,
  OutlinedInput,
  TextareaAutosize,
} from "@mui/material";
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
    <Dialog open={openModal} onClose={handleClose}>
      <Box padding={"12px"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid display={"flex"} columnGap="8px">
            <FormControl fullWidth className="form-design">
              <InputLabel htmlFor="component-outlined">ID</InputLabel>
              <OutlinedInput
                label="ID"
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
              <InputLabel htmlFor="component-outlined">Protocol</InputLabel>
              <OutlinedInput
                label="Protocol"
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
              <InputLabel htmlFor="component-outlined">Name</InputLabel>
              <OutlinedInput
                label="Name"
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
              <InputLabel htmlFor="component-outlined">Port</InputLabel>
              <OutlinedInput
                label="Port"
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
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Description"
                {...register("description", { required: true })}
              />
            </FormControl>
          </Grid>
        </form>
      </Box>
    </Dialog>
  );
};
