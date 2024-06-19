import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { FzrsahiService } from './fzrsahi.service';
import { ApiResponse } from 'src/configs/response';
import { ApiTags } from '@nestjs/swagger';
import { PostAboutMeDto, PostContactsDto, PostExperiencesDto } from './dto';
import { AuthGuard } from './guard/auth.guard';

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
  async getExperiences(): Promise<ApiResponse> {
    return await this.service.getExperiences();
  }

  @Get('contacts')
  async getContacts(): Promise<ApiResponse> {
    return await this.service.getContacts();
  }

  @UseGuards(AuthGuard)
  @Post('about-me')
  async postAboutMe(@Body() dto: PostAboutMeDto): Promise<ApiResponse> {
    return await this.service.postAboutMe(dto);
  }

  @UseGuards(AuthGuard)
  @Post('experiences')
  async postExperiences(@Body() dto: PostExperiencesDto): Promise<ApiResponse> {
    return await this.service.postExperiences(dto);
  }

  @UseGuards(AuthGuard)
  @Post('contacts')
  async postContacts(@Body() dto: PostContactsDto): Promise<ApiResponse> {
    return await this.service.postContacts(dto);
  }
}
