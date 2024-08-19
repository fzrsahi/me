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
import {
  ApiBadRequestResponse,
  ApiBasicAuth,
  ApiExcludeEndpoint,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { PostAboutMeDto, PostContactsDto, PostExperiencesDto } from './dto';
import { AuthGuard } from './guard/auth.guard';
import {
  appConfig,
  statusOk,
  swaggerAboutMeDesc,
  swaggerAuthNameConstants,
  swaggerBadRequestResponse,
  swaggerConstants,
  swaggerContactsDesc,
  swaggerExperiencesDesc,
  swaggerInternalServerErrorResponse,
  swaggerOKResponse,
} from 'src/configs';
import { about_me, contacts, experiences } from '@prisma/client';
import { ExceptionsFilterService } from 'src/exceptions/exceptions.service';
import { SkipThrottle } from '@nestjs/throttler';

@ApiTags(swaggerConstants.tag)
@UseFilters(ExceptionsFilterService)
@Controller('fzrsahi')
@ApiBadRequestResponse(swaggerBadRequestResponse)
@ApiInternalServerErrorResponse(swaggerInternalServerErrorResponse)
export class FzrsahiController {
  constructor(
    private readonly service: FzrsahiService,
    private readonly exceptionService: ExceptionsFilterService,
  ) {}

  @ApiOperation(swaggerAboutMeDesc)
  @Get('about-me')
  @ApiOkResponse(swaggerOKResponse)
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

  @ApiOperation(swaggerExperiencesDesc)
  @ApiOkResponse(swaggerOKResponse)
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

  @ApiOperation(swaggerContactsDesc)
  @ApiOkResponse(swaggerOKResponse)
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

  @SkipThrottle()
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

  @SkipThrottle()
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

  @SkipThrottle()
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
