import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './create-book.dto';
import { Book } from './book.schema';

@Controller('api/books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Book> {
    return this.bookService.findOne(id);
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.create(createBookDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.update(id, createBookDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Book> {
    return this.bookService.delete(id);
  }
}
