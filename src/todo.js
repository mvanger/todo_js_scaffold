window.onload = function() {

  var addItem = document.getElementById('add-item');
  var inputTask = document.getElementById('new-task-field');
  var taskList = document.getElementById('todo-items');

  addItem.onclick = function(event){
    var name = inputTask.value;
    todoApp.createTask(name);
    var list = document.createElement('li');
    var division = document.createElement('div');
    division.innerText = todoApp.unfinished[0].name;
    taskList.appendChild(list);
    list.appendChild(division);
    inputTask.value = "";
    inputTask.focus();

    console.log("new task");
  };

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


