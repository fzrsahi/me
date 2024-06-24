import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { FzrsahiService } from './fzrsahi.service';
import { ApiResponse } from 'src/configs/response';
import { ApiBasicAuth, ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';
import { PostAboutMeDto, PostContactsDto, PostExperiencesDto } from './dto';
import { AuthGuard } from './guard/auth.guard';
import {
  appConfig,
  statusOk,
  swaggerAuthNameConstants,
  swaggerConstants,
} from 'src/configs';
import { about_me, contacts, experiences } from '@prisma/client';
import { ExceptionsFilterService } from 'src/exceptions/exceptions.service';

@ApiTags(swaggerConstants.tag)
@UseFilters( ExceptionsFilterService)
@Controller('fzrsahi')
export class FzrsahiController {
  constructor(
    private readonly service: FzrsahiService,
    private readonly exceptionService: ExceptionsFilterService,
  ) {}

  @Get('about-me')
  async getAboutMe(): Promise<ApiResponse> {
    try {
      const data: about_me = await this.service.getAboutMe();

      return {
        status: statusOk,
        data,
      };
    } catch (error) {
      this.exceptionService.handlerError(error);
    }
  }

  @Get('experiences')
  async getExperiences(): Promise<ApiResponse> {
    try {
      const data: experiences[] = await this.service.getExperiences();
      return {
        status: statusOk,
        data,
      };
    } catch (error) {
      this.exceptionService.handlerError(error);
    }
  }

  @Get('contacts')
  async getContacts(): Promise<ApiResponse> {
    try {
      const data: contacts[] = await this.service.getContacts();
      return {
        status: statusOk,
        data,
      };
    } catch (error) {
      this.exceptionService.handlerError(error);
    }
  }

  @UseGuards(AuthGuard)
  @ApiExcludeEndpoint(appConfig.hidePostEndpoints)
  @ApiBasicAuth(swaggerAuthNameConstants)
  @Post('about-me')
  async postAboutMe(@Body() dto: PostAboutMeDto): Promise<ApiResponse> {
    try {
      const data: about_me = await this.service.postAboutMe(dto);
      return {
        status: statusOk,
        data,
      };
    } catch (error) {
      this.exceptionService.handlerError(error);
    }
  }

  @UseGuards(AuthGuard)
  @ApiExcludeEndpoint(appConfig.hidePostEndpoints)
  @ApiBasicAuth(swaggerAuthNameConstants)
  @Post('experiences')
  async postExperiences(@Body() dto: PostExperiencesDto): Promise<ApiResponse> {
    try {
      const data: experiences = await this.service.postExperiences(dto);
      return {
        status: statusOk,
        data,
      };
    } catch (error) {
      this.exceptionService.handlerError(error);
    }
  }

  @UseGuards(AuthGuard)
  @ApiExcludeEndpoint(appConfig.hidePostEndpoints)
  @ApiBasicAuth(swaggerAuthNameConstants)
  @Post('contacts')
  async postContacts(@Body() dto: PostContactsDto): Promise<ApiResponse> {
    try {
      const data: contacts = await this.service.postContacts(dto);
      return {
        status: statusOk,
        data,
      };
    } catch (error) {
      this.exceptionService.handlerError(error);
    }
  }
}
