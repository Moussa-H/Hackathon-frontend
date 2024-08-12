// src/components/NavbarDashboard.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/logo-app.png";

const NavbarDashboard = () => {
  const name = localStorage.getItem("name") || "User";
  const firstLetter = name.charAt(0).toUpperCase();
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    // Clear token and name from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("name");

    // Redirect to home page
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#a6a6a6", // Updated background color
        color: "#ffffff", // Updated text color to contrast with the background
        boxShadow: "none",
        mb: 3,
        marginTop: 3,
        borderRadius: "20px", // Added border radius
        padding: "0 16px", // Added padding to ensure content doesn't touch edges
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} style={{ width: "100%", marginRight: "10px" }} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ bgcolor: "#605BFF", marginRight: "10px" }}>
            {firstLetter}
          </Avatar>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, marginRight: "10px" }}
          >
            {name}
          </Typography>
          <IconButton onClick={handleLogout} color="inherit">
            <LogoutIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarDashboard;
