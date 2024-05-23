export class Book {

    public myBook: Book
    public myBooks: Book[]

    constructor(public id_book: number = 0,
                public id_user: number = 0,
                public title: string,
                public type: string,
                public author: string,
                public price: number,
                public photo: string) { }

    // public addBook() {

    //     let myBook = new Book(this.id_book, this.id_user=0, this.title, this.type, this.author, this.price, this.photo);
    //     return this.myBooks.push(myBook);
                
    // }

}
