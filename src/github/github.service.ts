import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GithubService {
  async getCommitHistory(owner: string, repo: string): Promise<any> {
    try {
      const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Error fetching commit history from GitHub',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
