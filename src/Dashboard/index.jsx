import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../component/SideBar/index";
import PredictionAnalysis from "../component/PredictionAnalysis";
import CompetitorAnalysis from "../component/CompetitorAnalysis";
import Projects from "../component/Projects";
import NavbarDashboard from "../component/NavbarDashboard";
import { Box, Container } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          paddingTop: 0,
          width: `calc(100% - 240px)`,
        }}
      >
        <NavbarDashboard />
        <Container>
          <Routes>
            <Route
              path="/"
              element={<PredictionAnalysis />}
            />
            <Route
              path="competitor-analysis"
              element={<CompetitorAnalysis />}
            />
            <Route path="my-project" element={<Projects />} />
          </Routes>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
