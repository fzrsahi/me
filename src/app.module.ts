import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import  envConfigs  from "./configs/env.config"

@Module({
  imports: [ConfigModule.forRoot({
    load : [envConfigs]
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
