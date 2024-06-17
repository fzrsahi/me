import { Test, TestingModule } from '@nestjs/testing';
import { FzrsahiController } from './fzrsahi.controller';

describe('FzrsahiController', () => {
  let controller: FzrsahiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FzrsahiController],
    }).compile();

    controller = module.get<FzrsahiController>(FzrsahiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
