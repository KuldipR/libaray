showBooks();
function Book(name, author, type) {
    this.name = name,
        this.author = author,
        this.type = type
        
}

function Display() {
    body = document.getElementById(`tablebody`);
    let str = "";
    // let bookJS = localStorage.getItem(`books`)
    // let book = JSON.parse(bookJS);
    // // console.log(book);

}

Display.prototype.add = function(book){
    
    let h = book;
    tableBody = document.getElementById(`tableBody`);
    let uiString =[] 
    uiString = `<tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
                <td><button id="${book.name}" onclick="deleteNotes(this.${book.name})" class="btn btn-danger ">Delete</button></td> 
                </tr>,`;
    console.log(book);            
    let a =  localStorage.getItem(`books`)
    if (a==null){
        a=[]
    }
    else{
        uiString += JSON.parse(a);
    }
    tableBody.innerHTML = uiString;
    
    bookJS = JSON.stringify(uiString);
    

    localStorage.setItem(`books`,bookJS);
    

}

Display.prototype.clear = function(){
    libraryForm = document.getElementById(`libraryForm`);
    libraryForm.reset();
}

Display.prototype.validate = function(book){

    // let a = book;
    // console.log(a);
    if(book.name.length < 2 || book.author.length < 2){
        return false;
    }
    else{
        return true;
    }

}



Display.prototype.error = function(){
        let message = document.getElementById(`message`)
        message.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                                 <strong>ERROR!</strong> You should enter a valid names on those fields below.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"> </button>
                            </div>`
        setTimeout(() => {
            message.innerHTML = ``;
        }, 3000);
}

Display.prototype.show = function(){
    let message = document.getElementById(`message`)
        message.innerHTML = `<div class="alert alert-success" role="alert">
                                    <h4 class="alert-heading">Success!</h4>
                                    <p>you have successfully Added a new book.</p>
                             </div>`
        setTimeout(() => {
            message.innerHTML = ``;
        }, 3000); 
}

libraryForm = document.getElementById(`addB`);
libraryForm.addEventListener(`click`, libararyFormEvent);

function libararyFormEvent(e) {
    e.preventDefault();


    let name = document.getElementById(`bookName`).value;
    let author = document.getElementById(`author`).value;
    let type;
    let fiction = document.getElementById(`fiction`)
    let programming = document.getElementById(`programming`)
    let cooking = document.getElementById(`cooking`)
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked){
        type = cooking.value;
    }
    else {}
    let book = new Book(name, author, type)
    // console.log(book)
    
  

    console.log(`book added`);
    let display = new Display();
    if(display.validate(book)){
        
    display.add(book);
    display.clear();
    display.show(`success`)
    }
    else{
        display.error(`error`);
    }

    
}
function showBooks(){
    

    tableBody = document.getElementById(`tableBody`);
    let uiString = ``
    let a =  localStorage.getItem(`books`)
    if (a==null){
        a=[]
    }
    else{
        uiString += JSON.parse(a);
    }
    // console.log(typeof a);
    // let myArr = a.split(",")
    // console.log(myArr,typeof myArr);
    tableBody.innerHTML = uiString;
    
    bookJS = JSON.stringify(tableBody.innerHTML);
}

function deleteNotes(i){
    console.log(i);
    let bo = this.i;
    console.log(bo);

    let notes = localStorage.getItem(`books`);
    // console.log(typeof notes)
    notesobj = JSON.parse(notes);
    // console.log(typeof notesobj);
    let arr = notesobj.split(`,`);
    // console.log(typeof arr)
    
    
    
    Array.from(arr).forEach((element, index) => {
        // console.log(index);
    arr.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(arr));
    showBooks();
     })
}