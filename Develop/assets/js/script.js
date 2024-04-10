// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const addTaskBtn = $('.btn');
const modal = $('.modal');
const saveBtn = $('.save-btn');

const titleInput = $('#title').val();
const descriptionInput = $('#description').val();
const dueDateInput = $('#due-date').val();

let div = $('<div>').add('class', 'card');
let title = $('<h1>').add('class', 'card-title').text(titleInput);
let description = $('<p>').add('class', 'card-description').text(descriptionInput);
let dueDate = $('<p>').add('class', 'card-date').text(dueDateInput);
let deleteBtn = $('<button>').add('class', 'delete-btn').text('Delete');



// Todo: create a function to generate a unique task id
function generateTaskId() {
    let id = "id: " + Math.random().toString(10).slice(5, 9);
    console.log(id);
}
generateTaskId()

// Save form input to local storage 
saveBtn.on('click', function (){
    console.log('clicked');
    
    
    const formData = {
        Title: titleInput,
        Description: descriptionInput,
        DueDate: dueDateInput
    };

    console.log(titleInput);
    console.log(descriptionInput);
    console.log(dueDateInput);
    localStorage.setItem('formData', JSON.stringify(formData));
});

// Todo: create a function to create a task card
const placement = $('#to-do')
function createTaskCard(task) {
   localStorage.getItem('formData')

    div.append(title);
    div.append(description);
    div.append(dueDate);
    div.append(deleteBtn);
    placement.append(div);
};

createTaskCard();






























// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}   

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
