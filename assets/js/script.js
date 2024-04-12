// Retrieve tasks and nextId from localStorage
const modal = $('.modal');
const saveBtn = $('.save-btn');


// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    $('.droppable').droppable({
        accept: '.draggable'
    });
});

// Todo: create a function to generate a unique task id
function generateTaskId() {
    let id = "id: " + Math.random().toString(10).slice(5, 9);
    console.log(id);
}

// Save form input to local storage 
saveBtn.on('click', function (){
    let stringTasks = localStorage.getItem('userTasks');
    let userTasks = JSON.parse(stringTasks) || [];

    const formData = {
        Title: $('#title').val(),
        Id: generateTaskId(),
        Status: 'todo-cards',
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
    let div = $('<div>').css('z-index', '100').addClass('draggable');
    let cardTitle = $('<h2>').text(newCards[i].Title);
    let cardDesc = $('<p>').text(newCards[i].Description);
    let cardDue = $('<h4>').text(newCards[i].DueDate);
    let deleteBtn = $('<button>').text('Delete').attr('id', 'deleteBtn');
   
    div.append(cardTitle);
    div.append(cardDesc);
    div.append(cardDue);
    div.append(deleteBtn);
    placement.append(div);
   }

   
   
   $('.draggable').draggable({
    zIndex: 100
});

});


// Todo: create a function to handle deleting a task



// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    
}


