const input = document.querySelector(".input-text");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

let todos = [];

function enterKey(event) {
    if (event.keyCode === 13) {
        todos = todos.concat({text: input.value, done: false});
        input.value = " ";
        display();
    }
}
function display(data = todos) {
    ul.innerHTML = data.map((item, index) => {
        return (
            `<li class = "list">
                <input class = "checkbox" data-id = ${index} ${item.done ? "checked" : ""} type="checkbox">
                <p class = "para">${item.text}</p>
                <button class="delete-button" data-id = ${index}>x</button>
            </li>`
        )
    }).join(" ");
}
function handleDelete(event) {
    // console.log(event);
    const btnid = event.target.dataset.id;
    if (event.target.className === "delete-button") {
    // console.log(btnid);
    todos.splice(btnid, 1);
    // console.log(todos);
    display();
}
}
function handleCheck(event) {
    console.log(event);
    if (event.target.className === "checkbox") {
        console.log("checkbox checked");
        const checkId = event.target.dataset.id;
        console.log(checkId);
        todos[checkId].done = !todos[checkId].done; 
    }
}

let arr;
function completedTask(){
 let arr = todos.filter(todo => todo.done === true);
    display(arr);
}

function allTask() {
    display(todos);
}

function clearCompleted(event){
    todos = todos.filter(todo => todo.done === false);
    display(todos);
}

let newarr;
function activeTask(){
    newarr = todos.filter(todo => todo.done === false);
    display(newarr);
}

input.addEventListener("keyup", enterKey);
ul.addEventListener("click", handleDelete);
ul.addEventListener("click", handleCheck);
let complete = document.querySelector(".complete");
complete.addEventListener("click", completedTask);
let active = document.querySelector(".active");
active.addEventListener("click", activeTask);
let all = document.querySelector(".all");
all.addEventListener("click", allTask);
let clearAll = document.querySelector(".clearall");
clearAll.addEventListener("click", clearCompleted);













