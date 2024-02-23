import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
export interface MenuConfig {
    title: string,
    icon: React.ElementType;
    menuOptions: MenuOptions[]
}
export interface MenuOptions {
    title: string,
    icon: React.ElementType;
    path: string
}

const StyledNavLink = styled(NavLink)({
    display: "flex",
    alignItems: "center",
    columnGap: "4px",
    width:'120px',
    textDecoration: "none",
});

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))
    (({ theme }) => ({
    })
    );

export const CustomizedMenus: React.FC<{ menuConfig: MenuConfig }> = ({ menuConfig }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button style={{ background: 'rgb(0 100 155)' }}
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                <menuConfig.icon />
                {menuConfig.title}
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {menuConfig.menuOptions.map((each) => (
                    <>
                        <MenuItem  onClick={handleClose} disableRipple>
                            <StyledNavLink  to={each.path} >
                                {each.title}
                                <each.icon />
                            </StyledNavLink>
                        </MenuItem>
                    </>
                ))}

            </StyledMenu>
        </div>
    );
}