// Input area elements
const cardText = document.getElementById('cardText');
const cardBtn = document.getElementById('cardBtn');
const delBtn = document.getElementById('delBtn');
let ul = document.getElementById('ulTodo');
let itemsArr = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArr));
const data = JSON.parse(localStorage.getItem('items'));
// add new li to list
const createLi = (value) => {
    const li = document.createElement('li');
    li.textContent = value;
    ul.appendChild(li);
}
// submit value from input
const submitInput = () => {
    itemsArr.push(cardText.value);
    localStorage.setItem('items', JSON.stringify(itemsArr));
    createLi(cardText.value);
    cardText.value = "";
};
// Check content of localstorage
data.forEach(item => {
    createLi(item)
  })

// Event: Remove a Card
const delAll = () => {
    localStorage.clear();
    ul.innerHTML = '';
}
// Add on enter
const ent = e => e.keyCode == 13 ? submitInput() : 0;

cardText.addEventListener('keydown', ent);
delBtn.addEventListener('click', delAll);
cardBtn.addEventListener('click', submitInput);
