import React, { FC } from 'react';
import Radio from '@mui/material/Radio';
import Grid from '@mui/material/Grid';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Props = {
  duration: string;
  onChangeDuration: (value: string) => void;
};

const HistoryTableOptions: FC<Props> = ({ duration, onChangeDuration }) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChangeDuration(event.target.value);
  };
  return (
    <Grid
      container
      direction={'row'}
      alignItems={'start'}
      justifyContent={'start'}
      spacing={2}
      mt={1}
      mb={1}
    >
      <Grid>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">Duration</InputLabel>
          <Select variant="standard" value={duration} onChange={handleChange}>
            <MenuItem value={7}>7 days</MenuItem>
            <MenuItem value={14}>14 days</MenuItem>
            <MenuItem value={30}>30 days</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid ml={5}>
        <FormControl>
          <RadioGroup defaultValue="table" row={true}>
            <FormControlLabel value="table" control={<Radio />} label="table" />
            <FormControlLabel value="chart" control={<Radio />} label="chart" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default HistoryTableOptions;
