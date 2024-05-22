import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

public myUser: User;

constructor () {

  this.myUser = new User (7, "Alahna", "De la Vega Cruz", "zHouseBlack@gmail.com", "https://www.pronto.es/files/main_image/uploads/2023/11/06/654915d5918cc.webp", "123abcdZ");
  
}

public modificar (nuevoNombre: String, nuevoApellido: String, nuevoEmail: String, nuevaFoto: String) {
  this.myUser = new User (3, nuevoNombre, nuevoApellido, nuevoEmail, nuevaFoto, "hola");
  console.log(this.myUser.name);

}

}
