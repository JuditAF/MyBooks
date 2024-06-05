import { Component} from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {

  public myBooks: Book[];
  

  constructor(public booksService: BooksService) {

    this.myBooks = this.booksService.getAll();

  }

  public delet(indice:number) {
  
    this.booksService.delet(indice);
    
  }

  public buscar(id_book: number) {
    console.log(id_book);
    
    if (id_book){
      this.myBooks = [this.booksService.getOne(Number(id_book))];
      console.log(this.myBooks);
    }

    else {
      this.myBooks = this.booksService.getAll();
    };
    
  }

}