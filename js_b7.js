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
          `;
    li.addEventListener("click", function () {
        li.classList.toggle("checked");
    });
    ul.appendChild(li);
  });
}
set(event);
