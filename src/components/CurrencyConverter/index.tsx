import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CurrencyConvterForm from './CurrencyConvterForm';
import DisplayResult from './DisplayResult';
import ExchangeHistory from './ExchangeHistory';
import { ExchangeRecord, Rate } from '../../interfaces';
import { format } from 'date-fns';

const CurrencyConverter = () => {
  const [from, setFrom] = useState<string>('EUR');
  const [to, setTo] = useState<string>('USD');
  const [amount, setAmount] = useState<string>('100');
  const [resultAmount, setResultAmount] = useState<string>('100');
  const [rate, setRate] = useState<number>(1.2);
  const [rateList, setRateList] = useState<Rate>({});
  const [record, setRecord] = useState<ExchangeRecord[]>([]);
  const [searchParams] = useSearchParams();

  const convertRate = async (updatedFrom: string, updatedTo: string) => {
    const res = await fetch(
      `https://api.exchangerate.host/convert?from=${updatedFrom}&to=${updatedTo}`
    );
    const data = await res.json();
    if (data?.result) setRate(data?.result);
    return data?.result;
  };

  // swap from , to. adjust the rate.
  const onSwapCurrency = async () => {
    await convertRate(to, from);
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  // save values in record after submit
  const saveConvertedCurrency = async () => {
    const newRate: number = await convertRate(from, to);
    const temp = [
      ...record,
      {
        date: format(new Date(), 'dd/MM/yyyy @ HH:mm'),
        amount: parseFloat(amount),
        rate: newRate,
        from: from,
        to: to
      }
    ];
    setResultAmount(amount);
    localStorage.setItem('record', JSON.stringify(temp));
    setRecord(temp);
  };

  // changing the from option
  const onChangeFrom = async (updatedFrom: string) => {
    setFrom(updatedFrom);
  };

  // changing the to value
  const onChangeTo = async (updatedTo: string) => {
    setTo(updatedTo);
  };

  // fetch latest rates
  useEffect(() => {
    const paramFrom = searchParams.get('from');
    const paramTo = searchParams.get('to');
    const paramAmount = searchParams.get('amount');
    if (paramFrom && paramTo && paramAmount) {
      setFrom(paramFrom);
      setTo(paramTo);
      setAmount(paramAmount);
      setResultAmount(paramAmount);
      convertRate(paramTo, paramFrom);
    } else {
      fetch('https://api.exchangerate.host/latest')
        .then((res) => res.json())
        .then((res) => {
          if (res?.rates) {
            setRateList(res?.rates);
            setRate(res?.rates[to]);
          }
        })
        .catch((e) => console.log(e));
    }

    // syncing the history record
    const list: ExchangeRecord[] = JSON.parse(localStorage.getItem('record') || '[]');
    if (list) {
      setRecord(list);
    }
  }, [setRecord, setRate, setRateList, searchParams]);

  return (
    <>
      <Typography variant="h3" my={4}>
        I want to convert
      </Typography>
      <CurrencyConvterForm
        from={from}
        to={to}
        amount={amount}
        onChangeFrom={onChangeFrom}
        onChangeTo={onChangeTo}
        setAmount={setAmount}
        onSwapCurrency={onSwapCurrency}
        convertCurrency={saveConvertedCurrency}
        rateList={rateList}
      />
      <DisplayResult from={from} to={to} amount={resultAmount} rate={rate} />
      <ExchangeHistory from={from} to={to} />
    </>
  );
};

export default CurrencyConverter;
