import { Module } from '@nestjs/common';
import { ExceptionsFilterService } from './exceptions.service';

@Module({
  providers: [ExceptionsFilterService],
  exports: [ExceptionsFilterService],
})
export class ExceptionsModule {}
