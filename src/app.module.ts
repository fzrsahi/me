import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FzrsahiModule } from './fzrsahi/fzrsahi.module';
import envConfigs from './configs/env.config';
import { SwaggerModule } from '@nestjs/swagger';
import { PrismaModule } from './prisma/prisma.module';
import { HelpersModule } from './helpers/helpers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfigs],
    }),
    FzrsahiModule,
    PrismaModule,
    HelpersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
