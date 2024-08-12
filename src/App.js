import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Register";
import Login from "./Login";
import LandingPage from "./LandingPage/LandingPage"; 
import Dashboard from "./Dashboard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/theme";
import Dash from "./dashboard1/dashboard1";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
