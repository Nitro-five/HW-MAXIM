$(function () {
  const todoItems = [];
  function addItem(value) {
    todoItems.push({
      id: Date.now(),
      title: value,
    });
  }
  function onAddItem() {
    const $input = $("#todo-input");
    const item = $input.val();
    addItem(item);
    $input.val("");
    renderItems(todoItems);
  }
  function init() {
    $("#add-btn").on("click", onAddItem);
    $("#todo-input").on("keypress", (e) => {
      if (e.which == 13) {
        onAddItem();
      }
    });
    $("#list").on("click", ". list-group-item ", console.log);
  }
  function renderItems(items) {
    const $list = $("#list");
    $list.empty();
    items.forEach((e) => {
      const $li = $(
        `<li class="list-group-item " data-id="${e.id}">${e.title}</li>`
      );
      $list.append($li);
    });
  }
  init();
});
