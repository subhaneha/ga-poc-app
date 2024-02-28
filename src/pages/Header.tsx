import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { AccessTime, People } from "@mui/icons-material";

import ArticleIcon from "@mui/icons-material/Article";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css"; // Import the CSS file
import { CustomizedMenus } from "../components/common/MenuButton";
import { configurations, organizations, resources, servers, users } from "../assets/constants";


const Header = () => {
  const navigate = useNavigate();
  const handleDashboardBtn = () => {
    navigate('/');
  };
  return (
    <Grid className={styles['header-container']}>
      <Grid container md={10} className={styles["header-links-container"]}>
        <Typography
          className={styles["nav-link"]}
          style={{
            background: "rgb(0 100 155)",
            width: "80px",
            fontSize: "12px",
          }}
        >

          <Button style={{ background: 'rgb(0 100 155)', width: '128px', fontSize: '12px',color:'#ffffff' }} onClick={handleDashboardBtn}>
            <AccessTime style={{ fontSize: "18px", padding: "4px" }} />
            DASHBOARD
          </Button>
          
        </Typography>
        <Typography display="flex" alignItems="center" columnGap="4px">
          <CustomizedMenus menuConfig={users}></CustomizedMenus>
        </Typography>
        <Typography display="flex" alignItems="center" columnGap="4px">
          <CustomizedMenus menuConfig={resources} />
        </Typography>
        <Typography className={styles["nav-link"]}>
          <CustomizedMenus menuConfig={organizations} />
        </Typography>
        <Typography className={styles["nav-link"]}>
          <CustomizedMenus menuConfig={servers} />
        </Typography>
        <Typography className={styles["nav-link"]}>
          <CustomizedMenus menuConfig={configurations} />
        </Typography>
        <Typography
          className={styles["nav-link"]}
          style={{
            background: "rgb(0 100 155)",
            fontSize: "12px",
          }}
        >
          <ArticleIcon style={{ fontSize: "18px", padding: "4px" }} />
          OPENID CONNECT
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
