import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  OutlinedInput,
  Select,
  Tab,
  Tabs,
  Typography,
  capitalize,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SaveIconOutlinedIcon from '@mui/icons-material/Save';
import { SubmitHandler, useForm } from "react-hook-form";
import { bottom } from "@popperjs/core";
interface ModalProps {
    openModal: boolean;
    handleClose: () => void;
}
type Inputs = {
    firstName: string;
    middleInitial: string;
    lastName: string;
    email: number;
    userType: string;
    login: string;
    password: string;
    repeatPassword: string;
    generalTimeOut: string;
    idleTimeOut: string;
    changePasswordDays: number;
    accountStatus: string;
    locale: string;

};
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
function tabsProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}
export const CreateUserModal = ({ openModal, handleClose }: ModalProps) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Dialog open={openModal} maxWidth="xl" onClose={handleClose}>
            <Grid container bgcolor={"rgb(83 127 174)"} color="#ffffff">
                <Grid item xs={11}>
                    <DialogTitle className="modalTitle">
                        Create User
                    </DialogTitle>
                </Grid>
                <Grid item xs={1}>
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
                </Grid>
            </Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formFieldSection">
                    <Grid container sx={{ mt : 2, px: 3 }}>
                        <Grid item xs={12}>
                            <Box sx={{ width: '100%' }}>
                                <Tabs 
                                    value={value} 
                                    onChange={handleChange} 
                                    aria-label="basic tabs example"
                                    sx={{
                                        '& .MuiTabs-scroller': {
                                            backgroundColor: '#f0f0f0',
                                        },
                                        '& .MuiTab-root': {
                                            color: '#000',
                                            padding: '12px 8px',
                                            textTransform: 'capitalize',
                                            borderRight: '4px solid #fff'
                                        },
                                        '& .Mui-selected': {
                                            color: '#fff!important',
                                            backgroundColor: '#1976d2'
                                            
                                        },
                                        '& .MuiTabs-indicator': {
                                            backgroundColor: 'transparent'
                                        }
                                    }}
                                    >
                                    <Tab label={
                                        <div className="tabsLabel">
                                            <h6>Step 1</h6>
                                            <p>Personal<span className="required">*</span></p>
                                        </div>
                                    } {...tabsProps(0)} />
                                    <Tab label={
                                        <div className="tabsLabel">
                                            <h6>Step 2</h6>
                                            <p>Additional Info</p>
                                        </div>
                                    } {...tabsProps(1)} />
                                    <Tab label={
                                        <div className="tabsLabel">
                                            <h6>Step 3</h6>
                                            <p>Assign Roles</p>
                                        </div>
                                    } {...tabsProps(2)} />
                                    <Tab label={
                                        <div className="tabsLabel">
                                            <h6>Step 4</h6>
                                            <p>Assign Authentication</p>
                                        </div>
                                    } {...tabsProps(3)} />
                                    <Tab label={
                                        <div className="tabsLabel">
                                            <h6>Step 5</h6>
                                            <p>Assign Systems</p>
                                        </div>
                                    } {...tabsProps(4)} />
                                </Tabs>
                            </Box>
                        </Grid>
                    </Grid>
                    <CustomTabPanel value={value} index={0}>
                        <Grid container sx={{ mt : 2, px: 3 }}>
                            <Grid display="flex" item md={12} justifyContent={"flex-end"}>
                                <span className="required">*</span>Mandatory Fields
                            </Grid>
                        </Grid>
                        <Grid container sx={{ p: 3 }} spacing={3}>
                            <Grid item md={4}>
                                <Box className="form-container">
                                    <p className="title">Personal Information</p>
                                    <FormControl fullWidth className="form-design">
                                        <label htmlFor="component-outlined" >
                                            First Name<span className="required">*</span>
                                        </label>
                                        <OutlinedInput
                                            autoFocus
                                            required
                                            margin="dense"
                                            placeholder="First Name"
                                            id="firstName"
                                            type="text"
                                            fullWidth
                                            {...register("firstName", { required: true })}
                                        />
                                    </FormControl>
                                    <FormControl fullWidth className="form-design">
                                        <label htmlFor="component-outlined" >
                                            Middle Initail
                                        </label>
                                        <OutlinedInput
                                            autoFocus
                                            placeholder="Middle Initail"
                                            margin="dense"
                                            {...register("middleInitial")}
                                            name="middleInitial"
                                            type="text"
                                            fullWidth
                                        />
                                    </FormControl>
                                    <FormControl fullWidth className="form-design">
                                        <label htmlFor="component-outlined" >
                                            Last Name<span className="required">*</span>
                                        </label>
                                        <OutlinedInput
                                            autoFocus
                                            required
                                            margin="dense"
                                            placeholder="Last Name"
                                            id="lastName"
                                            {...register("lastName", { required: true })}
                                            type="text"
                                            fullWidth
                                        />
                                    </FormControl>
                                    <FormControl fullWidth className="form-design">
                                        <label htmlFor="component-outlined" >
                                            Email
                                        </label>
                                        <OutlinedInput
                                            autoFocus
                                            margin="dense"
                                            placeholder="Email"
                                            id="email"
                                            {...register("email")}
                                            type="text"
                                            fullWidth
                                        />
                                    </FormControl>
                                    <FormControl fullWidth className="form-design">
                                        <label htmlFor="component-outlined" >
                                            User Type<span className="required">*</span>
                                        </label>
                                        <Select 
                                            sx={{
                                                '& .MuiSelect-select': {
                                                padding: '8px',
                                                },
                                            }}
                                            autoFocus
                                            fullWidth
                                            id="userType"
                                            {...register("userType", { required: true })}
                                            >
                                            <MenuItem  value={10}>Ten</MenuItem > 
                                            <MenuItem  value={20}>Twenty</MenuItem > 
                                            <MenuItem  value={30}>Thirty</MenuItem > 
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item md={4}>
                                <Box className="form-container" sx={{mb:3}}>
                                    <p className="title">User Login and Password</p>
                                    <FormControl fullWidth className="form-design">
                                        <label htmlFor="component-outlined" >
                                            Login<span className="required">*</span>
                                        </label>
                                        <OutlinedInput
                                            autoFocus
                                            required
                                            margin="dense"
                                            placeholder="Login"
                                            id="login"
                                            type="text"
                                            fullWidth
                                            {...register("login", { required: true })}
                                        />
                                    </FormControl>
                                    <FormControl fullWidth className="form-design">
                                        <label htmlFor="component-outlined" >
                                            Password<span className="required">*</span>
                                        </label>
                                        <OutlinedInput
                                            autoFocus
                                            placeholder="Password"
                                            margin="dense"
                                            {...register("password", { required: true })}
                                            name="password"
                                            type="password"
                                            fullWidth
                                        />
                                    </FormControl>
                                    <FormControl fullWidth className="form-design">
                                        <label htmlFor="component-outlined" >
                                            Repeat Password<span className="required">*</span>
                                        </label>
                                        <OutlinedInput
                                            autoFocus
                                            required
                                            margin="dense"
                                            placeholder="Repeat Password"
                                            id="repeatPassword"
                                            {...register("repeatPassword", { required: true })}
                                            type="password"
                                            fullWidth
                                        />
                                    </FormControl>
                                </Box>
                                <Box className="form-container">
                                    <p className="title">Session Management</p>
                                    <FormControl fullWidth className="form-design">
                                        <label htmlFor="component-outlined" >
                                            General Timeout(minutes)<span className="required">*</span>
                                        </label>
                                        <OutlinedInput
                                            autoFocus
                                            required
                                            margin="dense"
                                            placeholder="General Timeout(minutes)"
                                            id="generalTimeOut"
                                            type="text"
                                            fullWidth
                                            {...register("generalTimeOut", { required: true })}
                                        />
                                    </FormControl>
                                    <FormControl fullWidth className="form-design">
                                        <label htmlFor="component-outlined" >
                                            Idle Timeout(minutes)<span className="required">*</span>
                                        </label>
                                        <OutlinedInput
                                            autoFocus
                                            placeholder="Idle Timeout(minutes)"
                                            margin="dense"
                                            {...register("idleTimeOut", { required: true })}
                                            name="idleTimeOut"
                                            type="text"
                                            fullWidth
                                        />
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item md={4}>
                                <Box className="form-container">
                                    <p className="title">Account Information</p>
                                    <FormControl fullWidth className="form-design">
                                        <label htmlFor="component-outlined" >
                                            Change Password Every (days)
                                        </label>
                                        <OutlinedInput
                                            autoFocus
                                            margin="dense"
                                            placeholder="Change Password Every (days)"
                                            id="changePasswordDays"
                                            type="text"
                                            fullWidth
                                            {...register("changePasswordDays")}
                                        />
                                    </FormControl>
                                    <FormControl fullWidth className="form-design">
                                        <label htmlFor="component-outlined" >
                                            Account Status<span className="required">*</span>
                                        </label>
                                        <Select 
                                            sx={{
                                                '& .MuiSelect-select': {
                                                padding: '8px',
                                                },
                                            }}
                                            autoFocus
                                            fullWidth
                                            id="accountStatus"
                                            {...register("accountStatus", { required: true })}
                                            >
                                            <MenuItem  value={"Active"}>Active</MenuItem > 
                                            <MenuItem  value={"Deactive"}>Deactive</MenuItem > 
                                        </Select>
                                    </FormControl>
                                    <FormControl fullWidth className="form-design">
                                        <label htmlFor="component-outlined" >
                                            Account Expiration Date
                                        </label>
                                        <OutlinedInput
                                            autoFocus
                                            required
                                            margin="dense"
                                            placeholder="Last Name"
                                            id="lastName"
                                            {...register("lastName", { required: true })}
                                            type="date"
                                            fullWidth
                                        />
                                    </FormControl>
                                    <FormControl fullWidth className="form-design">
                                        <label htmlFor="component-outlined" >
                                            Locale(Language Country)<span className="required">*</span>
                                        </label>
                                        <Select 
                                            sx={{
                                                '& .MuiSelect-select': {
                                                padding: '8px',
                                                },
                                            }}
                                            autoFocus
                                            fullWidth
                                            id="locale"
                                            {...register("locale", { required: true })}
                                            >
                                            <MenuItem  value={"Active"}>Active</MenuItem > 
                                            <MenuItem  value={"Deactive"}>Deactive</MenuItem > 
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Item Two
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        Item Three
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}>
                        Item Four
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={4}>
                        Item Five
                    </CustomTabPanel>
                </div>
                <div className="dialogfooter">
                    <Grid container justifyContent={"flex-between"}>
                        <Grid item md={4}>
                            <Button variant="contained" className="buttonStyle">Reset</Button>
                        </Grid>
                        <Grid item md={4}>
                            <Button variant="contained" className="buttonStyle">Next</Button>
                        </Grid>          
                        <Grid item md={4}>
                            <Button type="submit" className="buttonStyle" variant="contained">
                                <SaveIconOutlinedIcon style={{ fontSize: "18px", padding: "4px" }} />
                                Save & Close
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </form>
            
        </Dialog>
        
    )
}