import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { convertToCurrency } from '../Utils/helper';

interface Props {
  from: string;
  to: string;
  rate: number;
  amount: string;
}

const DisplayResult: FC<Props> = ({ from, to, rate, amount }) => {
  return (
    <Grid container direction="column" alignItems="center" spacing={3} my={2}>
      <Grid item>
        <Typography variant="h1">
          {`${convertToCurrency(parseInt(amount), from)} = `}
          <Typography
            component="span"
            align="left"
            fontSize={49}
            fontWeight="Bold"
            color="secondary"
          >
            {convertToCurrency(parseInt(amount) * rate, to, 0)}
          </Typography>
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="body1">
          {`${convertToCurrency(1, from)} = ${convertToCurrency(
            1 * rate,
            to,
            6
          )}`}
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="body1">
          {`${convertToCurrency(1, to)} = ${convertToCurrency(
            1 / rate,
            from,
            5
          )}`}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default DisplayResult;
