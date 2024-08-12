import React, { useState } from "react";
import { Container, Box, Typography, Button, Card, CardContent } from "@mui/material";
import generateImg from "../../Images/generate.svg";
import PopupGenerate from "../PopupGenerate"; // Import the PopupGenerate component
import { useNavigate } from 'react-router-dom';

const PredictionAnalysis = () => {
  const [open, setOpen] = useState(false);
  const [responseData, setResponseData] = useState(null); // State to store the response data
  const navigate = useNavigate();

  const handleClickOpen = async () => {
    setOpen(true);

    // Assuming this is where you make the API call and get the response
    const response = await fetch('/api/getPrediction'); // Replace with your actual API call
    const data = await response.json();
    setResponseData(data);

    // Navigate to the detail page and pass the data as state
    navigate('/detailapppredict', { state: { data } });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        border: 0,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 600,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: 0,
          padding: 0,
          boxShadow: 0,
        }}
      >
        <img
          src={generateImg}
          alt="Generate Model"
          style={{ width: 300, height: 300, marginBottom: "1em" }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{
              fontSize: "25px",
              fontWeight: 600,
            }}
          >
            Machine Learning Model
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 300,
            }}
            variant="body1"
            paragraph
          >
            This feature allows users to benefit from a developed and updated
            model that predicts the potential of success of the app based on
            features by analyzing competitors.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              fontSize: "13px",
              padding: "5px 60px",
              backgroundColor: "#605BFF",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#4A49D8",
              }
            }}
            onClick={handleClickOpen} // Open the popup on button click and fetch data
          >
            Generate Now
          </Button>
        </CardContent>
      </Card>
      <PopupGenerate open={open} handleClose={handleClose} /> {/* Render the popup */}
    </Container>
  );
};

export default PredictionAnalysis;
