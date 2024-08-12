import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import StarIcon from "@mui/icons-material/Star";
import InstallIcon from "@mui/icons-material/Download";

const DetailAppPredict = () => {
  const { state } = useLocation();
  const data = state?.data;

  if (!data) {
    return <Typography variant="h6">No data available</Typography>;
  }

  const {
    appName,
    price,
    categoryEncoded,
    typeFree,
    typePaid,
    rating_predictions,
    installs_predictions,
  } = data;

  // Map encoded category to human-readable category
  const categoryMap = {
    1: "Business",
    // Add other mappings as needed
  };

  // Convert price to readable format
  const priceDisplay = price === 0 ? "Free" : `$${price}`;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Application Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Application Name</Typography>
              <Typography variant="body1">{appName}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Application Type</Typography>
              <Typography variant="body1">
                {typeFree ? "Free" : "Paid"} - {priceDisplay}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Application Category</Typography>
              <Typography variant="body1">
                {categoryMap[categoryEncoded]}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Predict Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Expected Reviews</Typography>
              <Typography variant="body1">
                {rating_predictions[0]?.toFixed(1)}K
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Expected Installs</Typography>
              <Typography variant="body1">
                {installs_predictions[0]?.toFixed(1)}K
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailAppPredict;
