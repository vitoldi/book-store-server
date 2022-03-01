import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/book.dto';

@Controller('/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getBooks() {
    return this.booksService.getAllBooks()
  }

  @Get(':id')
  async findBook(@Param('id') id: string) {
    return this.booksService.findBook(id)
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createBook(@UploadedFile() file: Express.Multer.File, @Body() book: CreateBookDto) {
    return this.booksService.createBook(book, file);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    return this.booksService.removeBook(id)
  }
}