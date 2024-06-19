import { Body, Controller, Get, Post } from '@nestjs/common';
import { FzrsahiService } from './fzrsahi.service';
import { ApiResponse } from 'src/configs/response';
import { ApiTags } from '@nestjs/swagger';
import { PostAboutMeDto } from './dto';

export interface FzrsahiControllerInterface {
  aboutMe(): string;
}

@ApiTags('fzrsahi')
@Controller('fzrsahi')
export class FzrsahiController {
  constructor(private readonly service: FzrsahiService) {}

  @Get('about-me')
  async getAboutMe(): Promise<ApiResponse> {
    return await this.service.GetAboutMe();
  }

  @Get('experiences')
  getExperiences(): ApiResponse {
    return this.service.getExperiences();
  }

  @Get('contacts')
  getContacts(): ApiResponse {
    return this.service.getContacts();
  }

  @Post('about-me')
  async postAboutMe(@Body() dto: PostAboutMeDto): Promise<ApiResponse> {
    return await this.service.postAboutMe(dto);
  }

  @Post('experiences')
  postExperiences(): ApiResponse {
    return this.service.postExperiences();
  }

  @Post('contacts')
  postContacts(): ApiResponse {
    return this.service.postContacts();
  }
}
