import { Injectable } from '@nestjs/common';
import { FzrsahiRepository } from './fzrsahi.repository';
import { ApiResponse } from 'src/configs/response';
import { PostAboutMeDto, PostContactsDto, PostExperiencesDto } from './dto';

@Injectable()
export class FzrsahiService {
  constructor(private readonly repository: FzrsahiRepository) {}

  async GetAboutMe(): Promise<ApiResponse> {
    return await this.repository.getAboutMe();
  }

  async getExperiences(): Promise<ApiResponse> {
    return await this.repository.getExperiences();
  }

  async getContacts(): Promise<ApiResponse> {
    return await this.repository.getContacts();
  }

  async postContacts(dto: PostContactsDto): Promise<ApiResponse> {
    return this.repository.postContacts(dto);
  }

  async postExperiences(dto: PostExperiencesDto): Promise<ApiResponse> {
    return await this.repository.postExperiences(dto);
  }

  async postAboutMe(dto: PostAboutMeDto): Promise<ApiResponse> {
    return await this.repository.postAboutMe(dto);
  }
}
