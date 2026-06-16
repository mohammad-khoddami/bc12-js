var taskList = [];
var taskListTag = document.getElementById("task-list-tag");
var taskInputTag = document.getElementById("task-input-tag");

var isEdit = false;
var editId = null;

function addTask(e) {
    var inputValue = e.target.value.trim();

    if (e.key === "Enter" && inputValue) {
        if (!isEdit) {
            taskList.push({
                name: inputValue,
                status: "pending",
            });
        } else {
            taskList[editId].name = taskInputTag.value;
            isEdit = false;
            editId = null;
        }
        e.target.value = "";
    }

    printTask();
}

function printTask() {
    var taskItemTag = "";
    for (var i = 0; i < taskList.length; i++) {
        var complete = taskList[i].status === "complete" ? "checked" : "";
        taskItemTag += `<li class="task">
            <label for="task-${i}">
                <input type="checkbox" id="task-${i}" onclick="toggleTaskStatus(${i})" ${complete} />
                <p class="${complete}">${taskList[i].name}</p>      
            </label>
            <div>
                <button onclick="editTask(${i})">edit</button>
                <button onclick="removeTask(${i})">remove</button>
            </div>  
        </li>`;
    }

    taskListTag.innerHTML = taskItemTag;

    console.log(taskList);
}

function toggleTaskStatus(id) {
    for (var i = 0; i < taskList.length; i++) {
        if (id === i) {
            taskList[i].status =
                taskList[i].status === "pending" ? "complete" : "pending";
        }
    }
    printTask();
}

function editTask(id) {
    for (var i = 0; i < taskList.length; i++) {
        if (id === i) {
            taskInputTag.value = taskList[i].name;
            taskInputTag.focus();
            isEdit = true;
            editId = id;
        }
    }
}

function removeTask(id) {
    var newList = [];
    for (var i = 0; i < taskList.length; i++) {
        if (id !== i) {
            newList.push(taskList[i]);
        }
    }
    taskList = newList;

    printTask();
}
