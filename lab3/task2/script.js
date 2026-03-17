const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

/* ---------- STORAGE ---------- */

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

/* ---------- RENDER ---------- */

function renderTasks() {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML =
            '<li class="empty-state">No tasks yet</li>';
        return;
    }

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        if (task.completed) li.classList.add('completed');

        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <label>${task.text}</label>
            <button class="delete-btn">🗑</button>
        `;

        // checkbox toggle
        li.querySelector('input').addEventListener('change', () => {
            tasks[index].completed =
                !tasks[index].completed;
            saveTasks();
            renderTasks();
        });

        // delete
        li.querySelector('.delete-btn')
            .addEventListener('click', () => {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            });

        taskList.appendChild(li);
    });
}

/* ---------- ADD TASK ---------- */

function addTask() {
    const text = taskInput.value.trim();

    if (!text) return;



    

    tasks.push({
        text: text,
        completed: false
    });

    saveTasks();
    renderTasks();

    taskInput.value = '';
    taskInput.focus();
}

/* ---------- EVENTS ---------- */

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') addTask();
});

/* ---------- INIT ---------- */

renderTasks();
taskInput.focus();
