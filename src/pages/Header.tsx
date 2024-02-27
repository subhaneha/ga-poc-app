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
import { CustomizedMenus, MenuConfig } from "../components/common/MenuButton";
const resources: MenuConfig = {
  menuOptions: [
    {
      title: "resources",
      icon: StorageIcon,
      path: "/",
    },
  ],
  title: "RESOURCES",
  icon: FileCopyIcon,
};
const users: MenuConfig = {
  menuOptions: [
    {
      title: "Create User",
      icon: StorageIcon,
      path: "/users",
    },
  ],
  title: "USER",
  icon: People,
  path: "/users",
};

const organizations: MenuConfig = {
  menuOptions: [
    {
      title: "Org",
      icon: StorageIcon,
      path: "/users",
    },
  ],
  title: "Organizations",
  icon: BusinessIcon,
};

const servers: MenuConfig = {
  menuOptions: [
    {
      title: "server",
      icon: StorageIcon,
      path: "/users",
    },
  ],
  title: "Servers",
  icon: StorageIcon,
};

const configurations: MenuConfig = {
  menuOptions: [
    {
      title: "Config",
      icon: StorageIcon,
      path: "/users",
    },
  ],
  title: "Configurations",
  icon: SettingsIcon,
};
const Header = () => {
  return (
    <Grid className="header-container">
      <Grid container md={10} className="header-links-container">
        <Typography
          className="nav-link"
          style={{
            background: "rgb(0 100 155)",
            width: "80px",
            fontSize: "12px",
          }}
        >
          <NavLink
            style={{
              background: "rgb(0 100 155)",
              fontSize: "12px",
              padding: "8px",
            }}
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <AccessTime style={{ fontSize: "18px", padding: "4px" }} />
            Dashboard
          </NavLink>
        </Typography>
        <Typography display="flex" alignItems="center" columnGap="4px">
          <CustomizedMenus menuConfig={users}></CustomizedMenus>
        </Typography>
        <Typography display="flex" alignItems="center" columnGap="4px">
          <CustomizedMenus menuConfig={resources} />
        </Typography>
        <Typography className="nav-link">
          <CustomizedMenus menuConfig={organizations} />
        </Typography>
        <Typography className="nav-link">
          <CustomizedMenus menuConfig={servers} />
        </Typography>
        <Typography className="nav-link">
          <CustomizedMenus menuConfig={configurations} />
        </Typography>
        <Typography
          className="nav-link"
          style={{
            background: "rgb(0 100 155)",
            width: "125px",
            fontSize: "12px",
          }}
        >
          <ArticleIcon style={{ fontSize: "18px", padding: "4px" }} />
          OpenID Connect
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
