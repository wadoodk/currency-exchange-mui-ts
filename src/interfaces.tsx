export type ConversionRecord = {
  date: number;
  exchangeRate: number;
};

export interface ExchangeRecord {
  date: string;
  amount: number;
  rate: number;
  from: string;
  to: string;
}

export interface Rate {
  [index: string]: number;
}

export interface ExchangeHistoryType {
  [index: string]: Rate;
}
