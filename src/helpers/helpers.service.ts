import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { appConfig } from 'src/configs';

@Injectable()
export class HelpersService {
  validateRequest(
    request: Request,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const apiKeyWithBearer = request.headers.authorization;

    if (!apiKeyWithBearer) return false;

    const apiKey = apiKeyWithBearer.split(' ')[1];
    if (apiKey != appConfig.secretAuthKey) return false;

    return true;
  }
}
