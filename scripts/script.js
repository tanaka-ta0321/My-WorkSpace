'use strict';

const taskAddButton = document.getElementById('newtaskaddbutton');
const taskRemoveButton = document.getElementById('newtaskremovebutton');
const taskList = document.getElementById('tasklist');

taskAddButton.addEventListener('click', () => {
  const newTask = document.createElement('li');
  const taskInput = document.getElementById('newtasktext');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    newTask.innerHTML = `<input type="checkbox"> ${taskText}`;
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
  else {
    alert('タスク内容を入力してください。');
  }
});

taskRemoveButton.addEventListener('click', () => {
  const checkedTasks = taskList.querySelectorAll('input[type="checkbox"]:checked');
  checkedTasks.forEach(task => task.parentElement.remove());
});


function updateDateTime() {
                const now = new Date();
                const week_ja = ["日", "月", "火", "水", "木", "金", "土"];
                const year = now.getFullYear();
                const month = now.getMonth() + 1;
                const day = now.getDate();
                const week = week_ja[now.getDay()];
                const hour = String(now.getHours()).padStart(2, "0");
                const minute = String(now.getMinutes()).padStart(2, "0");
                const second = String(now.getSeconds()).padStart(2, "0");

                document.getElementById("datetime").textContent =
                    `${year}/${month}/${day}(${week}) ${hour}:${minute}:${second}`;
            }

            updateDateTime();
            setInterval(updateDateTime, 1000); // 1秒ごとに更新