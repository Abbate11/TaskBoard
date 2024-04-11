// Retrieve tasks and nextId from localStorage
const addTaskBtn = $('.btn');
const modal = $('.modal');
const saveBtn = $('.save-btn');



// Todo: create a function to generate a unique task id
function generateTaskId() {
    let id = "id: " + Math.random().toString(10).slice(5, 9);
    console.log(id);
}
generateTaskId()

// Save form input to local storage 
saveBtn.on('click', function (){
    let stringTasks = localStorage.getItem('userTasks')
    let userTasks = JSON.parse(stringTasks) || [];

    const formData = {
        Title: $('#title').val(),
        Description: $('#description').val(),
        DueDate: $('#due-date').val()
    };

    userTasks.push(formData);
    localStorage.setItem('userTasks', JSON.stringify(userTasks));
});


//Create a function to reset the form on save
saveBtn.on('click', function () {
    document.querySelector('form').reset();
});


// Todo: create a function to create a task card

saveBtn.on('click', function createTaskCard(task) {
   const stringCard = localStorage.getItem('userTasks');
   const newCards = JSON.parse(stringCard);
   const placement = $('#todo-cards');

   for (i = 0; i < newCards.length; i++) {
    let div = $('<div>').add('class', 'task-card');
    let cardTitle = $('<h2>').text(newCards[i].Title);
    let cardDesc = $('<p>').text(newCards[i].Description);
    let cardDue = $('<h4>').text(newCards[i].DueDate);

    div.append(cardTitle);
    div.append(cardDesc);
    div.append(cardDue);
    placement.append(div)

    
   }
});

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
