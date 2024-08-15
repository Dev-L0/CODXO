const input = document.querySelector("#todo-input");
const addTodo = document.querySelector("#add-btn");
const list = document.querySelector("#todo-list");


    
loadTodos();
addTodo.addEventListener('click', addTodos)

function addTodos(){
    const todo = input.value.trim();
    const li = document.createElement('li');
    li.className = 'mx-3 mb-3 lii list-group-items my-3';
    li.innerHTML = todo;
    list.appendChild(li);
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'btn btn-danger mx-2';
    li.appendChild(delBtn);
    
    saveTodos();
}
function saveTodos(){
    let todos = [];
    list.querySelectorAll('li').forEach((el)=>{
        todos.push(el.textContent);
    });
    localStorage.setItem('todos', JSON.stringify(todos));

} 
list.addEventListener('click', function (e){
    if(e.target.nodeName === 'BUTTON'){
        e.target.parentNode.remove();
    }
    saveTodos();
})


function loadTodos(){
    const todos = JSON.parse(localStorage.getItem('todos') || [""]);
    todos.forEach((todo) => {
        const li = document.createElement('li');
        li.className = 'mx-3 mb-3 lii list-group-items my-3';
        li.innerHTML = todo.replace('Delete',""); 
        list.appendChild(li);
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.className = 'btn btn-danger mx-2';
        li.appendChild(delBtn);
})
}









