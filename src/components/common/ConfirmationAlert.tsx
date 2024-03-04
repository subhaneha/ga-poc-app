import * as React from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { Typography } from '@mui/material';

import { extendTheme } from "@mui/joy/styles";


interface ConfirmationAlertProps {
    title: string;
    openModal: boolean;
    desc: string;
    IconComponent: React.ElementType;
    handleClose: () => void;
}

export const ConfirmationAlert: React.FC<ConfirmationAlertProps> = ({ openModal, title, desc, IconComponent, handleClose }) => {
    const [open, setOpen] = React.useState<boolean>(false);
    return (
        <React.Fragment>
            <Modal open={openModal} onClose={handleClose}>
                <ModalDialog  variant="outlined" role="alertdialog"  color="primary">
                    <DialogTitle>
                        <IconComponent />
                        {title}
                    </DialogTitle>
                    <Divider />
                    <DialogContent>
                        <Typography>
                            <IconComponent color='danger'/>
                            {desc}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="solid" color="primary" onClick={() => setOpen(false)}>
                            Ok
                        </Button>
                        <Button variant="plain" color="primary" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                    </DialogActions>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
};
