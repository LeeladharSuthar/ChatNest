import React, { Suspense, lazy, useState } from "react";
import { useNavigate } from "react-router-dom";
import { orange } from "../constants/color.js";
const SearchDialog = lazy(() => import("../dialog/Search.jsx"));
const NotificationDialog = lazy(() => import("../dialog/Notification.jsx"));
const NewGroupDialog = lazy(() => import("../dialog/NewGroup.jsx"));
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Backdrop,
} from "@mui/material";

import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationIcon,
} from "@mui/icons-material";

function Header() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    setIsMobile((val) => !val);
  };
  const openSearchDialog = () => {
    setIsNewGroup(false);
    setIsNotification(false);
    setIsSearch((val) => !val);
  };
  const openNewGroup = () => {
    setIsSearch(false);
    setIsNotification(false);
    setIsNewGroup((val) => !val);
  };
  const openNotification = () => {
    setIsNewGroup(false);
    setIsSearch(false);
    setIsNotification((val) => !val);
  };
  const navigateToGroup = () => {
    navigate("/groups");
  };
  const logoutHandler = () => {};
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              varient="h6"
              sx={{ display: { sm: "block", xs: "none", cursor: "pointer" } }}
            >
              ChatNest
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                title="Search"
                icon={<SearchIcon />}
                onClickFunction={openSearchDialog}
              />
              <IconBtn
                title="New Group"
                icon={<AddIcon />}
                onClickFunction={openNewGroup}
              />
              <IconBtn
                title="Manage Group"
                icon={<GroupIcon />}
                onClickFunction={navigateToGroup}
              />
              <IconBtn
                title="Notifications"
                icon={<NotificationIcon />}
                onClickFunction={openNotification}
              />
              <IconBtn
                title="Logout"
                icon={<LogoutIcon />}
                onClickFunction={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
}

const IconBtn = ({ title, onClickFunction, icon }) => {
  return (
    <>
      <Tooltip title={title}>
        <IconButton color="inherit" size="large" onClick={onClickFunction}>
          {icon}
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Header;
