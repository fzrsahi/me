import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FzrsahiModule } from './fzrsahi/fzrsahi.module';
import envConfigs from './configs/env.config';
import { SwaggerModule } from '@nestjs/swagger';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfigs],
    }),
    FzrsahiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
