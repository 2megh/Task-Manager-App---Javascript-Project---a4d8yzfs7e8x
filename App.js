// Get form and sections
const taskForm = document.getElementById('taskForm');
const openTasksSection = document.getElementById('openTasks');
const progressTasksSection = document.getElementById('progressTasks');
const reviewTasksSection = document.getElementById('reviewTasks');
const doneTasksSection = document.getElementById('doneTasks');

// Add task event listener
taskForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const taskName = document.getElementById('taskName').value;
  const taskDescription = document.getElementById('taskDescription').value;
  const taskSection = document.getElementById('taskSection').value;

  // Create task card
  const taskCard = document.createElement('div');
  taskCard.className = 'task-card';
  taskCard.innerText = taskName;
  taskCard.draggable = true; // Enable draggability

  // Add click event listener to open task modal
  taskCard.addEventListener('click', function() {
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    modalTitle.innerText = taskName;
    modalDescription.innerText = taskDescription;
    document.getElementById('taskModal').style.display = 'block';
  });

  // Add task card to the corresponding section
  if (taskSection === 'open') {
    openTasksSection.appendChild(taskCard);
  } else if (taskSection === 'progress') {
    progressTasksSection.appendChild(taskCard);
  } else if (taskSection === 'review') {
    reviewTasksSection.appendChild(taskCard);
  } else if (taskSection === 'done') {
    doneTasksSection.appendChild(taskCard);
  }

  // Reset form
  taskForm.reset();
});

// Modal close button event listener
document.getElementsByClassName('close')[0].addEventListener('click', function() {
  document.getElementById('taskModal').style.display = 'none';
});

// Drag and drop functionality
const taskCards = document.getElementsByClassName('task-card');

for (const taskCard of taskCards) {
  taskCard.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
  });

  taskCard.addEventListener('dragover', function(event) {
    event.preventDefault();
  });

  taskCard.addEventListener('drop', function(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData('text/plain');
    const droppedTask = document.getElementById(taskId);
    const newSection = event.currentTarget.parentElement.id;
    event.currentTarget.parentElement.appendChild(droppedTask); // Append to parent element
    updateTaskSection(taskId, newSection);
  });
}


// Update task section
function updateTaskSection(taskId, newSection) {
  // Implement your code here to update the task section in your data model or server.
  console.log(`Task ID: ${taskId}, New Section: ${newSection}`);
}
