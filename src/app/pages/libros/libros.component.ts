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

  public delete(indice:number) {
  
    this.booksService.delete(indice);
    
  }

  public buscar(id_book: number) {

    this.booksService.buscar(id_book);

  };

}