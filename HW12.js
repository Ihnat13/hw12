const textInput = document.getElementById(`textInput`);
const addBtn = document.getElementById(`addButton`);
const itemList = document.getElementById(`itemList`);
const appwrap = document.querySelector(`.app`);

addBtn.addEventListener('click', function () {
    const text = textInput.value.trim();
    if (text !== '') {
        addItem(text);
        textInput.value = '';
    }
});

itemList.addEventListener('click', function (event) {
    const target = event.target;

    if (target.tagName === 'BUTTON') {
        const listItem = target.closest('li');
        if (listItem) {
            listItem.remove();
        }
    }
});


function addItem (text){
    const createEl = document.createElement(`li`)
    createEl.innerHTML = `${text} <button class="deleteButton">X</button>`;
    itemList.append(createEl)
}