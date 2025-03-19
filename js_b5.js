const employees = [
  {
    id: 1,
    name: "Example 1",
    age: 18,
    address: "District",
  },
  {
    id: 2,
    name: "Example 1",
    age: 18,
    address: "District",
  },
];
function render() {
  const tbody = document.querySelector("#table tbody");
  tbody.innerHTML = "";
  employees.forEach(value => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${value.id}</td>
        <td>${value.name}</td>
        <td>${value.age}</td>
        <td>${value.address}</td>
        `;
    tbody.appendChild(row);
  });
}
render();
