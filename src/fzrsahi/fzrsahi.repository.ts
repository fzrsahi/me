import { Injectable } from '@nestjs/common';
import { ApiResponse } from 'src/configs/response';

@Injectable()
export class FzrsahiRepository {
  aboutMe(): ApiResponse {
    return {
      status: 'OK',
      data: 'me',
    };
  }
}
