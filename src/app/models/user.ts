export class User {

    public myUser : User

    constructor (public id_user: number, 
                 public name:string, 
                 public last_name:string, 
                 public email: string, 
                 public photo: string, 
                 public password:string) {}

    public nombreCompleto (): string {
        return this.name + " " + this.last_name;
    }

    // public changeImage (): string {
    //     imgProfile.src = 
    //     return
    // }

    // ngOnInit(): void {
        
    // }
}
