const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

function addTask() {
    const value = input.value.trim();
    if (!value) return;
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = value;
    span.addEventListener('click', () => li.classList.toggle('completed'));
    const del = document.createElement('img');
    del.src = 'images/delete.svg';
    del.alt = 'Remove Task';
    del.addEventListener('click', () => list.removeChild(li));
    li.appendChild(span);
    li.appendChild(del);
    list.appendChild(li);
    input.value = '';
}

addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', e => {
    if (e.key === 'Enter') addTask();
});