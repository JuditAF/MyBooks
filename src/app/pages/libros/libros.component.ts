import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {

public myBooks: Book[];

constructor () {

  this.myBooks = [new Book ( 30305, 11, "El guerrero a la sombra del cerezo", "Novela histórica", "David B.Gil", 19.85, "https://m.media-amazon.com/images/I/91AOK0vUY+L._AC_UF894,1000_QL80_.jpg")];
  
}

// public modificar (nuevoNombre: HTMLInputElement) {
  
//   console.log(this.myUser.name);
//   this.myUser.name = nuevoNombre.value;
//   console.log(this.myUser.name);

// }

}
