taskInput = document.querySelector(".task-input");
addButton = document.querySelector(".btn-add");
tasksListContainer = document.querySelector(".tasks-list-container");

let tasks = [];
const maxTitleLength = 20;
let tasksId = localStorage.getItem("tasksId")
	? parseInt(localStorage.getItem("tasksId"))
	: 0;

// New task input validation
taskInput.addEventListener("input", (e) => {
	if (taskInput.value.trim() == "") {
		addButton.disabled = true;
	} else {
		addButton.disabled = false;
	}
});

// Add new task
addButton.addEventListener("click", (e) => {
	e.preventDefault();
	if (taskInput.value.trim() == "") {
		return;
	}
	id = tasksId++;
	addTask({
		title: taskInput.value,
		done: false,
		id: id,
	});

	createTask(taskInput.value, id);

	localStorage.setItem("tasks", JSON.stringify(tasks));
	localStorage.setItem("tasksId", tasksId);

	taskInput.value = "";
});
function addTask(task) {
	tasks.push(task);
}

const createTask = (taskTitle, id) => {
	let title = taskTitle;
	if (title.length > maxTitleLength) {
		title = title.substring(0, maxTitleLength) + "...";
	}
	const li = document.createElement("li");
	li.classList.add("task-item");
	li.id = id;
	li.innerHTML = `
        <div class="done"></div>
        <span class="task-title">${title}</span>
        <div class="icons">
            <div ><img class="btn-edit" src="./assets/images/todo/edit.svg" alt="edit-icon"></div>
            <div ><img class="btn-delete" src="./assets/images/todo/delete.svg" alt="delete-icon"></div>
        </div>
    `;
	tasksListContainer.prepend(li);
};

function init() {
	const storedTasks = JSON.parse(localStorage.getItem("tasks"));
	if (storedTasks) {
		tasks = storedTasks;
		tasks.forEach((task) => {
			createTask(task.title, task.id);
		});
	}
}
init();

function deleteTask(id) {
	tasks = tasks.filter((task) => task.id != Number(id));
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

tasksListContainer.addEventListener("click", (e) => {
	const id = e.target.parentElement.parentElement.parentElement.id;
	if (e.target.classList.contains("btn-delete")) {
		deleteTask(id);
		e.target.parentElement.parentElement.parentElement.remove();
	}
});
