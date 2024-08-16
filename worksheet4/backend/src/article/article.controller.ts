import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async create(@Body() createArticleDto: any) {
    return this.articleService.create(createArticleDto);
  }

  @Get()
  async findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.articleService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.articleService.delete(id);
  }
}
