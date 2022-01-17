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
    ]
  }
})