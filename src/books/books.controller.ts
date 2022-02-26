import { Controller, Get } from '@nestjs/common';
import { Book } from './books-types';
import { BooksService } from './books.service';

@Controller('/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks(): Array<Book> {
    return this.booksService.getBooks();
  }
}