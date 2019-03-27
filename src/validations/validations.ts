export interface RPCGetRequest {
  /**
   * @minLength 1
   */
  ticker: string,
  /**
   * @format date
   */
  dateFrom: string,
  /**
   * @format date
   */
  dateTo: string,
  /**
   * @minimum 2000
   */
  frequency?: 60000,
  marketPeriod?: 'MARKET' | 'FOREX_MARKET' | 'ALL',
  extraParams?: [number, string, number, number[]]
}
