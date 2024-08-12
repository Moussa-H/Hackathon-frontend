// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import ProjectIcon from "../../Images/Projects.svg";
import PredictionIcon from "../../Images/Prediction.svg";
import AnalysisIcon from "../../Images/Analysis.svg";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        <ListItem button component={Link} to="">
          <ListItemIcon>
            <img
              src={PredictionIcon}
              alt="Prediction Analysis"
              style={{ width: 24, height: 24 }}
            />
          </ListItemIcon>
          <ListItemText primary="Prediction Analysis" />
        </ListItem>
        <ListItem button component={Link} to="competitor-analysis">
          <ListItemIcon>
            <img
              src={AnalysisIcon}
              alt="Competitor Analysis"
              style={{ width: 24, height: 24 }}
            />
          </ListItemIcon>
          <ListItemText primary="Competitor Analysis" />
        </ListItem>
        <ListItem button component={Link} to="my-project">
          <ListItemIcon>
            <img
              src={ProjectIcon}
              alt="My Project"
              style={{ width: 24, height: 24 }}
            />
          </ListItemIcon>
          <ListItemText primary="My Project" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
