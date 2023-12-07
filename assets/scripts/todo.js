taskInput = document.querySelector(".task-input");
addButton = document.querySelector(".btn-add");
tasksListContainer = document.querySelector(".tasks-list-container");

let tasks = [];
let tasksId = 0;

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
	addTask({
		title: taskInput.value,
		done: false,
	});

	createTask(taskInput.value);

	localStorage.setItem("tasks", JSON.stringify(tasks));

	taskInput.value = "";
});
function addTask(task) {
	tasks.push(task);
}

const createTask = (task, id) => {
	const li = document.createElement("li");
	li.classList.add("task-item");
	li.id = tasksId++;
	li.innerHTML = `
        <div class="done"></div>
        <span class="task-title">${task}</span>
        <div class="icons">
            <div><img src="./assets/images/todo/delete.svg" alt="delete-icon"></div>
            <div><img src="./assets/images/todo/edit.svg" alt="edit-icon"></div>
        </div>
    `;
	tasksListContainer.prepend(li);
};

function init() {
	const storedTasks = JSON.parse(localStorage.getItem("tasks"));
	console.log(storedTasks);
	if (storedTasks) {
		tasks = storedTasks;
		tasks.forEach((task) => {
			createTask(task.title);
		});
	}
}
init();
