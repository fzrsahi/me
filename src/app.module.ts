import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FzrsahiModule } from './fzrsahi/fzrsahi.module';
import envConfigs from './configs/env.config';
import { PrismaModule } from './prisma/prisma.module';
import { HelpersModule } from './helpers/helpers.module';
import { ExceptionsModule } from './exceptions/exceptions.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { FzrsahiController } from './fzrsahi/fzrsahi.controller';
import { APP_GUARD } from '@nestjs/core';
import { appConfig } from './configs';
import { AuditMiddleware } from './middleware/audit.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfigs],
    }),
    FzrsahiModule,
    PrismaModule,
    HelpersModule,
    ExceptionsModule,
    ThrottlerModule.forRoot([
      {
        ttl: appConfig.rateLimiterTtl,
        limit: appConfig.rateLimiterLimit,
      },
    ]),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuditMiddleware).forRoutes(FzrsahiController);
  }
}
