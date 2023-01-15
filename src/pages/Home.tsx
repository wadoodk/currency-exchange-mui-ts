import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CurrencyConverter from '../components/CurrencyConverter';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="start"
      >
        <CurrencyConverter />
      </Grid>
    </Container>
  );
};

export default Home;
