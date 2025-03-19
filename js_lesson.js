//lấy theo id
const heading1 = document.getElementById("heading-1");
console.log(`Heading 1: ${heading1}`);
//lấy theo class thông qua getElementsByClassName
const cources = document.getElementsByClassName("cource");
console.log(`cources: ${cources}`);
//
const listProductElement = document.querySelector("#list-product");
console.log("listProductElement", listProductElement);

const productItem = document.querySelectorAll(".product");
console.log("productItem: ", productItem);
//Lấy ra input theo name
const email = document.querySelector("input[name='email']");
console.log("email: ", email);

const product = document.querySelectorAll("#list-product li");
console.log("product: ", product);

const username = document.querySelector("#demo");
console.log("innertext" + username.innerText);
console.log("textcontent" + username.textContent);
console.log("innerhtml" + username.innerHTML);

const age = document.querySelector("#age");
age.textContent = "31 tuoi";

//classlist
const form = document.querySelector("#form");
//Them class vao 1 phan tu
form.classList.add("form-add");
//Xoa class khoi 1 phan tu
form.classList.remove("form");
//Kiem tra class da ton tai trong phan tu chua
console.log(form.classList.contains("hidden"));
//THem/xoa class neu no da ton tai
form.classList.toggle("show");
