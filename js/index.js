'use strict'
const toDoItems = document.getElementsByClassName('todo-items')[0];
const input = document.getElementById('input');
const trashIcon = document.getElementById('trash');

input.addEventListener('keydown', function (event) {
    if(event.key === 'Enter') {
        addItem()
    }
})

function addItem() {
    const divParent = document.createElement('div');
    const divChild = document.createElement('div');
    const checkIcon = document.createElement('i');
    const trashIcon = document.createElement('i');

    divParent.className = 'todo-item';
    divParent.innerHTML = '<div>' +input.value+ '</div>';

    checkIcon.className = 'bi bi-check-square-fill';
    checkIcon.style.color = 'lightgrey'
    checkIcon.addEventListener('click', function () {
        checkIcon.style.color = 'limegreen'
    })
    divChild.appendChild(checkIcon)

    trashIcon.className = 'bi bi-trash3-fill';
    trashIcon.style.color = 'darkgrey'
    trashIcon.addEventListener('click', function () {
     divParent.remove()
    })
    divChild.appendChild(trashIcon)

    divParent.appendChild(divChild)

    toDoItems.appendChild(divParent)

    input.value= '';
}