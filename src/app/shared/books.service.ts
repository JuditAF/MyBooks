import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public book: Book;

  private books: Book[] = [
    new Book("El guerrero a la sombra del cerezo", "Novela Histórica", "David B.Gil", 19.85, "https://m.media-amazon.com/images/I/91AOK0vUY+L._AC_UF894,1000_QL80_.jpg", 30305, 7),
    new Book("Código Limpio", "Lenguaje Programación", "Robert C. Martin", 47.58, "https://m.media-amazon.com/images/I/61orja1+P7L._AC_UF894,1000_QL80_.jpg", 34533, 11),
    new Book("Trilogía Africanus", "Novela Histórica", "Santiago Posteguillo", 75.33, "https://quelibroleo.com/images/libros/libro_1353882344.jpg", 31897, 5),
    new Book("Determined", "Divulgación Científica", "Robert sapolsky", 26.60, "https://m.media-amazon.com/images/I/81PX0uhxQ3L._AC_UF894,1000_QL80_.jpg", 30621, 2),
    new Book("Alex", "Novela Negra", "Pierre Lemaitre", 20.80, "https://www.libreriaalberti.com/media/img/portadas/_visd_0000JPG01NQ5.jpg", 37640, 6),
    new Book("El arte de la guerra", "Filosofía", "sun Tzu", 17.95, "https://m.media-amazon.com/images/I/61Im39L4o1L._AC_UF894,1000_QL80_.jpg", 39142, 9),
    new Book("Trilogía Dune", "Ciencia Ficción", "Frank Herbert", 59.71, "https://www.libreriafabula.com/imagenes_grandes/9788466/978846636340.JPG"),
    new Book("El barco de Teseo", "Narrativa Fantástica", "J.J. Abrams", 49, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcaCbDX4HM9ux9Amx44JgtlepwI-bzP56OP5G7XoANFg7S1YpG1f7LrR6lliwuRD226afnRrt41BITcJlNpIckV-QEk8R1sex4DQfsBtNnP09qkhiQ86DbtD1So2nvnNdQPWbjVO89NK9YF0sN-3S_AYcGv08BjMROodf55BxZ-2J-JqUH81IPYh6aJPTx/s764/S.-El-barco-de-Teseo-550x764.jpg", 36228, 1),
    new Book("Poesía Completa", "Poesía Extranjera", "Matsuo Basho", 24.7, "https://m.media-amazon.com/images/I/51lzs8eQaRL._AC_UF894,1000_QL80_DpWeblab_.jpg", 33845, 3)
  ];

  constructor() { }

  public getAll(): Book[]{
    return this.books;
  }

  // public getAll(): Book[]{
  //   this.books = this.booksService.books;
  // }; 

  public getOne(id_libro: number): Book{
    // let id_libro = this.book.id_book;
    // this.books.slice(book.id_book, book.id_book + 1);
    return this.books[id_libro];
  };

  // public getOne(id_libro: number): Book {

  //     this.books.get(){
  //       for(let libro of books) {
  //         if(this.book.id_book === id_libro) {
  //             return libro;}
  //         }
  //     }
  // }

  public add(book:Book): void {
    this.books.push(book);
  };

  public edit(book: Book) {
    this.books = this.books.splice(book.id_book, 1, book);
  };

  public delete(indice: number) {
    this.books = this.books.filter(
      book => book.id_book !== indice
    );
  };

}
