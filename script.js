"use strict";

const addBtn = document.querySelector("button");
const itemToAdd = document.querySelector("#itemName");
const itemList = document.querySelector("ul");

let deleteBtnInstance;

addBtn.addEventListener("click", startProcedure);
addEventListener("keydown", startProcedure);

function startProcedure (event) {
    if ((event.key == "Enter" && itemToAdd.value!== "") || 
        (itemToAdd.value!== "" && event.type==="click")) {

        const element = createListItem();
        const inputItem = itemToAdd.value;
        addContentAndButtoon(element, inputItem);
        itemList.appendChild(element);
        // empty the input field
        itemToAdd.value="";
        //add event listener to delete button
        deleteBtnInstance.addEventListener("click", deleteItem);
    }
}

function createListItem() {
    const li = document.createElement("li");
    return li;
}

function createDeleteButton() {
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.classList.add("deleteBtn");
    return button;
}

function deleteItem(e) {
    const parentOfButoon = e.target.parentElement;
    itemList.removeChild(parentOfButoon);
}

function addContentAndButtoon(element, inputItem) {
    const text = document.createTextNode(inputItem);
    element.appendChild(text);

    const button = createDeleteButton();
    element.appendChild(button);
    deleteBtnInstance = button;
}
