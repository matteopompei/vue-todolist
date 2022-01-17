let app = new Vue ({
  el: "#app",
  data: {
    todolist: [
      {
        text: "Comprare antidepressivi",
        done: false
      },
      {
        text: "Segnalare Massaro alle autorità",
        done: true
      },
      {
        text: "Portare a spasso il cane",
        done: false
      }
    ],
  },
  methods: {
    checkDone: function(index) {
      if (this.todolist[index].done == true) {
        return "done";
      } else {
        return "";
      }
    },
    done: function(index) {
      if (this.todolist[index].done == true) {
        this.todolist[index].done = false;
      } else {
        this.todolist[index].done = true;
      }
    }
  }
})