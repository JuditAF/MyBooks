import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  constructor() {
    
  }

  public borrar(indice:number) {
  
    this.eliminarCard.emit(indice);
  
  }

}