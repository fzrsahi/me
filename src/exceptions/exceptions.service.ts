import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';
import { statusFail } from 'src/configs';

@Injectable()
@Catch(HttpException)
export class ExceptionsFilterService implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response: Response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    response.status(status).json({
      status: statusFail,
      data: exception.message,
    });

  }

  handlerError(error: HttpException) {
    const errorMsg: string = error.message;
    switch (error.getStatus()) {
      case HttpStatus.BAD_REQUEST:
        throw new BadRequestException(errorMsg);
      case HttpStatus.NOT_FOUND:
        throw new NotFoundException(errorMsg);
      default:
        throw new InternalServerErrorException();
    }
  }
}
