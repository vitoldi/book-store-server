import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import {Model} from 'mongoose'
import { CreateBookDto } from './dto/book.dto';
import { FileService, FileType } from 'src/file/file.service';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>,
              private readonly fileService: FileService ) {}

  async getAllBooks(): Promise<Book[]> {
    return this.bookModel.find().exec()
  }

  async findBook(id: string): Promise<Book> {
    return this.bookModel.findById(id)
  }

  async createBook(bookDto: CreateBookDto, file): Promise<Book> {
    const filePath = this.fileService.createFile(FileType.IMAGE, file)
    const newBook = new this.bookModel({...bookDto, image: filePath})
    return newBook.save()
  }

  async removeBook(id: string): Promise<Book> {
    return this.bookModel.findByIdAndRemove(id)
  }
}