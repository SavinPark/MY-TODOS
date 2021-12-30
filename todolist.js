// DOM
const year = document.getElementById('year');
const month = document.getElementById('month');
const date = document.getElementById('date');
const day = document.getElementById('day');
const time = document.getElementById('time');

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
        <i class="far fa-circle circle-btn on"></i>
        <i class="far fa-check-circle checkcircle-btn"></i>
        <span class="work">${Todos[n-1].title}</span>
      </div>
      <div class="todo--right">
        <i class="fas fa-pen edit-btn"></i>
        <i class="fas fa-trash remove-btn"></i>
      </div>
    </li>
    `;
  todosList.prepend(li);
}

// Today
Today();
function Today() {
  const today = new Date();
  year.innerHTML = `${today.getFullYear()}`;
  switch(today.getMonth()) {
    case 1:
      month.innerHTML = 'January';
    case 2:
      month.innerHTML = 'February';
    case 3:
      month.innerHTML = 'March';
    case 4:
      month.innerHTML = 'April';
    case 5:
      month.innerHTML = 'May';
    case 6:
      month.innerHTML = 'June';
    case 7:
      month.innerHTML = 'July';
    case 8:
      month.innerHTML = 'August';
    case 9:
      month.innerHTML = 'September';
    case 10:
      month.innerHTML = 'October';
    case 11:
      month.innerHTML = 'November';
    case 12:
      month.innerHTML = 'December';
  };
  date.innerHTML = `${today.getDate()}`;
  switch(today.getDay()) {
    case 0:
      day.innerHTML = 'Sunday';
    case 1:
      day.innerHTML = 'Monday';
    case 2:
      day.innerHTML = 'Tuesday';
    case 3:
      day.innerHTML = 'Wednesday';
    case 4:
      day.innerHTML = 'Thursday';
    case 5:
      day.innerHTML = 'Friday';
    case 6:
      day.innerHTML = 'Saturday';
  };
  time.innerHTML = `${today.getHours()}:${today.getMinutes()}`;
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
      edit: false,
      remove: false,
    });
  }
  // reset input & textarea
  input.value = null;
  textarea.value = null;
  
  // console.log(Todos); // 확인!!!!!!!!!

  showTodos();

  // 생성된 후 선언 가능!
  const work = document.querySelector('.work');
  const circleBtn = document.querySelector('.circle-btn');
  const checkcircleBtn = document.querySelector('.checkcircle-btn');
  const editBtn = document.querySelector('.edit-btn');
  const removeBtn = document.querySelector('.remove-btn');

  // 완료/미완료
  circleBtn.addEventListener('click', (e) => {
    circleBtn.classList.toggle('on');
    checkcircleBtn.classList.toggle('on');
    work.classList.toggle('done');
  });
  checkcircleBtn.addEventListener('click', () => {
    circleBtn.classList.toggle('on');
    checkcircleBtn.classList.toggle('on');
    work.classList.toggle('done');
  });

  // 삭제
  removeBtn.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.remove();
  });

  // 수정
  editBtn.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.remove();

    form.classList.toggle('on');
    todos.classList.toggle('on');
    addBtn.classList.toggle('on');
    saveBtn.classList.toggle('on');
    
    console.log(e.target.parentElement.parentElement);
    input.value = title;
    textarea.value = contents;
  });
});


addBtn.addEventListener('click',() => {
  addBtn.classList.toggle('on');
  saveBtn.classList.toggle('on');
  form.classList.toggle('on');
  todos.classList.toggle('on');
});