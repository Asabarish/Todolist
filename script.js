// Show Current Date
let today = new Date();

document.getElementById("date").innerHTML =
today.toDateString();

function addTask(){

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if(task === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let taskText = document.createElement("span");

    taskText.textContent = task;

    taskText.onclick = function(){
        taskText.classList.toggle("completed");
    };

    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");

    deleteBtn.onclick = function(){
        li.remove();
    };

    li.appendChild(taskText);

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

// Filter Function
function filterTasks(type){

    let tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(function(task){

        let text = task.querySelector("span");

        if(type === "all"){
            task.style.display = "flex";
        }

        else if(type === "completed"){

            if(text.classList.contains("completed")){
                task.style.display = "flex";
            }
            else{
                task.style.display = "none";
            }
        }

        else if(type === "pending"){

            if(!text.classList.contains("completed")){
                task.style.display = "flex";
            }
            else{
                task.style.display = "none";
            }
        }

    });
}