import { Controller, Get, Param } from '@nestjs/common';
import { ARTICLES } from './dummydata/articles';

@Controller()
export class AppController {
  @Get('api/articles')
  getAllArticles(): any[] {
    return ARTICLES;
  }

  @Get('api/articles/:id')
  getArticleById(@Param('id') id: string): any {
    return ARTICLES.find((article) => article._id === id);
  }
}
