import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import PaidIcon from "@mui/icons-material/AttachMoney"; // Example icon for price
import CategoryIcon from "@mui/icons-material/Category"; // Example icon for category
import StarIcon from "@mui/icons-material/Star"; // Example icon for ratings
import DownloadIcon from "@mui/icons-material/Download"; // Example icon for installs

const DetailAppPredict = () => {
  const { state } = useLocation();
  const data = state?.data;

  if (!data) {
    return <Typography variant="h6">No data available</Typography>;
  }

  const {
    appName,
    rating_predictions,
    installs_predictions,
    size,
    price,
    category,
    typeFree,
    typePaid,
  } = data;

  const categoryName = category.replace("_", " "); // Adjust as needed

  // Rounding the predictions
  const roundedRatingPredictions = Math.round(rating_predictions * 10) / 10; // Rounds to 1 decimal place
  const roundedInstallsPredictions = Math.round(installs_predictions); // Rounds to the nearest integer

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Application Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Application Name</Typography>
              <Typography variant="body1">{appName}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Application Type</Typography>
              <Typography variant="body1">
                {typeFree ? "Free" : typePaid ? "Paid" : "Unknown"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Application Category</Typography>
              <Typography variant="body1">{categoryName}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Predict Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Expected Reviews</Typography>
              <Typography variant="body1">
                {roundedRatingPredictions}
              </Typography>
              <StarIcon />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Expected Installs</Typography>
              <Typography variant="body1">
                {roundedInstallsPredictions}
              </Typography>
              <DownloadIcon />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailAppPredict;
