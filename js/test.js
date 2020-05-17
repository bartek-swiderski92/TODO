let todoList = null;
let todoForm = null;
let todoSearch = null;

function addTask(text) {
  //element todo
  const todo = document.createElement('div');
  todo.classList.add('todo-element');

  //belka gorna
  const todoBar = document.createElement('div');
  todoBar.classList.add('todo-element-bar');

  //data w belce
  const todoDate = document.createElement('div');
  todoDate.classList.add('todo-element-bar');
  const date = new Date();
  const dateText = `${date.getDate()} - ${date.getMonth()+1} - ${date.getFullYear()} godz.: ${date.getHours()}:${date.getMinutes()}`;
  todoDate.innerText = dateText;

  //przycisk usuwania
  const todoDelete = document.createElement('button');
  todoDelete.classList.add('todo-element-delete');
  todoDelete.classList.add('button');
  todoDelete.innerHTML = '<i class="fas fa-times-circle"></i>';

  //wrzucamy elementy do belki
  todoBar.appendChild(todoDate);
  todoBar.appendChild(todoDelete);

  //element z tekstem
  const todoText = document.createElement('div');
  todoText.classList.add('todo-element-text');
  todoText.innerText = text;

  //laczymy calosc
  todo.appendChild(todoBar);
  todo.appendChild(todoText);

  //i wrzucamy do listy
  todoList.append(todo);
}

document.addEventListener('DOMContentLoaded', function() {
  todoList = document.querySelector('#todoList');
  todoForm = document.querySelector('#todoForm');
  todoSearch = document.querySelector('#todoSearch');

  todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const textarea = this.querySelector('textarea');
    if (textarea.value !== '') {
      addTask(textarea.value);
      textarea.value = '';
    }
  });
});
