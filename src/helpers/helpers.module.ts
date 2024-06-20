import { Module } from '@nestjs/common';
import { HelpersService } from './helpers.service';

@Module({
  providers: [HelpersService],
  exports: [HelpersService],
})
export class HelpersModule {}
