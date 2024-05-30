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
 @Output() buscarCard = new EventEmitter<Number>();
//  @Output() aumentarNum = new EventEmitter<Number>();
//  @Output() disminuirNum = new EventEmitter<Number>();

  constructor(private booksService: BooksService) {}

  nuevoLibro(title: string, type: string, author: string, price: number, photo: string, id_book: number, id_user: number) {
    this.booksService.book = new Book (title, type, author, price, photo, id_book, id_user);
  };

  // public borrar(indice:number) {
  
  //   this.eliminarCard.emit(indice);
  
  // };

  // public buscar(id_book: number) {

  //   this.buscarCard.emit(id_book);

  // };

  // public aumentar(idBook: number) {
  //   this.aumentarNum.emit(idBook);
  // };

  // public disminuir(idBook: number) {
  //   this.disminuirNum.emit(idBook);
  // };

  // public aumentarUser(idUser: number) {
  //   return idUser + 1;
  // };

  // public disminuirUser(idUser: number) {
  //   return idUser - 1;
  // };

}