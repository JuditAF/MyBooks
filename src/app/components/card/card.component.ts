import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  public book : Book;
  public myBooks: Book[];

  public addBook(idBook:number, idUser:number, title:string, tipo:string, author:string, price:number, photo:string) {

    let myBook = new Book(title, tipo, author, Number(price), photo, idBook, idUser);
    this.myBooks.push(myBook);
            
  }

  public delete(i:number) {

    this.myBooks.splice(i,1);
    
  }

}


// [ngClass]="{standard:impar, irregular:par}" en button cardbuy