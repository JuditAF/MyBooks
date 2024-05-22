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
      new Book(30305, 11, "El guerrero a la sombra del cerezo", "Novela Histórica", "David B.Gil", 19.85, "https://m.media-amazon.com/images/I/91AOK0vUY+L._AC_UF894,1000_QL80_.jpg"),
      new Book(32305, 4, "Jerusalén", "Novela Fantástica", "Alan Moore", 57, "https://m.media-amazon.com/images/I/7147Uz8Y5qL._AC_UF894,1000_QL80_.jpg"),
      new Book(31897, 5, "Africanus", "Novela Histórica", "Santiago Posteguillo", 75.33, "https://quelibroleo.com/images/libros/libro_1353882344.jpg"),
      new Book(30621, 2, "Determined", "Divulgación Científica", "Robert sapolsky", 26.60, "https://m.media-amazon.com/images/I/81PX0uhxQ3L._AC_UF894,1000_QL80_.jpg"),
      new Book(27640, 6, "Alex", "Novela Negra", "Pierre Lemaitre", 20.80, "https://www.libreriaalberti.com/media/img/portadas/_visd_0000JPG01NQ5.jpg"),
      new Book(28974, 8, "El arte de la guerra", "Filosofía", "sun Tzu", 17.95, "https://m.media-amazon.com/images/I/61Im39L4o1L._AC_UF894,1000_QL80_.jpg"),
      new Book(39142, 9, "Dune", "Ciencia Ficción", "Frank Herbert", 59.71, "https://www.libreriafabula.com/imagenes_grandes/9788466/978846636340.JPG")
    ];

  }

  public addBook(nuevoNombre: string) {

    let myBook1 = new Book(32305, 4, "Jerusalén", "Novela Fantástica", "Alan Moore", 57, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.es%2FJerusalem-Liverlight-Alan-Moore%2Fdp%2F1631491342&psig=AOvVaw1t7Vni0csQmOhkgsCEWa1n&ust=1716463422443000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLj87tWSoYYDFQAAAAAdAAAAABBK");
    return this.myBooks.push(myBook1);

  }

}
