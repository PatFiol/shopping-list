const addButton = document.querySelector('button')
const buyInput = document.querySelector('input')
const listItems = document.querySelector('ul')


function addItem() {
  const enteredValue = buyInput.value;
  const newListItem = document.createElement('li')
  newListItem.textContent = enteredValue;
  listItems.appendChild(newListItem);
  buyInput.value = '';
}
addButton.addEventListener('click', (addItem))
