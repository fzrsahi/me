import { Test, TestingModule } from '@nestjs/testing';
import { FzrsahiService } from './fzrsahi.service';

describe('FzrsahiService', () => {
  let service: FzrsahiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FzrsahiService],
    }).compile();

    service = module.get<FzrsahiService>(FzrsahiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
