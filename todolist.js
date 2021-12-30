// DOM
const saveBtn = document.querySelector('.save-btn'); 
const addBtn = document.querySelector('.plus-circle'); 

const todos = document.querySelector('.todos');
const todosList = document.querySelector('.todos > ul');

const form = document.querySelector('.form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

// TodosArray
const Todos = [];


// Todos 배열에 등록된 내용을 보여주는 함수
function showTodos() {
  let n = Todos.length;
  const li = document.createElement('li');
  li.innerHTML = `
    <li class="todo">
      <div class="todo--left">
        <i class="far fa-check-circle checkcircle-btn"></i>
        <i class="far fa-circle checkcircle-btn"></i>
        ${Todos[n-1].title}
      </div>
      <div class="todo--right">
        <i class="fas fa-pen edit-btn"></i>
        <i class="fas fa-trash remove-btn"></i>
      </div>
    </li>
    `;
  todosList.prepend(li);
}


// Event Handling
saveBtn.addEventListener('click', () => {
  const title = input.value;
  const contents = textarea.value;
  // push
  if (Todos.length === 0) {
    Todos.push({
      id: 0,
      title: title,
      contents: contents,
      done: false,
    });
  } else {
    Todos.push({
      id: Todos.length,
      title: title,
      contents: contents,
      done: false,
    });
  }
  // reset input & textarea
  input.value = null;
  textarea.value = null;
  
  console.log(Todos); // 확인!!!!!!!!!

  showTodos();
});

addBtn.addEventListener('click',() => {
  addBtn.classList.toggle('on');
  saveBtn.classList.toggle('on');
  form.classList.toggle('on');
  todos.classList.toggle('on');
});
