const inputBox = document.querySelector(".task-input");
const taskList = document.querySelector(".task-list");
const taskBtn = document.querySelector(".add-task");
const completeTaskList = document.querySelector(".complete-task-list");

let taskArray = [];
let completeTaskArray = [];
let isEditing = false;
let isCompletedTaskUpdate = false;
let currentIndex = -1;

function addTask() {
  const inputValue = inputBox.value;
  if (inputValue === "") {
    alert("Add Task");
  } else {
    if (isEditing) {
      if (isCompletedTaskUpdate) {
        console.log("here");
        completeTaskArray[currentIndex] = inputValue;
        isEditing = false;
        isCompletedTaskUpdate = false;
        taskBtn.innerText = "Add";
        currentIndex = -1;
        renderCompleteTaskList();
      } else {
        taskArray[currentIndex] = inputValue;
        isEditing = false;
        taskBtn.innerText = "Add";
        currentIndex = -1;
      }
    } else {
      taskArray.push(inputValue);
    }
    renderTaskList();
  }
}

function renderTaskList() {
  let htmlContent = "";
  for (let i = 0; i < taskArray.length; i++) {
    htmlContent += `
    <div class="task">
      <div class="task-name">
      <i onclick = 'completeTask(${i})' class="bx bx-circle"></i>
        <p>${taskArray[i]}</p>
      </div>
      <div class="task-edit">
        <i onclick='editTask(${i})' class="edit-option bx bxs-edit-alt"></i>
        <i onclick='deleteTask(${i})' class="bx bxs-x-circle"></i>
      </div>
    </div>
     `;
  }
  taskList.innerHTML = htmlContent;
  inputBox.value = "";
}

function editTask(index) {
  inputBox.value = taskArray[index];
  isEditing = true;
  currentIndex = index;
  taskBtn.innerText = "Update";
}

function deleteTask(index) {
  taskArray.splice(index, 1);
  renderTaskList();
}

taskBtn.addEventListener("click", addTask);

function completeTask(index) {
  completeTaskArray.push(taskArray[index]);
  deleteTask(index);
  renderCompleteTaskList();
}

function deleteCompleteTask(index) {
  completeTaskArray.splice(index, 1);
  renderCompleteTaskList();
}

function editCompletedTask(index) {
  inputBox.value = completeTaskArray[index];
  isEditing = true;
  isCompletedTaskUpdate = true;
  currentIndex = index;
  taskBtn.innerText = "Update";
}

function renderCompleteTaskList() {
  let htmlContent = "";
  for (let i = 0; i < completeTaskArray.length; i++) {
    htmlContent += `
    <div class="task">
      <div class="task-name">
        <i onclick = 'markIncomplete(${i})' class="bx bxs-check-circle"></i>
        <p><s>${completeTaskArray[i]}</s></p>
      </div>
      <div class="task-edit">
        <i onclick = 'editCompletedTask(${i})' class="bx bxs-edit-alt"></i>
        <i onclick= "deleteCompleteTask(${i})" class="bx bxs-x-circle"></i>
      </div>
    </div>
    `;
  }
  completeTaskList.innerHTML = htmlContent;
}

function clearTasks() {
  taskArray.splice(0, taskArray.length);
  completeTaskArray.splice(0, completeTaskArray.length);
  renderTaskList();
  renderCompleteTaskList();
}

function markComplete() {
  for (let i = taskArray.length - 1; i >= 0; i--) {
    completeTaskArray.push(taskArray[i]);
    deleteTask(i);
  }
  renderCompleteTaskList();
}

function markIncomplete() {
  for (let i = completeTaskArray.length - 1; i >= 0; i--) {
    taskArray.push(completeTaskArray[i]);
    deleteCompleteTask(i);
  }
  renderTaskList();
}

function markIncomplete(index) {
  taskArray.push(completeTaskArray[index]);
  deleteCompleteTask(index);
  renderTaskList();
}
