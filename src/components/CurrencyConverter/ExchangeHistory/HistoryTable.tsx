import React, { FC } from 'react';
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

const HistoryTable: FC<Props> = ({ exchangeList, to }) => {
  // useEffect(() => {}, [to, exchangeList]);
  return (
    <TableContainer component={Paper}>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ minWidth: '50%' }}>
              Date
            </TableCell>
            <TableCell align="left" sx={{ minWidth: '50%' }}>
              Exchange rate
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exchangeList &&
            Object.entries(exchangeList)?.map(([item, value], i) => (
              <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{item}</TableCell>
                <TableCell align="left"> {value[to]}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HistoryTable;
