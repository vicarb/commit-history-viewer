import { Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('commits')
export class GithubController {
  constructor(private githubService: GithubService) {}

  @Get()
  async getCommits() {
    return this.githubService.getCommitHistory();
  }
}
