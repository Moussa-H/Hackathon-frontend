import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Grid, CircularProgress } from '@mui/material';

const CompetitorAnalysis = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await fetch('/api/apps'); 
        const data = await response.json();
        if (response.ok) {
          setApps(data.data);
        } else {
          throw new Error('Failed to fetch apps');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  const renderBoxes = (app) => {
    const appData = {
      name: app?.app || 'App Name',
      type: app?.type || 'Type',
      category: app?.category || 'Category',
      reviews: app?.reviews || 'Reviews',
      rating: app?.rating || 'Rating',
      installs: app?.installs || 'Installs'
    };

    return [
      { title: appData.name, subtitle: 'Application Name' },
      { title: appData.type, subtitle: 'Application Type' },
      { title: appData.category, subtitle: 'Application Category' },
      { title: appData.reviews, subtitle: 'Reviews' },
      { title: appData.rating, subtitle: 'Rating' },
      { title: appData.installs, subtitle: 'Installs' }
    ].map((box, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card sx={{ backgroundColor: '#5B93FF', color: 'black' }}>
          <CardContent>
            <Typography variant="h6" component="div" sx={{ color: 'black' }}>
              {box.title}
            </Typography>
            <Typography sx={{ mb: 1.5, color: 'black' }}>
              {box.subtitle}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  const renderContent = () => {
    if (loading) return <CircularProgress color="inherit" />;
    if (error) return <Typography variant="body2">Error: {error}</Typography>;

    return apps.map((app, index) => (
      <React.Fragment key={index}>
        {renderBoxes(app)}
      </React.Fragment>
    ));
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Competitor Analysis
      </Typography>
      <Grid container spacing={2}>
        {loading || error ? Array.from(new Array(6)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: '#F3F3FF', color: 'black' }}>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ color: 'black' }}>
                  Loading...
                </Typography>
                <Typography sx={{ mb: 1.5, color: 'black' }}>
                  {[
                    'Application Name',
                    'Application Type',
                    'Application Category',
                    'Reviews',
                    'Rating',
                    'Installs'
                  ][index]}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )) : renderContent()}
      </Grid>
    </Box>
  );
};

export default CompetitorAnalysis;
