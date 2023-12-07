taskInput = document.querySelector(".task-input");
addButton = document.querySelector(".btn-add");
tasksListContainer = document.querySelector(".tasks-list-container");

let tasks = [];

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
	taskInput.value = "";
});
function addTask(task) {
	tasks.push(task);
}

const createTask = (task) => {
	const li = document.createElement("li");
	li.classList.add("task-item");
	li.innerHTML = `
        <div class="done"></div>
        <span class="task-title">${task}</span>
        <div class="icons">
            <div><img src="./assets/images/todo/delete.svg" alt="delete-icon"></div>
            <div><img src="./assets/images/todo/edit.svg" alt="edit-icon"></div>
        </div>
    `;

	console.log(li);

	console.log(tasksListContainer.innerHTML);
	console.log(li.innerHTML);

	tasksListContainer.innerHTML += li.outerHTML;
};
