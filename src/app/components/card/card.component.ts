import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  public book: Book = new Book(345733, 11, "Código Limpio", "Lenguaje Programación", "Robert C. Martin", 48.57, "https://m.media-amazon.com/images/I/61orja1+P7L._AC_UF894,1000_QL80_.jpg");

}
