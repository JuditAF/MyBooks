import { Component, EventEmitter, Output } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {

  public myBooks: Book[];
  

  constructor(public booksService: BooksService) {

    this.myBooks = this.booksService.getAll();

  }

  books: Book[] = [];

  // public addBook(idBook:number, idUser:number, title:string, tipo:string, author:string, price:number, photo:string) {

  //   let myBook = new Book(title, tipo, author, Number(price), photo, idBook, idUser);
  //   this.books.add(myBook);
            
  // }

  public delete(indice:number) {
  
    // this.myBooks = this.myBooks.filter(
    //   book => book.id_book !== indice
    // );

    this.booksService.delete(indice);
    // no se si hay que isar idbook en lugar de indice
    
  }

  // public buscar (book.id_book) {
  //   if (book.id_book == null) {
  //     this.books = this.booksService.getAll();
  //   }
  //   else {
  //     this.books = this.booksService.getOne(book.id_book);
  //   }
  // }

}