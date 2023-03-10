import React, { FC, useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { format, subDays } from 'date-fns';

import HistoryTableOptions from './ExchangeHistory/HistoryTableOptions';
import HistoryTable from './ExchangeHistory/HistoryTable';
import { ExchangeHistoryType } from '../../interfaces';
import HistoryStatistics from './ExchangeHistory/HistoryStatistics';

interface Props {
  from: string;
  to: string;
}

const ExchangeHistory: FC<Props> = ({ from, to }) => {
  const [duration, setDuration] = useState('7');
  const [exchangeList, setExchangeList] = useState<
    ExchangeHistoryType | undefined
  >();

  const fetchPrevousRates = async (start: string, end: string) => {
    const res = await fetch(
      `https://api.exchangerate.host/timeseries?start_date=${start}&end_date=${end}&base=${from}`
    );
    const data = await res.json();
    setExchangeList(data?.rates);
  };

  useEffect(() => {
    const end = format(new Date(), 'yyyy-MM-dd');
    const start = format(subDays(new Date(), parseInt(duration)), 'yyyy-MM-dd');
    fetchPrevousRates(start, end);
  }, [from, to, duration]);

  const onChangeDuration = async (value: string) => {
    const end = format(new Date(), 'yyyy-MM-dd');
    const start = format(subDays(new Date(), parseInt(value)), 'yyyy-MM-dd');
    setDuration(value);
    fetchPrevousRates(start, end);
  };

  return (
    <Grid container direction="row" alignItems="start" spacing={3} mt={2}>
      <Typography variant="h3" mb={4}>
        Exchange History
      </Typography>
      <HistoryTableOptions
        duration={duration}
        onChangeDuration={onChangeDuration}
      />

      <Grid
        container
        direction="row"
        justifyContent={'center'}
        alignItems="start"
        mt={4}
      >
        <Grid width={'49%'}>
          <HistoryTable exchangeList={exchangeList} to={to} />
        </Grid>

        <Grid width={'49%'} ml={1}>
          <HistoryStatistics exchangeList={exchangeList} to={to} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExchangeHistory;
