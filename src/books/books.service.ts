import { Injectable } from '@nestjs/common';
import { Book } from './books-types';

const books: Array<Book> = [
  {id: '1', title: 'Martin Eden', author: 'Jack London', price: '25$'},
  {id: '2', title: 'Nineteen Eighty-Four', author: 'George Orwell', price: '17$'},
  {id: '3', title: 'Beloved', author: 'Tony Morisson', price: '12$'}
]

@Injectable()
export class BooksService {
  getBooks(): Array<Book>{
    return books
  }
}