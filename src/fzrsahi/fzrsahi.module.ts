import { Module } from '@nestjs/common';
import { FzrsahiController } from './fzrsahi.controller';
import { FzrsahiService } from './fzrsahi.service';
import { FzrsahiRepository } from './fzrsahi.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FzrsahiController],
  providers: [FzrsahiService, FzrsahiRepository],
  imports : [PrismaModule]
})
export class FzrsahiModule {}
