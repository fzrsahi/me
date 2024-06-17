export interface ApiResponse {
  status: Status;
  data: string;
}

type Status = 'OK' | 'FAIL';
