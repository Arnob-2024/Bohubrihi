//2. get UI
let form= document.querySelector("#book_list");


//1. Constractor for book

class Book{
    constructor(title, author, isbn){
        this.title= title;
        this.author= author;
        this.isbn= isbn;
    }
}

//5. UI class
 
class UI{
    constructor(){

    }

    addToBooklist(book) {
     
        let list = document.querySelector(".book_List");
        let row = document.createElement('tr');
        row.innerHTML= `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a herf="#" class='delete'>X<\a></td>`;

        list.appendChild(row);
    }

    clear() {
    document.querySelector("#bk_title").value = ' ';
    document.querySelector("#bk_author").value = ' ';
    document.querySelector("#bk_isbn").value = ' ';
}

showAlert(message,className){
    let div= document.createElement("div");
    div.className= `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    console.log(div);
    let container= document.querySelector('.container');
    let form = document.querySelector('#book_list');

    container.insertBefore(div,form);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 2000);
}

}


//3. Add Eventlistener 

form.addEventListener('submit', NewBook);

//4. Function define;

function NewBook(e){
    //console.log("Arnob");


    //got all the veriable value from website
    let title = document.querySelector("#bk_title").value;
    let author = document.querySelector("#bk_author").value;
    let isbn = document.querySelector("#bk_isbn").value;

    let ui = new UI();

    if(title===" "||author===" "||isbn===" "){
        ui.showAlert("Please Fill Up All The Fields!", "error");
    }
    else{
        //pass them into the constructor
        let book = new Book(title, author, isbn);
        //console.log(book);  // testing the output of book obj

        ui.addToBooklist(book);
        ui.showAlert("Book Added To The List Successfully", "success");
        ui.clear();
    }




e.preventDefault();
}


