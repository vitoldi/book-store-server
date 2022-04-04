import { Body, Controller, Delete, Get, Param, Post, Query, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiListDto, SearchParamsDto } from 'src/types/api-common-types';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/book.dto';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  
  @Post('search')
  async getBooks(@Body() searchParams: SearchParamsDto) {
    return await this.booksService.getAllBooks(searchParams)
  }

  @Get(':id')
  async findBook(@Param('id') id: string) {
    return this.booksService.findBook(id)
  }

  @Post('add')
  @UseInterceptors(FileInterceptor('image'))
  async createBook(@UploadedFile() file: Express.Multer.File, @Body() book: CreateBookDto) {
    return this.booksService.createBook(book, file);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    return this.booksService.removeBook(id)
  }
}