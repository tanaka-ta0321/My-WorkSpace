'use strict';


// tasklist部分の処理-------------------------------------------------------------
const taskAddButton = document.getElementById('newtaskaddbutton');
const taskRemoveButton = document.getElementById('taskremovebutton');
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
//------------------------------------------------------------------------------

// linklist部分の処理-------------------------------------------------------------
const linkAddButton = document.getElementById('linkaddbutton');
const linkRemoveButton = document.getElementById('linkremovebutton');
const linkList = document.getElementById('linklist');
const linkEditButton = document.getElementById('linkeditbutton');

linkEditButton.addEventListener('click', () => {
  document.getElementById('newlinknametext').classList.toggle('hidden');
  document.getElementById('newlinkurltext').classList.toggle('hidden');
  document.getElementById('linkaddbutton').classList.toggle('hidden');
  document.getElementById('linkremovebutton').classList.toggle('hidden');

  if (linkEditButton.value === '編集') {
    linkEditButton.value = '完了';
  }
  else {
    linkEditButton.value = '編集';
  }
});

linkAddButton.addEventListener('click', () => {
  const linkNameInput = document.getElementById('newlinknametext');
  const linkUrlInput = document.getElementById('newlinkurltext');
  const linkName = linkNameInput.value.trim();
  const linkUrl = linkUrlInput.value.trim();

  if (linkName !== '' && linkUrl !== '') {
    const newLink = document.createElement('li');
    newLink.innerHTML = `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer">${linkName}</a>`;
    linkList.appendChild(newLink);
    linkNameInput.value = '';
    linkUrlInput.value = '';
  }
  else {
    alert('リンク名とURLを入力してください。');
  }
});

linkRemoveButton.addEventListener('click', () => {
  const checkedLinks = linkList.querySelectorAll('input[type="checkbox"]:checked');
  checkedLinks.forEach(link => link.parentElement.remove());
});
//------------------------------------------------------------------------------

// 日付と時刻の表示更新-----------------------------------------------------------
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