import { Injectable } from '@nestjs/common';
import { ApiResponse } from 'src/configs/response';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostAboutMeDto } from './dto';
import { about_me } from '@prisma/client';

@Injectable()
export class FzrsahiRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAboutMe(): Promise<ApiResponse> {
    const data: about_me = await this.prisma.about_me.findFirst();

    return {
      status: 'OK',
      data: data.description,
    };
  }

  getExperiences(): ApiResponse {
    return {
      status: 'OK',
      data: 'experiences',
    };
  }

  getContacts(): ApiResponse {
    return {
      status: 'OK',
      data: 'ok',
    };
  }

  postContacts(): ApiResponse {
    return {
      status: 'OK',
      data: 'ok',
    };
  }

  postExperiences(): ApiResponse {
    return {
      data: 'OK',
      status: 'OK',
    };
  }

  async postAboutMe(dto: PostAboutMeDto): Promise<ApiResponse> {
    const data: about_me = await this.prisma.about_me.create({
      data: {
        description: dto.description,
      },
    });

    return {
      status: 'OK',
      data,
    };
  }
}
