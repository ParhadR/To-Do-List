const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';  // Clears the input box after adding the task
    saveData();
} 

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    //this makes sure that when you close out the browser
    //or reload the tab, everything you added/changed is saved
}

function displayTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
displayTask();