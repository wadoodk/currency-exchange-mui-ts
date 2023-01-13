import React, { FC } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Rate } from '../../interfaces';

interface Props {
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  from: string;
  onChangeFrom: (updatedFrom: string) => void;
  to: string;
  rateList: Rate;
  onChangeTo: (updatedTo: string) => void;
  onSwapCurrency: () => void;
  convertCurrency: () => void;
}

const CurrencyConvterForm: FC<Props> = ({
  amount,
  setAmount,
  from,
  onChangeFrom,
  to,
  onChangeTo,
  onSwapCurrency,
  convertCurrency,
  rateList
}) => (
  <Grid container spacing={2} direction="row" justifyContent="space-between" alignItems="center">
    <Grid xs={2}>
      <TextField
        label="amount"
        variant="standard"
        type="number"
        className="input"
        value={amount}
        sx={{ width: '95%' }}
        onChange={(e) => setAmount(e.currentTarget.value)}
      />
    </Grid>

    <Grid xs={3}>
      <FormControl variant="standard" sx={{ width: '100%' }}>
        <InputLabel id="demo-simple-select-standard-label">from</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={from}
          onChange={(e) => onChangeFrom(e.target.value as string)}
          label="from">
          {rateList &&
            Object.entries(rateList).map(([k], i) => (
              <MenuItem value={k} key={i}>
                {k}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Grid>

    <Grid xs={1} textAlign="center">
      <Button
        sx={{
          width: '45px',
          height: '45px'
        }}
        variant="outlined"
        size="small"
        onClick={() => onSwapCurrency()}>
        <CompareArrowsIcon color="primary" fontSize="medium" />
      </Button>
    </Grid>

    <Grid xs={3}>
      <FormControl variant="standard" sx={{ width: '100%' }}>
        <InputLabel id="demo-simple-select-standard-label">to</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={to}
          onChange={(e) => onChangeTo(e.target.value as string)}
          label="to">
          {rateList &&
            Object.entries(rateList).map(([k], i) => (
              <MenuItem value={k} key={i}>
                {k}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Grid>

    <Grid xs={2} textAlign="end">
      <Button variant="contained" onClick={() => convertCurrency()}>
        CONVERT
      </Button>
    </Grid>
  </Grid>
);

export default CurrencyConvterForm;
