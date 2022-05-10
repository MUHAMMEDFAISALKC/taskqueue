const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let todoList = []

const demoTodoList = [
  {
    id: 1,
    name: "Job Application",
    text: "need to apply for jobs",
    status: false,
    checkbox: true,
    delete: false,

  },
  {
    id: 2,
    name: "Calling to customer", 
    text: "need to call to customers for discuss the status",
    status: true,
    checkbox: true,
    delete: false,

  },
  {
    id: 3,
    name: "meeting", 
    text: "to meet with manager to discuss new project",
    status: false,
    checkbox: false,
    delete: false,

  }
]

todoList.push(demoTodoList)

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function showTodoList () {
  let listDraft = `<tr id="todo-head" class="todo-head">
  <th>id</th>
  <th></th>
  <th class="todo-subject">Todo</th>
  <th>Status</th>
  <th>Action</th>
  </tr>`
  list.innerHTML = listDraft

  for (let i=0; i < todoList[0].length; i++) {
    if (todoList[0][i].delete === false) {
      if (todoList[0][i].checkbox === true) {
        let srNumber = i + 1
        listDraft = `<tr class="list-tr"><td>` + srNumber +`</td><td><input type=checkbox onclick="uncheck(`+ todoList[0][i].id+ `)" checked="true" </td><td class="todo-subject" onclick="showDescription(`+ todoList[0][i].id +`)">` +todoList[0][i].name + `</td><td><button class="button5" id="doneStatus`+ todoList[0][i].id +`" onclick="fullDone(` + todoList[0][i].id +`)" >Done</button></td><td><button class="button5" onclick="todoDelete(`+todoList[0][i].id +`)" value="`+ todoList[0][i].id +`" id="todo-delete">Delete</button></td><tr>` 
      } else if (todoList[0][i].checkbox === false) {
        let srNumber1 = i + 1
        listDraft = `<tr class="list-tr"><td>` + srNumber1 +`</td><td><input type=checkbox onclick="check(`+ todoList[0][i].id+ `)" </td><td class="todo-subject" onclick="checkedLabel(`+ todoList[0][i].id +`); showDescription(`+ todoList[0][i].id +`)" >` +todoList[0][i].name + `</td><td><button class="button5" id="doneStatus`+ todoList[0][i].id +`" onclick="fullDone(` + todoList[0][i].id +`)" >Done</button></td> <td><button  class="button5" onclick="todoDelete(`+todoList[0][i].id +`)" value="`+ todoList[0][i].id +`" id="todo-delete">Delete</button></td></tr>`
      }
      //<form id="delete-form" onsubmit="todoDelete()" method="post"><input name="delete-id" type="hidden" value="` + todoList[0][i].id + `"> <input type="submit" value="Delete" id="todo-delete"></form>
      console.log(todoList[0][i].checkbox)
      list.innerHTML += listDraft
      //$("tr").html(listDraft).prependTo('#todo-list')
      
    } else {
      continue
    }
  }
  totalCount()
  uncheckedCount()
  doneStatusing()
}
showTodoList()

function doneStatusing() {

  for (let i= 0; i < todoList[0].length; i++) {
    if (todoList[0][i].status == true) {
      let x = i +1
      let button = document.getElementById(`doneStatus`+x)
      button.style.backgroundColor = "green"
      console.log(button)
    }
  }
}

function todoDelete(item) {
  let deleteItem = item
  deleteItem = deleteItem - 1
  console.log(deleteItem)
  todoList[0].splice(deleteItem, 1)
  showTodoList()
  console.log(todoList)
}

function NewTodo (id,text, name) {
  this.id = id
  this.text = text
  this.name = name
  this.status = false
  this.checkbox = false
  this.delete = false
}



window.initialize = function () {

}

function toggleNewTodo() {
    var addNewTodoArea = document.getElementById("addNewTodoArea")

    if (addNewTodoArea.style.display == "none") {
      addNewTodoArea.style.display = "flex"
    }
    else if (addNewTodoArea.style.display == "flex") {
        addNewTodoArea.style.display = "none"
    }
}

function saveTodo() {
  const todoSubjcet = document.getElementById("newTodoName").value
  const todoDescription = document.getElementById("todoDescription").value
  const id = todoList[0].length + 1
  const todo = new NewTodo(id,todoDescription,todoSubjcet,)
  todoList[0].push(todo)
  document.getElementById("newTodoName").value = ""
  document.getElementById("todoDescription").value = ""
  toggleNewTodo()
  console.log(todoList)
  showTodoList()
}

function newTodo() {
  toggleNewTodo()
}

function check (id) {
  let item = id - 1
  console.log(item)
  todoList[0][item].checkbox = true
  showTodoList()
}

function uncheck(id) {
  let item = id - 1
  console.log(item)
  todoList[0][item].checkbox = false
  showTodoList()
}

function totalCount() {
  let count = 0
  count = todoList[0].length
  /*
  for (let i = 0; i < todoList[0].length; i++) {
    if (todoList[0][i].checkbox == true) {
      count = count +1
    }
  }
  */
  itemCountSpan.innerHTML = count
}

function uncheckedCount() {
  let count = 0
  for (let i = 0; i < todoList[0].length; i++) {
    if (todoList[0][i].checkbox == false) {
      count = count +1
    }
  }
  uncheckedCountSpan.innerHTML = count
}

function checkedLabel(id) {
  let item = id - 1
  todoList[0][item].checkbox = true
  showTodoList()
}

function showDescription(id) {
  let item = id -1
  let itemSub = todoList[0][item].name
  let itemDetail = todoList[0][item].text
  toggleDecri()
  let sub = document.getElementById("descriSub")
  let detail = document.getElementById("descriDetail")
  sub.innerHTML = itemSub
  detail.innerHTML =itemDetail
}

function toggleDecri() {
  let descriArea = document.getElementById("todoDescri-area")
  if (descriArea.style.display == "none") {
    descriArea.style.display = "flex"
  } else if (descriArea.style.display == "flex") {
    descriArea.style.display = "none"
  }
}

function fullDone(id) {
  let button = document.getElementById(`doneStatus`+id)
  let item = id - 1
  todoList[0][item].status  = true
  button.style.backgroundColor = "green"
}