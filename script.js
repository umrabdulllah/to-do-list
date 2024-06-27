const taskInput = document.getElementById("task-input");
const taskList = document.querySelector(".task-list");
const completeTaskList = document.querySelector(".complete-task-list");
let taskArray = [];

function addTask() {
  if (taskInput.value == "") {
    alert("You must write something!");
  } else {
    taskArray.push(taskInput.value);
    htmlContent = "";
    for (let i = 0; i < taskArray.length; i++) {
      htmlContent += `<div class="task">
          <div class="task-name">
            <i class="bx bx-circle"></i>
            <p id="task-name">${taskArray[i]}</p>
          </div>
          <div class="task-edit">
            <i class="edit-option bx bxs-edit-alt"></i>
            <i class="bx bxs-x-circle"></i>
          </div>
        </div>`;
    }
    taskList.innerHTML = htmlContent;
    taskInput.value = "";
  }
}

function clearTasks() {
  taskList.innerHTML = "";
  completeTaskList.innerHTML = "";
}
