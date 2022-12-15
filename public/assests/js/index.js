const e = require("express");

let taskName; 
let taskType; 
let taskText;
let newTaskButton;



if(window.location.pathname === '/task'){
taskName = document.querySelector('');
taskType = document.querySelector('');
taskText = document.querySelector('');
//taskList = document.querySelectorAll('')
newTaskButton = document.querySelector('');
}

let activeTasks = {}; 

const getTasks = () => 
fetch('/api/task', {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json', 
//how do we change this? 
    }, 
}); 

const saveTask = (Task) => 
fetch('/api/task', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(task), 
});

const deleteTask = (id) => 
fetch(`/api/task${id}`, {
    method: 'DELETE', 
    headers: {
        'Content-Type': 'application/json'
    },
});

const renderActiveTask = () => {
  //  hide(saveTaskBtn); 

  //does this need to be a forloop

  if (activeTasks.id){
    taskName.setAttribute('active', true); 
    taskType.setAttribute('active', true); 
    taskText.setAttribute('active', true); 
    taskName.value = activeTask.title; 
    taskText.value = activeTask.title; 
  }else {
    taskTitle.removeAttribute('active'),
    taskType.removeAttribute('active'),
    taskName.value = ''; 
    taskText.value = ''; 
  }
}; 

const handleCreateTask = () => {
    const newTask = {
        name: taskName.value, 
        type: taskType.value, 
        text: taskText.value, 
    }
    saveTask(newNote).then(()=> {
        getAndRenderTasks();
    });
};

const hangleNoteDelete = (e) => {
    e.stopPropagation(); 

    const task = e.target; 
    const noteId = JSON.parse(note.parentElement.getAttribute('data-task')).id;

    if (activeNote.id === noteId) {
        activeNote = {}; 
    }

    deleteNote(noteID).then(()=> {
        getAndRenderTasks();
    });
};

const createTk = (text, delbtn = true)=>{
    
}



// // import express from "express"
// // import path from "path"
// // import exphbs from "express-handlebars"
  

// const app = express();
  
// const PORT = process.env.PORT || 3001;
  
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
  
// app.use(express.static("images"));
  

// app.get("/static", (req, res) => {
//     res.render("static");
// });
  

// app.get("/dynamic", (req, res) => {
//     imageList = [];
//     imageList.push({ src: "icons/TaskZ.png", name: "TaskZ" });
//     res.render("dynamic", { imageList: imageList });
// })
  

// app.listen(PORT, () => console.log(`Server started running on PORT ${PORT}`));