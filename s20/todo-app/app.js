// var taskList = JSON.parse(localStorage.getItem("taskList")) || [];
var taskList = [];
var taskListTag = document.getElementById("task-list-tag");
var taskInputTag = document.getElementById("task-input-tag");
var clearBtnTag = document.getElementById("clear-btn");

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
            taskList[editId].name = inputValue;
            isEdit = false;
            editId = null;
        }
        e.target.value = "";
    }

    updateLocalStorage();
    printTask();
}

function printTask(filter = "all") {
    var taskItemTag = "";

    clearBtnStyle();
    filterStyle(filter);

    for (var i = 0; i < taskList.length; i++) {
        if (filter === taskList[i].status || filter === "all") {
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
    }

    taskListTag.innerHTML = taskItemTag;

    console.log(taskList);
}

function clearBtn(e) {
    taskList = [];
    updateLocalStorage();
    printTask();
}

function filterStyle(filter) {
    var filterBtn = document.getElementById("filters").children;
    for (var i = 0; i < filterBtn.length; i++) {
        if (filterBtn[i].id === filter) {
            filterBtn[i].classList.add("active");
        } else {
            filterBtn[i].classList.remove("active");
        }
    }
}

function clearBtnStyle() {
    if (taskList.length > 0) {
        clearBtnTag.classList.add("active");
    } else {
        clearBtnTag.classList.remove("active");
    }
}

function toggleTaskStatus(id) {
    taskList[id].status =
        taskList[id].status === "pending" ? "complete" : "pending";
    updateLocalStorage();
    printTask();
}

function editTask(id) {
    taskInputTag.value = taskList[id].name;
    taskInputTag.focus();
    isEdit = true;
    editId = id;
}

function removeTask(id) {
    var newList = [];
    for (var i = 0; i < taskList.length; i++) {
        if (id !== i) {
            newList.push(taskList[i]);
        }
    }
    taskList = newList;

    updateLocalStorage();
    printTask();
}

function updateLocalStorage() {
    localStorage.setItem("taskList", JSON.stringify(taskList));
}

function load() {
    taskList = JSON.parse(localStorage.getItem("taskList"));
    printTask();
}
