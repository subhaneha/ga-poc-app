import React from "react";
import { Grid, Typography } from "@mui/material";
import { AccessTime, People } from "@mui/icons-material";
import BusinessIcon from "@mui/icons-material/Business";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import StorageIcon from "@mui/icons-material/Storage";
import SettingsIcon from "@mui/icons-material/Settings";
import ArticleIcon from "@mui/icons-material/Article";
import { NavLink } from "react-router-dom";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <Grid className="header-container">
      <Grid container md={10} className="header-links-container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <AccessTime />
          Dashboard
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <People />
          Users
        </NavLink>
        <Typography className="nav-link">
          <FileCopyIcon />
          Resources
        </Typography>
        <Typography className="nav-link">
          <BusinessIcon />
          Organization
        </Typography>
        <Typography className="nav-link">
          <StorageIcon />
          Servers
        </Typography>
        <Typography className="nav-link">
          <SettingsIcon />
          Configuration
        </Typography>
        <NavLink
          to="/openId"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <ArticleIcon />
          OpenID Connect
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default Header;
