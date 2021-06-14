let todoItems = [];

function addItem(value, id = Date.now()) {
  todoItems.push({
    id,
    title: value,
    completed: false,
  });
}

function onAddItem() {
  const $input = $("#todo-input");
  const item = $input.val();
  addItem(item);
  $input.val("");
  reproduce(todoItems);
}

function onItemCheckout(id) {
  const index = todoItems.findIndex((e) => e.id == id);
  todoItems[index].completed = !todoItems[index].completed;
  reproduce(todoItems);

  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(todoItems[index]),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((e) => {
      console.log("PUT Ok");
    })
    .catch((e) => {
      alert("Something went wrong");
    });
}

function onItemDelete(id) {
  todoItems = todoItems.filter((e) => e.id != id);
  reproduce(todoItems);

  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((e) => {
      console.log("DELETE Ok");
    })
    .catch((e) => {
      alert("Something went wrong");
    });
}

function init() {
  $("#add-btn").on("click", onAddItem);
  $("#todo-input").on("keypress", (e) => {
    if (e.which == 13) {
      onAddItem();
    }
  });

  loadToDoList();
  $("#list").on("click", ".list_item .form_check_input", (e) => {
    const id = $(e.currentTarget).parent().parent().parent().attr("data-id");
    onItemCheckout(id);
  });
  $("#list").on("click", ".list_item #del-btn", (e) => {
    const id = $(e.currentTarget).parent().attr("data-id");
    onItemDelete(id);
  });
}

function reproduce(items) {
  const $list = $("#list");
  $list.empty();

  items.forEach((e, i) => {
    const $li = $(`<li class="list_item ${
      e.completed ? "completed" : ""
    }" data-id="${e.id}">
            <div class="container_title">
            ${i + 1}. 
            <div class="form_check">
            <input type="checkbox" class="form_check_input" ${
              e.completed ? "checked" : ""
            }>
            </div>
            <div>
             ${e.title} 
            </div>
            </div>
            <button class="input btn-style" id="del-btn">DELETE</button>
        </li>`);
    $list.append($li);
  });
}

function loadToDoList() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
      json.slice(0, 10).forEach((e) => {
        addItem(e.title, e.id);
      });
      reproduce(todoItems);
    });
}
init();
