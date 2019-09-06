document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM is ready.')
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage[localStorage.key(i)]) {
            addNote(localStorage[localStorage.key(i)].split(";")[0], localStorage[localStorage.key(i)].split(";")[1], localStorage.key(i));
        }
    }
});

noteNumber = 0;

function saveChanges() {
    var name = document.getElementById("nameText").value;
    var note = document.getElementById("noteText").value;
    if (name && note) {
        localStorage[++noteNumber] = name + ';' + note;
    }
    addNote(name, note);
}

function addNote(name, note, idNumber) {
    var noteDiv = document.createElement("div");
    noteDiv.setAttribute("class", "flex-fil; noteItem");
    if (idNumber) {
        noteDiv.setAttribute("id", idNumber);
    } else {
        noteDiv.setAttribute("id", noteNumber);
    }
    var nameElement = document.createElement("h5");
    nameElement.innerHTML = name;
    var noteElement = document.createElement("p");
    noteElement.innerHTML = note;
    noteDiv.appendChild(nameElement);
    noteDiv.appendChild(noteElement);
    document.getElementById("notesContainer").appendChild(noteDiv);
}

function viewNotes() {
    debugger;
    if (document.getElementById("notesContainer").style.visibility === "hidden") {
        document.getElementById("notesContainer").style.visibility = "visible";
    } else {
        document.getElementById("notesContainer").style.visibility = "hidden";
    }
}

function deleteNote() {
    if (document.getElementById("exampleInputEmail1") && document.getElementById("exampleInputEmail1").value) {
        var reqNote = document.getElementById("exampleInputEmail1").value;
    } else {
        window.alert("Please enter a value!");
    }
    if (reqNote) {
        var elementDel = document.getElementById(reqNote)
        if (elementDel) {
            elementDel.parentNode.removeChild(elementDel);
            localStorage.removeItem(reqNote);
        } else {
            window.alert("The element with the id " + reqNote + " doesn't exist.")
        }

    }

}