const newItemInput = document.getElementById("new-item-input");
const addButton = document.getElementById("add-button");
const list = document.getElementById("list");

addButton.addEventListener("click", addItem);

function addItem() {
  const newItemText = newItemInput.value.trim();
  if (newItemText !== "") {
    const newItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const text = document.createTextNode(newItemText);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    newItem.appendChild(checkbox);
    newItem.appendChild(text);
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);
    newItemInput.value = "";
    checkbox.addEventListener("change", toggleItem);
    deleteButton.addEventListener("click", deleteItem);
  }
}

function toggleItem() {
  const item = this.parentNode;
  item.classList.toggle("done");
  if (this.checked) {
    list.appendChild(item);
  } else {
    list.insertBefore(item, list.firstChild);
  }
}

function deleteItem() {
  const item = this.parentNode;
  list.removeChild(item);
}