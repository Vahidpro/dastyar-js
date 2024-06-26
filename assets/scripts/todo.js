const taskInput = document.querySelector(".task-input");
const addButton = document.querySelector(".btn-add");
const tasksListContainer = document.querySelector(".tasks-list-container");

let tasks = [];
const maxTitleLength = 16;
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
	li.classList.add("transition-0");
	li.id = id;
	li.innerHTML = `
        <div class="done"></div>
        <span class="task-title">${title}</span>
        <div class="icons d-flex align-items-center justify-content-center ">
            <div ><img class="btn-edit d-flex align-items-center justify-content-center" src="./assets/images/todo/edit.svg" alt="edit-icon"></div>
            <div ><img class="btn-delete d-flex align-items-center justify-content-center" src="./assets/images/todo/delete.svg" alt="delete-icon"></div>
        </div>
    `;
	tasksListContainer.prepend(li);

	setTimeout(() => {
		li.classList.remove("transition-0");
		li.classList.add("transition-1");
	}, 200);
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

function deleteTask(id, e) {
	const li = document.getElementById(id);
	li.classList.remove("transition-1");
	li.classList.add("transition-0");
	tasks = tasks.filter((task) => task.id != Number(id));
	localStorage.setItem("tasks", JSON.stringify(tasks));

	setTimeout(() => {
		e.target.parentElement.parentElement.parentElement.remove();
	}, 300);
}

tasksListContainer.addEventListener("click", (e) => {
	const id = e.target.parentElement.parentElement.parentElement.id;
	if (e.target.classList.contains("btn-delete")) {
		deleteTask(id, e);
	}
});
