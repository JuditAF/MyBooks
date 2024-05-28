import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  @Input() book: Book;

  @Output() modifyCard = new EventEmitter<Book>();

  constructor(private booksService: BooksService){}

  public editBook(idBook:number, idUser:number, title:string, tipo:string, author:string, price:number, photo:string) {

    let myBook = new Book(title, tipo, author, Number(price), photo, idBook, idUser);
    this.booksService.edit(myBook);
            
  }

}
