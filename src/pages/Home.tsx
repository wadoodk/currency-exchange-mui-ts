import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CurrencyConverter from '../components/CurrencyConverter';

const Home = () => {
  return (
    <Container component="main" maxWidth="md">
      <Grid mt={8} direction="column" justifyContent="space-between" alignItems="center">
        <CurrencyConverter />
      </Grid>
    </Container>
  );
};

export default Home;
