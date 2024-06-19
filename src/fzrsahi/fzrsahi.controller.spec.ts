import { FzrsahiController } from './fzrsahi.controller';
import { FzrsahiService } from './fzrsahi.service';
import { FzrsahiRepository } from './fzrsahi.repository';
import { ApiResponse } from 'src/configs';
import { PrismaService } from 'src/prisma/prisma.service';

describe('FzrsahiController', () => {
  let fzrsahiController: FzrsahiController;
  let fzrsahiService: FzrsahiService;
  let fzrsahiRepository: FzrsahiRepository;
  let prisma : PrismaService

  beforeEach(async () => {
    fzrsahiRepository = new FzrsahiRepository();
    fzrsahiService = new FzrsahiService(fzrsahiRepository);
    fzrsahiController = new FzrsahiController(fzrsahiService);
  });

  describe('about-me', () => {
    it('should return about me', async () => {
      const result: ApiResponse = {
        status: 'OK',
        data: 'ok',
      };
      jest.spyOn(fzrsahiService, 'aboutMe').mockImplementation(() => result);
      expect(await fzrsahiController.aboutMe()).toBe(result);
    });
  });
});
