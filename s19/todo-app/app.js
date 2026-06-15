var taskList = [];

function addTask(e) {
    var inputValue = e.target.value.trim();
    if (e.key === "Enter" && inputValue) {
        taskList[taskList.length] = inputValue;
        console.log(taskList);
    }
}
