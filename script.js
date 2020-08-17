let filterInput = document.querySelector("#filterInput");

function filterToDo() {   
    let items = [...document.querySelectorAll(".collection-item")];

    let filterValue = this.value.toUpperCase();

    console.log(filterValue);
    
    items.forEach(items => 
        items.textContent.toUpperCase().includes(filterValue) ? items.style.display = "" : items.style.display = "none"
    );
}

filterInput.addEventListener("keyup", filterToDo);

//Add to do item
const addItem = document.querySelector("#addItem");
const list = document.querySelector(".collection");

function addToDo() {

    //Create text for new item
    const input = addItem.value;

    if (input !== "") {

        const text = document.createTextNode(input);

        //Create check icon for new item
        const checkBtn = document.createElement("a");
        checkBtn.classList.add("btn-floating", "btn-medium", "waves-effect", "waves-light", "blue", "checked");
        checkBtn.id = "checkItem";
        checkBtn.addEventListener("click", checkEventHandler, false);
        const checkIcon = document.createElement("i");
        checkIcon.classList.add("material-icons");
        checkIcon.innerHTML = "check";
        checkBtn.appendChild(checkIcon);

        //Create delete icon for new item
        const deleteBtn = document.createElement("a");
        deleteBtn.classList.add("btn-floating", "btn-medium", "waves-effect", "waves-light", "red");
        deleteBtn.id = "deleteItem";
        deleteBtn.addEventListener("click", deleteEventHandler, false);
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("material-icons");
        deleteIcon.innerHTML = "delete_forever";
        deleteBtn.appendChild(deleteIcon);

        //Create new button div
        const buttonDiv = document.createElement("div");
        buttonDiv.classList.add("buttons");
        buttonDiv.append(checkBtn);
        buttonDiv.appendChild(deleteBtn);

        //Create new item
        const newItem = document.createElement("li");
        newItem.appendChild(text);
        newItem.classList.add("collection-item");
        newItem.appendChild(buttonDiv);

        //Append new item to collection
        list.appendChild(newItem);
    }
}

//Handle task input event
addItem.addEventListener("keyup", function(event) {
    if (event.code === "Enter") {
        addToDo();
        this.value = "";
    }
});

//Delete event handler for newly created items
function deleteEventHandler() {
    this.parentNode.parentNode.remove();
    return false;
}

function checkEventHandler() {
    this.classList.toggle("checked");
    const text = this.parentNode.parentNode.firstChild.nodeValue;

    if (!this.classList.contains("checked")) {
        this.parentNode.parentNode.style.textDecoration = "line-through";
        this.parentNode.parentNode.classList.add("active");
    } else {
        this.parentNode.parentNode.style.textDecoration = "none";
        this.parentNode.parentNode.classList.remove("active");
    }
}




