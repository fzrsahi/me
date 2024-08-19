import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as onFinished from 'on-finished';
import { FzrsahiRepository } from 'src/fzrsahi/fzrsahi.repository';

@Injectable()
export class AuditMiddleware implements NestMiddleware {
  constructor(private readonly fzrsahiRepository: FzrsahiRepository) {}

  async use(req: Request, res: Response, next: NextFunction) {
    onFinished(res, (err, res) => {
      let data: any = {};
      data.statusCode = res.statusCode;
      data.headers = req.headers;
      data.hostname = req.hostname;
      data.ip = req.ip;
      data.ips = req.ips;
      data.url = req.url;

      this.fzrsahiRepository.postLogs(data);
    });

    next();
  }
}
