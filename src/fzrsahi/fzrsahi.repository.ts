import { Injectable } from '@nestjs/common';
import { ApiResponse } from 'src/configs/response';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostAboutMeDto, PostContactsDto, PostExperiencesDto } from './dto';
import { about_me, contacts, experiences } from '@prisma/client';
import { statusOk } from 'src/configs';

@Injectable()
export class FzrsahiRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAboutMe(): Promise<about_me> {
    return await this.prisma.about_me.findFirst();
  }

  async getExperiences(): Promise<experiences[]> {
    return await this.prisma.experiences.findMany();
  }

  async getContacts(): Promise<contacts[]> {
    return await this.prisma.contacts.findMany();
  }

  async postContacts(dto: PostContactsDto): Promise<contacts> {
    return await this.prisma.contacts.create({
      data: {
        ...dto,
      },
    });
  }

  async postExperiences(dto: PostExperiencesDto): Promise<experiences> {
    return await this.prisma.experiences.create({
      data: {
        ...dto,
      },
    });
  }

  async postAboutMe(dto: PostAboutMeDto): Promise<about_me> {
    return await this.prisma.about_me.create({
      data: {
        description: dto.description,
      },
    });
  }
}
