const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const tasks = taskInput.value.trim().split("\n").filter(t => t.trim() !== "");
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
    taskInput.value = "";
});

clearBtn.addEventListener("click", () => {
    taskList.innerHTML = "";
});

