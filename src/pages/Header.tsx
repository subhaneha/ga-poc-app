import React from "react";
import { Grid, Typography, styled } from "@mui/material";
import { AccessTime, People, } from "@mui/icons-material";
import BusinessIcon from '@mui/icons-material/Business';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import ArticleIcon from '@mui/icons-material/Article';
import { NavLink } from "react-router-dom";
const StyledNavLink = styled(NavLink)({
  display: "flex",
  alignItems: "center",
  columnGap: "4px",
  color: "#ffffff",
  fill: "#ffffff",
  textDecoration: "none",
  padding: "12px 8px",
  ".active": {
    backgroundColor: "#ffffff",
  },
});
const Header = () => {
  return (
    <Grid
      style={{ backgroundColor: "#00649b", color: "#ffffff", display: "flex" }}
    >
      <Grid
        container
        md={10}
        display={"flex"}
        columnGap="12px"
        margin={"auto"}
        padding="4px 0"
      >
        <StyledNavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <AccessTime />
          Dashboard
        </StyledNavLink>
        <StyledNavLink
          to="/users"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <People />
          Users
        </StyledNavLink>
        <Typography display="flex" alignItems="center" columnGap="4px">
          <FileCopyIcon />
          Resources
        </Typography>
        <Typography display="flex" alignItems="center" columnGap="4px">
          <BusinessIcon />
          Organization
        </Typography>
        <Typography display="flex" alignItems="center" columnGap="4px">
          <StorageIcon />
          Servers
        </Typography>
        <Typography display="flex" alignItems="center" columnGap="4px">
          <SettingsIcon />
          Configuration
        </Typography>
        <Typography display="flex" alignItems="center" columnGap="4px">
          <ArticleIcon />
          Opened Connect
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
