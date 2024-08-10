import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./landing/landing";
import "./App.css";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
