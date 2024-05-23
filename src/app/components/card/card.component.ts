import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  public myBooks: Book[];

  constructor() {

    this.myBooks = [
      new Book(343653, 11, "Código Limpio", "Lenguaje Programación", "Robert C.Martin", 49.87, "https://m.media-amazon.com/images/I/61orja1+P7L._AC_UF894,1000_QL80_.jpg"),
    ];

  }

}

