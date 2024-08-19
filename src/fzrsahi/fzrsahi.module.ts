import { Module } from '@nestjs/common';
import { FzrsahiController } from './fzrsahi.controller';
import { FzrsahiService } from './fzrsahi.service';
import { FzrsahiRepository } from './fzrsahi.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HelpersModule } from 'src/helpers/helpers.module';
import { ExceptionsModule } from 'src/exceptions/exceptions.module';

@Module({
  controllers: [FzrsahiController],
  providers: [FzrsahiService, FzrsahiRepository],
  imports: [PrismaModule, HelpersModule, ExceptionsModule],
  exports : [FzrsahiRepository]
})
export class FzrsahiModule {}
