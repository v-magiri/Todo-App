//selction
const todoInput=document.querySelector(".list-input");
const addBtn=document.querySelector(".addBtn");
const todolist=document.querySelector(".todoList");
//DOM manipulation
addBtn.addEventListener("click",addList);

todolist.addEventListener("click",manipulateTodo)

function addList(event){
    event.preventDefault();
    const todoContainer=document.createElement("div");
    todoContainer.classList.add("todo");
    const listItem=document.createElement("li");
    listItem.classList.add("list_Item");
    // if(listItem.textContent.length !== 0){
    console.log(listItem);
    listItem.innerText=todoInput.value;
    todoContainer.appendChild(listItem);

    // create the deleteButton
    const delBtn=document.createElement("button");
    delBtn.classList.add("del-Btn");
    delBtn.innerHTML='<i class="fas fa-trash"></i>'
    todoContainer.appendChild(delBtn);

    //create the edit Button
    const editBtn=document.createElement("button");
    editBtn.classList.add("edit-Btn");
    editBtn.innerHTML='<i class="fas fa-edit"></i>'
    todoContainer.appendChild(editBtn);

    // create the checked Button
    const checkBtn=document.createElement("button");
    checkBtn.classList.add("check-Btn");
    checkBtn.innerHTML='<i class="far fa-check-circle"></i>'
    todoContainer.appendChild(checkBtn);

    //appending tto the main div element
    todolist.appendChild(todoContainer);
    todoInput.value="";
    // }
    // else{
    //     alert("please Enter a task")
    // }
}
// manipulate the Todo
function manipulateTodo(e){
    const selectItem=e.target;
    if(selectItem.classList[0]==="del-Btn"){
        const todo=selectItem.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
                // todo.remove();
    });
    }
    if(selectItem.classList[0]==="check-Btn"){
        const todo=selectItem.parentElement;
        todo.classList.toggle("completed");
    }
    if(selectItem.classList[0]==="edit-Btn"){
        const todo=selectItem.parentElement;
        const itemSelected=todo.querySelector(".list_Item").textContent;
        todoInput.value=itemSelected;
        addBtn.innerHTML='<i class="fas fa-pen"></i>'

        console.log();
    }
    
}
