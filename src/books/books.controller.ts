import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
  async createBook(@Body() book: CreateBookDto) {
    return this.booksService.createBook(book);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    return this.booksService.removeBook(id)
  }
}