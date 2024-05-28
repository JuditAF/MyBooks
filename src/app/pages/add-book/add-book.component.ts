import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  @Input() book: Book;

  @Output() addCard = new EventEmitter<Book>();

  constructor(private booksService: BooksService){}

  // public addBook(idBook:number, idUser:number, title:string, tipo:string, author:string, price:number, photo:string) {

  //   let myBook = new Book(title, tipo, author, Number(price), photo, idBook, idUser);
  //   this.addCard.emit(myBook);
            
  // }

  public addBook(idBook:number, idUser:number, title:string, tipo:string, author:string, price:number, photo:string) {

    let book = new Book(title, tipo, author, Number(price), photo, idBook, idUser);
    this.booksService.add(book);
            
  }

}
