// 'No task to do' text at 0 tasks

if (document.querySelector(".task-list").childElementCount == 0){
    document.querySelector(".task-list").innerHTML = '<p class="empty-task">No task to do.</p>';
}



// Add a task

document.querySelector(".add").addEventListener("click", () => {

    if (document.querySelector("#input-text").value == 0){
        alert("Enter a task");
    }

    else{

        if (document.querySelector(".task-list").firstChild.classList[0] == "empty-task"){
            document.querySelector(".task-list").firstChild.remove();
        }
        addNewTask();
        document.querySelector("#input-text").value = "";
    }
});

function addNewTask(){


    document.querySelector(".task-list").innerHTML +=
    '<li class="task"><div class="checked"><div class=""></div></div><div class="text">' + document.querySelector("#input-text").value + '</div><div class="delete"><img src="Trash.png" alt="delete icon"></div></li>';


    document.querySelectorAll(".checked").forEach(task => task.addEventListener("click", function() {
        this.firstChild.classList.toggle("checked-click");
        this.nextElementSibling.classList.toggle("del-line");
    }))


    document.querySelectorAll(".delete").forEach(del => del.addEventListener("click", function() {
        this.parentNode.remove();
        if (document.querySelector(".task-list").childElementCount == 0){
            document.querySelector(".task-list").innerHTML = '<p class="empty-task">No task to do.</p>';
        }
    })) 
}



// Add task with 'Enter' key

 /* document.addEventListener("keydown", (element) => {
    if (element.key == "Enter")
    {
        if (document.querySelector("#input-text").value == 0){
            alert("Enter a task");
        }

        else{

            if (document.querySelector(".task-list").firstChild.classList[0] == "empty-task"){
                document.querySelector(".task-list").firstChild.remove();
            }
            addNewTask();
            document.querySelector("#input-text").value = "";
        }
    }
}); */