//seleector
const todoInput=document.querySelector('.todo-input');
const todobutn=document.querySelector('.todo-button');
const todolist=document.querySelector('.todo-list');

//eventlistener
todobutn.addEventListener('click',addtodo);
todolist.addEventListener('click',deleteCheck);
//function
function addtodo(event){
  
    //prevent form from submitting
    event.preventDefault();
    //create todo div
    const tododiv=document.createElement('div');
    tododiv.classList.add('todo');
    //create li
    const todoNew=document.createElement('li');
    todoNew.innerText= todoInput.value;
    todoNew.classList.add('todo-item');
    tododiv.appendChild(todoNew);
    //create check button
    const todobutn=document.createElement('button');
    todobutn.innerText='Done'
    todobutn.classList.add('todo-btn');
    tododiv.appendChild(todobutn);
    //trash button
    const deletebtn=document.createElement('button');
    deletebtn.innerText='delete'

    deletebtn.classList.add('trash-btn');
    tododiv.appendChild(deletebtn);
    //append to list
    todolist.appendChild(tododiv)
    //c;ear todo value
    todoInput.value='';

}
//delete check 
function deleteCheck(e){
const item=e.target;
//delete
if (item.classList[0]==='trash-btn'){
 //   item.remove() removes button alone
 const todo=item.parentElement;
 todo.classList.toggle('complete')
 todo.addEventListener('transitionend',function() {
    todo.remove()
 }
 
);
}
// check
if (item.classList[0]==='todo-btn'){
    //   item.remove() removes button alone
    const todo=item.parentElement;
    todo.classList.toggle('line')
   }

}