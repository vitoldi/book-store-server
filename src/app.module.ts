import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nooga:nooga@cluster0.mtdth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    BooksModule],
})
export class AppModule {}
