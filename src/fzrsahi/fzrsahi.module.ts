import { Module } from '@nestjs/common';
import { FzrsahiController } from './fzrsahi.controller';
import { FzrsahiService } from './fzrsahi.service';
import { FzrsahiRepository } from './fzrsahi.repository';

@Module({
  controllers: [FzrsahiController],
  providers: [FzrsahiService, FzrsahiRepository],
})
export class FzrsahiModule {}
