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
  const [average, setAverage] = useState(0);
  const [max, setMax] = useState(0);

  // Calculating statistics values
  useEffect(() => {
    if (exchangeList) {
      const list: any = Object.entries(exchangeList).map(([key, val]) => {
        return val[to];
      });

      // console.log("list", list.sort((a: number, b: number) => (a - b)));
      const sortedList = list.sort((a: number, b: number) => a - b);
      setLowest(sortedList[0]);
      setMax(sortedList[list.length - 1]);
      setAverage(sortedList[list.length - 1]);
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
          <TableRow key={0} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="left" width={'50%'}>
              Lowest
            </TableCell>
            <TableCell align="left" width={'50%'}>
              {lowest}
            </TableCell>
          </TableRow>

          <TableRow key={2} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="left" width={'50%'}>
              Average
            </TableCell>
            <TableCell align="left" width={'50%'}>
              {average}
            </TableCell>
          </TableRow>

          <TableRow key={3} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="left" width={'50%'}>
              Maximum
            </TableCell>
            <TableCell align="left" width={'50%'}>
              {max}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HistoryStatistics;
