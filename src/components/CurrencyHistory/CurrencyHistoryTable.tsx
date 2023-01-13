import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { ExchangeRecord } from '../../interfaces';

const CurrencyHistoryTable = () => {
  const [onHover, setOnHover] = useState<number>(-1);
  const [record, setRecord] = useState<ExchangeRecord[]>([]);

  const onMouseEnter = (obj: number) => {
    setOnHover(obj);
  };

  const onMouseLeave = () => {
    setOnHover(-1);
  };

  const onViewHistory = (obj: number) => {
    console.log('onViewHistory', obj);
  };

  const onDeleteHistory = (obj: number) => {
    const list = record?.filter((item, i) => obj !== i);
    localStorage.setItem('record', JSON.stringify(list));
    setRecord(list);
  };

  useEffect(() => {
    const list: ExchangeRecord[] = JSON.parse(localStorage.getItem('record') ?? '[]');
    if (list) {
      setRecord(list);
    }
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell align="left" width={'20%'}>
              Date
            </TableCell>
            <TableCell align="left" width={'40%'}>
              Exchange rate
            </TableCell>
            <TableCell align="center" width={'40%'}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {record?.map((item, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onMouseEnter={() => onMouseEnter(i)}
              onMouseLeave={() => onMouseLeave()}>
              <TableCell align="left">{item.date}</TableCell>
              <TableCell align="left">
                {`Converted and amount of ${item.amount} from ${item.from} to ${item.to}`}
              </TableCell>
              <TableCell align="right" sx={{ padding: 0 }}>
                {' '}
                {onHover === i && (
                  <>
                    <Button size="small" onClick={() => onViewHistory(i)}>
                      <RemoveRedEyeIcon fontSize="small" />
                      &nbsp; View
                    </Button>
                    <Button size="small" color="warning" onClick={() => onDeleteHistory(i)}>
                      <DeleteForeverIcon fontSize="small" />
                      Delete from history
                    </Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurrencyHistoryTable;
