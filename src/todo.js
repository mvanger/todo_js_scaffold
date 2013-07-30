window.onload = function() {

  var addItem = document.getElementById('add-item');
  var inputTask = document.getElementById('new-task-field');
  var taskList = document.getElementById('todo-items');
  var doneButtons = document.getElementsByClassName('completed-button');

  addItem.onclick = function(event) {
    var name = inputTask.value;
    todoApp.createTask(name);
    var list = document.createElement('li');
    var division = document.createElement('div');
    var completedButton = document.createElement('button');
    division.innerText = todoApp.unfinished[0].name;
    completedButton.className = "completed-button";
    completedButton.innerText = "Completed";
    completedButton.style.float = "right";
    taskList.appendChild(list);
    list.appendChild(division);
    inputTask.value = "";
    inputTask.focus();
    division.appendChild(completedButton);

    completedButton.onclick = function(event) {
      console.log("Completed button clicked");
      var index = todoApp.unfinished.indexOf(division.innerText);
      todoApp.finished.push(todoApp.unfinished[index].name);
      todoApp.unfinished.splice(index, index);
    };

    console.log("new task");
  };

  // doneButtons.onclick = function(event) {
  //   console.log("Completed Button clicked");
  // };

  newTaskRender = function(){

  };
};

  var todoApp = {
    unfinished: [],
    finished: [],
    createTask: function(name) {
      //create todo object, add to unfinished list
      var task = new Create();
      task.name = name;
      if (task.name.length > 0) {
        this.unfinished.unshift(task);
      }
    }
    // appendTask: function() {

    // };
  };

  var todoItem = {
    done: false
  };

  var Create = function() {};
  Create.prototype = todoItem;


