import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UseFilters,
} from '@nestjs/common';
import { FzrsahiRepository } from './fzrsahi.repository';
import { PostAboutMeDto, PostContactsDto, PostExperiencesDto } from './dto';
import { about_me, contacts, experiences } from '@prisma/client';
import { ExceptionsFilterService } from 'src/exceptions/exceptions.service';

@Injectable()
@UseFilters(ExceptionsFilterService)
export class FzrsahiService {
  constructor(private readonly repository: FzrsahiRepository) {}

  async getAboutMe(): Promise<about_me> {
    try {
      const data: about_me = await this.repository.getAboutMe();
      if (!data) throw new NotFoundException('Data Not Found!');
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getExperiences(): Promise<experiences[]> {
    try {
      return await this.repository.getExperiences();
    } catch (error) {
      throw error;
    }
  }

  async getContacts(): Promise<contacts[]> {
    try {
      return await this.repository.getContacts();
    } catch (error) {
      throw error;
    }
  }

  async postContacts(dto: PostContactsDto): Promise<contacts> {
    try {
      return this.repository.postContacts(dto);
    } catch (error) {
      throw error;
    }
  }

  async postExperiences(dto: PostExperiencesDto): Promise<experiences> {
    try {
      return await this.repository.postExperiences(dto);
    } catch (error) {
      throw error;
    }
  }

  async postAboutMe(dto: PostAboutMeDto): Promise<about_me> {
    try {
      return await this.repository.postAboutMe(dto);
    } catch (error) {
      throw error;
    }
  }
}
