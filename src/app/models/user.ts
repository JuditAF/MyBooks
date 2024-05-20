export class User {

    public myUser : User

    constructor (public id_user: number, public name:string, public last_name:string, public email: string, public photo: string, public password:string) {

        this.myUser = new User (7, "Diego", "De la Vega Cruz", "zHouseBlack@gmail.com", "https://www.pronto.es/files/main_image/uploads/2023/11/06/654915d5918cc.webp", "123abcdZ");
    }

    public nombreCompleto (): string {
        return this.name + " " + this.last_name;
    }

    // ngOnInit(): void {
    //     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //     //Add 'implements OnInit' to the class.
        
    // }
}
