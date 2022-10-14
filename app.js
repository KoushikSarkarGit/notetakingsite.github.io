console.log('running');
shownotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.push(addtxt.value);

    localStorage.setItem('notes', JSON.stringify(notesobj));
    addtxt.value = "";
    console.log(notesobj);

    shownotes();
})


function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {

        html += `<div class="card mx-2 my-2 notecard" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`

        let notesElm = document.getElementById("notes");
        if (notesObj.length != 0) {
            notesElm.innerHTML = html;
        } else {
            notesElm.innerHTML = ` <h5 class='dontknow'> Nothing to show! Use "Add a Note" section above to add notes. </h5>`;
        }
    });
}


function deleteNote(index) {
    let notes2 = localStorage.getItem('notes');
    if (notes2 == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes2);
    }
    notesObj.splice(index, 1);

    localStorage.setItem('notes', JSON.stringify(notesObj));
    console.log('running delete');
    shownotes();
}

let search = document.getElementById('searchtxt');
search.addEventListener('input', function () {

    let inputval = search.value;
    let cardtxt = document.getElementsByClassName('notecard');
console.log('running search');
    Array.from(cardtxt).forEach(function (element) {
        let curtxt = element.getElementsByTagName('p')[0].innerText;

        if(curtxt.includes(inputval)){
            element.style.display= 'block';
        }
        else{
            element.style.display= 'none';
        }
    })
})

