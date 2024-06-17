import { Controller, Get } from '@nestjs/common';
import { FzrsahiService } from './fzrsahi.service';
import { ApiResponse } from 'src/configs/response';

export interface FzrsahiControllerInterface {
  aboutMe(): string;
}

@Controller('fzrsahi')
export class FzrsahiController {
  constructor(private readonly service: FzrsahiService) {}

  @Get('about-me')
  aboutMe(): ApiResponse {
    return this.service.aboutMe();
  }
}
