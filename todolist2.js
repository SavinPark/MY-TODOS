// Btns
const circleBtn = document.querySelector('.circle-btn'); 
const checkcircleBtn = document.querySelector('.checkcircle-btn'); 
const editBtn = document.querySelector('.edit-btn'); 
const removeBtn = document.querySelector('.remove-btn'); 
const saveBtn = document.querySelector('.save-btn'); 
const addBtn = document.querySelector('.plus-circle'); 
// 정보 입력공간
const inputTitle = document.querySelector('input');
const textareaContents = document.querySelector('textarea');
// Todos 목록
const todosList = document.querySelector('.todos');
// 입력 Form
const form = document.querySelector('.form');

// Todos 배열
const Todos = [];


showTodos();

// Todos 나타내기 //////////////////
function showTodos() {
  tempTodos = {...Todos};
  const {title, contents, done} = tempTodos;
  // 새로운 li 생성
  for (let i=0 ; i<Todos.length; i++) {
    const li = document.createElement('li');
    generateLi(li, title);
    ul.prepend(li);
  }
}

// li 생성 ///////////////
function generateLi(li, title) {
  // li
  li.classList.add('todo');
  // li > div--left
  const divLeft = makeTodoDiv('left');
  divLeft.appendChild(makeIcon('far fa-check-circle', 'checkcircle-btn'));
  divLeft.appendChild(document.createTextNode(title));
  divLeft.appendChild(li);

  // li > div--right
  const divRight = makeTodoDiv('right');
  divRight.appendChild(makeIcon('fas fa-pen', 'edit-btn'));
  divRight.appendChild(makeIcon('fas fa-trash', 'remove-btn'));
  divRight.appendChild(li);
}

// div--left / div--right 생성
function makeTodoDiv(direction) {
  const div = document.createElement("div");
  div.classList.add(`todo--${direction}`);  
}

// 아이콘 넣기
function makeIcon(...icon) {
  const i = document.createElement('i');
  i.classList.add (...icon);
}

// Todo 등록하기
saveBtn.addEventListener('click', () => {
  const title = document.querySelector('input').value;
  const contents = document.querySelector('textarea').value;
  // 입력한 정보  Todos 배열 안에  push
  Todos.push({
    title: title,
    contents: contents,
    done: false,
  });
  // 입력공간 초기화
  inputTitle.value=null;
  textareaContents.value=null;
});

// add버튼 클릭하면 나타나는 효과
addBtn.addEventListener('click',() => {
  addBtn.classList.toggle('on');
  saveBtn.classList.toggle('on');
  form.classList.toggle('on');
  todosList.classList.toggle('on');
  
});


// // cirlce ///////////////////
// circleBtn.addEventListener('click', () => {
//   circleBtn.classList.toggle('on');
// })

// // checkCirlce //////////////////////////
// checkcircleBtn.addEventListener('click', () => {
//   checkcircleBtn.classList.toggle('on');
// })