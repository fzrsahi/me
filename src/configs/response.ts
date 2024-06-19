export interface ApiResponse {
  status: Status;
  data: any;
}

type Status = 'OK' | 'FAIL';
