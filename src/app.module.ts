import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://nooga:nooga@cluster0.mtdth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
