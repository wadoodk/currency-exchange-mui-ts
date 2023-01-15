import React, { FC, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ExchangeHistoryType } from '../../../interfaces';

type Props = {
  exchangeList: ExchangeHistoryType | undefined;
  to: string;
};

const HistoryStatistics: FC<Props> = ({ exchangeList, to }) => {
  const [lowest, setLowest] = useState(0);
  const [average, setAverage] = useState('');
  const [maximum, setMaximum] = useState(0);

  // Calculating statistics values
  useEffect(() => {
    if (exchangeList) {
      //calculating statistics values
      const { min, max, sum, length } = Object.entries(exchangeList).reduce(
        (acc, curr) => {
          const low =
            acc.min === 0 || acc.min > curr[1][to] ? curr[1][to] : acc.min;
          const high =
            acc.max === 0 || acc.max < curr[1][to] ? curr[1][to] : acc.max;

          return {
            min: low,
            max: high,
            length: acc.length + 1,
            sum: acc.sum + curr[1][to],
          };
        },
        { sum: 0, min: 0, max: 0, length: 0 }
      );
      setLowest(min);
      setMaximum(max);
      setAverage((sum / length).toFixed(6));
    }
  }, [to, exchangeList]);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left" size="medium" colSpan={2}>
              Statistics
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={0}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="left" width={'50%'}>
              Lowest
            </TableCell>
            <TableCell align="left" width={'50%'}>
              {lowest}
            </TableCell>
          </TableRow>

          <TableRow
            key={2}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="left" width={'50%'}>
              Average
            </TableCell>
            <TableCell align="left" width={'50%'}>
              {average}
            </TableCell>
          </TableRow>

          <TableRow
            key={3}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="left" width={'50%'}>
              Maximum
            </TableCell>
            <TableCell align="left" width={'50%'}>
              {maximum}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HistoryStatistics;
