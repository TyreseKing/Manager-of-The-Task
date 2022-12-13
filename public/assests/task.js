var createbtn = document.getElementById("createbtn")
console.log(createbtn);

var tName = document.getElementById("taskName")
var note = document.getElementById("taskText")
var tType = document.getElementById("taskType")

function getinfo() {
    console.log("hello");
    console.log(tName.value);
    var namevalue = tName.value
    console.log(note.value);
    var notes = note.value
    console.log(tType.value);
    var type = tType.value
}

createbtn.addEventListener("click",getinfo)

