import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://calebxust:3RgB5Mm6yfnG7Zxd@cluster0.vqk3b.mongodb.net/YOUR_DB_NAME?retryWrites=true&w=majority&appName=Cluster0'),
    ArticleModule,
  ],
})
export class AppModule {}
