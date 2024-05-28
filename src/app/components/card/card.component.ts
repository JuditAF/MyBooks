import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  [x: string]: any;

  @Input() book: Book;
  @Input() par: string;
  @Input() impar: string;


 @Output() eliminarCard = new EventEmitter<Number>();

  constructor(private booksService: BooksService) {}

  nuevoLibro(title: string, type: string, author: string, price: number, photo: string, id_book: number, id_user: number) {
    this.booksService.book = new Book (title, type, author, price, photo, id_book, id_user);
  }

  public borrar(indice:number) {
  
    this.eliminarCard.emit(indice);
  
  }

}