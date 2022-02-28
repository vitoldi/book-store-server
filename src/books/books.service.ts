import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import {Model} from 'mongoose'
import { CreateBookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument> ) {}

  async getAllBooks(): Promise<Book[]> {
    return this.bookModel.find().exec()
  }

  async findBook(id: string): Promise<Book> {
    return this.bookModel.findById(id)
  }

  async createBook(bookDto: CreateBookDto): Promise<Book> {
    const newBook = new this.bookModel(bookDto)
    return newBook.save()
  }

  async removeBook(id: string): Promise<Book> {
    return this.bookModel.findByIdAndRemove(id)
  }
}