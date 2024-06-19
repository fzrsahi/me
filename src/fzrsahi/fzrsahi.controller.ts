import { Controller, Get } from '@nestjs/common';
import { FzrsahiService } from './fzrsahi.service';
import { ApiResponse } from 'src/configs/response';
import { ApiTags } from '@nestjs/swagger';

export interface FzrsahiControllerInterface {
  aboutMe(): string;
}

@ApiTags('fzrsahi')
@Controller('fzrsahi')
export class FzrsahiController {
  constructor(private readonly service: FzrsahiService) {}

  @Get('about-me')
  aboutMe(): ApiResponse {
    return this.service.aboutMe();
  }

  @Get('experiences')
  getExperiences(): ApiResponse {
    return this.service.getExperiences();
  }

  @Get('contacts')
  getContacts(): ApiResponse {
    return this.service.getContacts();
  }
}
