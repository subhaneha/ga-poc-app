import * as React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import { People } from "@mui/icons-material";
import BusinessIcon from "@mui/icons-material/Business";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SettingsIcon from "@mui/icons-material/Settings";
import { MenuConfig } from "../interfaces/menu.interface";
export const users: MenuConfig = {
  menuOptions: [
    {
      title: "Users",
      path: "/",
    },
    {
      title: "Delegation Code",
      path: "/users",
    },
  ],
  title: "USER",
  icon: People,
  path: "/users",
};

export const resources: MenuConfig = {
  menuOptions: [
    {
      title: "Resources",
      path: "/",
    },
    {
      title: "Resource Categories",
      path: "/",
    },
    {
      title: "Resource Rules",
      path: "/",
    },
    {
      title: "Resource policies",
      path: "/",
    },
  ],
  title: "RESOURCES",
  icon: FileCopyIcon,
  path: "/users",
};

export const organizations: MenuConfig = {
  menuOptions: [
    {
      title: "Roles",
      path: "/users",
    },
    {
      title: "Administrative Roles",
      path: "/users",
    },
    {
      title: "Macro Roles",
      path: "/users",
    },
    {
      title: "Role Categories",
      path: "/users",
    },
    {
      title: "User Types",
      path: "/users",
    },
  ],
  title: "Organizations",
  icon: BusinessIcon,
  path: "/users",
};

export const servers: MenuConfig = {
  menuOptions: [
    {
      title: "Servers",
      path: "/servers",
    },
    {
      title: "User Cache",
      path: "/users",
    },
  ],
  title: "Servers",
  icon: StorageIcon,
  path: "/servers",
};

export const configurations: MenuConfig = {
  menuOptions: [
    {
      title: "Password Rules",
      path: "/users",
    },
    {
      title: "Login Monitoring",
      path: "/users",
    },
    {
      title: "System Locale",
      path: "/users",
    },
    {
      title: "SMTP License",
      path: "/users",
    },
    {
      title: "System Configurations",
      path: "/users",
    },
    {
      title: "Session Management",
      path: "/users",
    },
    {
      title: "Configuration Reload",
      path: "/users",
    },
  ],
  title: "Configurations",
  icon: SettingsIcon,
  path: "/users",
};
