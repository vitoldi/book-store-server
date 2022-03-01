import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FileService } from "src/file/file.service";
import { BooksController } from "./books.controller";
import { BooksService } from "./books.service";
import { Book, BookSchema } from "./schemas/book.schema";

@Module({
    providers: [BooksService, FileService],
    controllers: [BooksController],
    imports: [MongooseModule.forFeature([
        {name: Book.name, schema: BookSchema}])]
})
export class BooksModule {}