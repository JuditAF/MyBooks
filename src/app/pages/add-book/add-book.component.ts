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

  public addBook(title:string, tipo:string, author:string, price:number, photo:string, idBook:number, idUser:number) {

    let book = new Book(title, tipo, author, Number(price), photo, idBook, idUser);
    this.booksService.add(book);
            
  }

  // public aumentar(idBook: number) {
  //   return idBook + 1;
  // };

  // public disminuir(idBook: number) {
  //   return idBook - 1;
  // };

  // public aumentarUser(idUser: number) {
  //   return idUser + 1;
  // };

  // public disminuirUser(idUser: number) {
  //   return idUser - 1;
  // };

  inputNum = document.getElementById("inNum");

  public buttNum (inNum) {
    let id = inNum.getAttribute("id");
    let min = this.inputNum.getAttribute("min");
    let max = this.inputNum.getAttribute("max");
    let step = this.inputNum.getAttribute("step");
    let val = this.inputNum.getAttribute("value");
    let calStep = (id == "increment") ?  (Number(step)*1): (Number(step)*-1);
    let newValue = parseInt(val) + calStep;

    if (newValue >= Number(min) && newValue <= Number(max)) {
      this.inputNum.setAttribute("value", "newValue");
    }
  };

}
