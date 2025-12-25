function addTask() {
    const input = document.getElementById('taskInput');
    const val = input.value;
    if (val) {
        const li = document.createElement('li');
        li.textContent = val;
        document.getElementById('taskList').appendChild(li);
        input.value = '';
    }
}