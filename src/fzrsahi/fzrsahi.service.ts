import { Injectable } from '@nestjs/common';
import { FzrsahiRepository } from './fzrsahi.repository';
import { ApiResponse } from 'src/configs/response';

@Injectable()
export class FzrsahiService {
  constructor(private readonly repository: FzrsahiRepository) {}
  aboutMe() : ApiResponse {
    return this.repository.aboutMe();
  }
}
