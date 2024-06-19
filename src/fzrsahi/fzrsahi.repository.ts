import { Injectable } from '@nestjs/common';
import { ApiResponse } from 'src/configs/response';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostAboutMeDto, PostContactsDto, PostExperiencesDto } from './dto';
import { about_me, contacts, experiences } from '@prisma/client';
import { statusOk } from 'src/configs';

@Injectable()
export class FzrsahiRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAboutMe(): Promise<ApiResponse> {
    try {
      const data: about_me = await this.prisma.about_me.findFirst();

      return {
        status: statusOk,
        data: data.description,
      };
    } catch (error) {
      console.error(error);
    }
  }

  async getExperiences(): Promise<ApiResponse> {
    try {
      const data: experiences[] = await this.prisma.experiences.findMany();

      return {
        status: statusOk,
        data,
      };
    } catch (error) {
      console.error(error);
    }
  }

  async getContacts(): Promise<ApiResponse> {
    try {
      const data: contacts[] = await this.prisma.contacts.findMany();
      return {
        status: statusOk,
        data,
      };
    } catch (error) {
      console.error(error);
    }
  }

  async postContacts(dto: PostContactsDto): Promise<ApiResponse> {
    try {
      const data: contacts = await this.prisma.contacts.create({
        data: {
          ...dto,
        },
      });

      return {
        status: statusOk,
        data,
      };
    } catch (error) {
      console.error(error);
    }
  }

  async postExperiences(dto: PostExperiencesDto): Promise<ApiResponse> {
    const data: experiences = await this.prisma.experiences.create({
      data: {
        ...dto,
      },
    });

    return {
      status: statusOk,
      data,
    };
  }

  async postAboutMe(dto: PostAboutMeDto): Promise<ApiResponse> {
    try {
      const data: about_me = await this.prisma.about_me.create({
        data: {
          description: dto.description,
        },
      });

      return {
        status: statusOk,
        data,
      };
    } catch (error) {
      console.error(error);
    }
  }
}
