import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BooksModule } from './books/books.module';
import { FileModule } from './file/file.module';
import * as path from 'path'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot('mongodb+srv://nooga:nooga@cluster0.mtdth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    BooksModule, FileModule],
})
export class AppModule {}
