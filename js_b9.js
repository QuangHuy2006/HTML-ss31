let todolist = [
    {
      id: 1,
      task: "Hit the gym",
      completed: false,
    },
    {
      id: 2,
      task: "Pay bills",
      completed: true,
    },
    {
      id: 3,
      task: "Meet george",
      completed: false,
    },
    {
      id: 4,
      task: "Buy eggs",
      completed: false,
    },
    {
      id: 5,
      task: "Read a book",
      completed: false,
    },
    {
      id: 6,
      task: "Organize office",
      completed: false,
    },
  ];
  const ul = document.querySelector("#myUL");
  function set(event) {
    todolist.forEach((value) => {
      const li = document.createElement("li");
      li.innerHTML = `
            ${value.task}
            <span class="close">X</span>
            `;
      li.addEventListener("click", function () {
          li.classList.toggle("checked");
      });
      li.querySelector(".close").addEventListener("click", function(event){
        event.stopPropagation();
        li.remove();
        todolist.splice(todolist.findIndex(value2 => value2.task == value.task), 1);
      })
      ul.appendChild(li);
    });
  }
  set(event);
  const input = document.querySelector("#myInput");
  function add() {
    const newlist = {
      id: todolist.legnth+1,
      task: input.value,
      completed: true,
    };
    todolist.push(newlist);
    alert(`them thanh cong`);
    ul.textContent ="";
    set(event);
  }
  
  