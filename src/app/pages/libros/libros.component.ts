import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {

  public myBooks: Book[];

  constructor() {

    this.myBooks = [
      new Book(30305, 7, "El guerrero a la sombra del cerezo", "Novela Histórica", "David B.Gil", 19.85, "https://m.media-amazon.com/images/I/91AOK0vUY+L._AC_UF894,1000_QL80_.jpg"),
      new Book(32305, 4, "Trilogía Jerusalén", "Novela Fantástica", "Alan Moore", 57, "https://m.media-amazon.com/images/I/7147Uz8Y5qL._AC_UF894,1000_QL80_.jpg"),
      new Book(31897, 5, "Trilogía Africanus", "Novela Histórica", "Santiago Posteguillo", 75.33, "https://quelibroleo.com/images/libros/libro_1353882344.jpg"),
      new Book(30621, 2, "Determined", "Divulgación Científica", "Robert sapolsky", 26.60, "https://m.media-amazon.com/images/I/81PX0uhxQ3L._AC_UF894,1000_QL80_.jpg"),
      new Book(27640, 6, "Alex", "Novela Negra", "Pierre Lemaitre", 20.80, "https://www.libreriaalberti.com/media/img/portadas/_visd_0000JPG01NQ5.jpg"),
      new Book(28974, 8, "El arte de la guerra", "Filosofía", "sun Tzu", 17.95, "https://m.media-amazon.com/images/I/61Im39L4o1L._AC_UF894,1000_QL80_.jpg"),
      new Book(39142, 9, "Trilogía Dune", "Ciencia Ficción", "Frank Herbert", 59.71, "https://www.libreriafabula.com/imagenes_grandes/9788466/978846636340.JPG"),
      new Book(36228, 1, "El barco de Teseo", "Narrativa Fantástica", "J.J. Abrams", 49, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcaCbDX4HM9ux9Amx44JgtlepwI-bzP56OP5G7XoANFg7S1YpG1f7LrR6lliwuRD226afnRrt41BITcJlNpIckV-QEk8R1sex4DQfsBtNnP09qkhiQ86DbtD1So2nvnNdQPWbjVO89NK9YF0sN-3S_AYcGv08BjMROodf55BxZ-2J-JqUH81IPYh6aJPTx/s764/S.-El-barco-de-Teseo-550x764.jpg"),
      new Book(33845, 3, "Poesía Completa", "Poesía Extranjera", "Matsuo Basho", 24.7, "https://m.media-amazon.com/images/I/51lzs8eQaRL._AC_UF894,1000_QL80_DpWeblab_.jpg")
    ];

  }

}
