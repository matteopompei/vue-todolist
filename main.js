let app = new Vue ({
  el: "#app",
  data: {
    todolist: [],
    inputValue: ""
  },
  methods: {
    checkDone: function(index) {
      if (this.todolist[index].done == true) {
        return "done";
      } else {
        return "";
      }
    },
    taskDone: function(index) {
      if (this.todolist[index].done == true) {
        this.todolist[index].done = false;
      } else {
        this.todolist[index].done = true;
      }
    },
    taskDelete: function(index) {
      this.todolist.splice(index, 1);
    },
    addTask: function() {
      this.todolist.push({
        text: this.inputValue,
        done: false
      });
      this.inputValue = "";
    }
  }
})