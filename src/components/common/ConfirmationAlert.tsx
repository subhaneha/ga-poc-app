import * as React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
} from "@mui/material";
import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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
            <Dialog open={openModal} onClose={handleClose}>
                <DialogTitle bgcolor={"rgb(83 127 174)"} color="#ffffff">
                    {title}
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
                <DialogContent>
                    <Typography>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ margin: '20px' }}> <IconComponent style={{ color: '#e3ac5c', fontSize: '30px' }} /> </span>
                            <span style={{ fontSize: '16px' }}>{desc}</span>
                        </div>
                    </Typography>
                </DialogContent>
                <DialogActions style={{ justifyContent: 'center' }}>
                    <Button variant="contained" color="primary" onClick={() => setOpen(false)}>
                        Ok
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};
