import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import {Model} from 'mongoose'
import { CreateBookDto } from './dto/book.dto';
import { FileService, FileType } from 'src/file/file.service';
import { ApiListDto, SearchParamsDto } from 'src/types/api-common-types';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>,
              private readonly fileService: FileService ) {}

  async getAllBooks({limit, offset}: SearchParamsDto): Promise<ApiListDto<Book>> {
    const books = await this.bookModel.find().exec()
    return {items: books.slice(offset, offset + limit), total: books.length}
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