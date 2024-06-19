import { ApiProperty } from '@nestjs/swagger';

export class PostAboutMeDto {
  @ApiProperty()
  description: string;
}

export class PostContactsDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
}

export class PostExperiencesDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  company_name: string;
  @ApiProperty()
  location: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  duration: string;
}
