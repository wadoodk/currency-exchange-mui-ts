import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CurrencyHistoryTable from './CurrencyHistoryTable';

const CurrencyHistory = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3" my={3}>
          Conversion History
        </Typography>
        <CurrencyHistoryTable />
      </Container>
    </>
  );
};

export default CurrencyHistory;
