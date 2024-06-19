import { statusOk, statusFail } from './constants';

export interface ApiResponse {
  status: Status;
  data: any;
}

type Status = typeof statusOk | typeof statusFail;
