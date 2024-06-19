import { Injectable } from '@nestjs/common';
import { FzrsahiRepository } from './fzrsahi.repository';
import { ApiResponse } from 'src/configs/response';
import { PostAboutMeDto } from './dto';

@Injectable()
export class FzrsahiService {
  constructor(private readonly repository: FzrsahiRepository) {}

  async GetAboutMe(): Promise<ApiResponse> {
    return await this.repository.getAboutMe();
  }

  getExperiences(): ApiResponse {
    return this.repository.getExperiences();
  }

  getContacts(): ApiResponse {
    return this.repository.getContacts();
  }

  postContacts(): ApiResponse {
    return this.repository.postContacts();
  }

  postExperiences(): ApiResponse {
    return this.repository.postExperiences();
  }

  async postAboutMe(dto: PostAboutMeDto): Promise<ApiResponse> {
    return await this.repository.postAboutMe(dto);
  }
}
