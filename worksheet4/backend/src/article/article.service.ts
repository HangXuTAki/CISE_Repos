import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article, ArticleDocument } from './schemas/article.schema';

@Injectable()
export class ArticleService {
  constructor(@InjectModel(Article.name) private articleModel: Model<ArticleDocument>) {}

  async create(createArticleDto: any): Promise<Article> {
    const createdArticle = new this.articleModel(createArticleDto);
    return createdArticle.save();
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }
  
  async findOne(id: string): Promise<Article> {
    return this.articleModel.findById(id).exec();
  }

  async delete(id: string): Promise<Article> {
    return this.articleModel.findByIdAndDelete(id).exec();
  }
}
