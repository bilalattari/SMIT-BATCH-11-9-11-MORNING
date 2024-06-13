// console.log("localStorage=>", localStorage);

/// set item
// 2 parameters , 1st men key jaati or dusre mein value
// value hamesha string mein hogi
// localStorage.setItem('email' , 'bilal@gmail.com')
// localStorage.setItem('password' , '123456')

//get item
// var email = localStorage.getItem('email')
// console.log(email)

// remove item
// localStorage.removeItem('password')

// update an item
// localStorage.setItem('email' , '')

var login_container = document.getElementById("login_container");
var home_container = document.getElementById("home_container");
var email = document.getElementById("email");
var user_email = document.getElementById("user_email");
var password = document.getElementById("password");
var todo_input = document.getElementById("todo_input");

function checkIsUserLogin() {
  var email = localStorage.getItem("email");
  if (email) {
    login_container.style.display = "none";
    home_container.style.display = "block";
    user_email.innerText = email;
    showTodos();
  } else {
    login_container.style.display = "block";
    home_container.style.display = "none";
  }
}

checkIsUserLogin();

function loginUser() {
  if (!email.value || !password.value) return alert("Please add info");
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
  checkIsUserLogin();

  email.value = "";
  password.value = "";
}
function logout() {
  localStorage.removeItem("email");
  checkIsUserLogin();
}

function addTodo() {
  if (!todo_input.value?.trim()) return alert("Add todo Value");

  var email = localStorage.getItem("email");

  var obj = {
    email: email,
    todo: todo_input.value.trim(),
  };
  var todos = localStorage.getItem("todos");
  console.log("Local Storage se get kye=>", todos);
  if (todos) {
    todos = JSON.parse(todos);
    todos.push(obj);
    localStorage.setItem("todos", JSON.stringify(todos));
  } else {
    todos = [obj];
    console.log("Todos null ho to naya banado=>", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  showTodos();
}

function showTodos() {
  var todos = localStorage.getItem("todos");
  var list = document.getElementById("list");
  var email = localStorage.getItem("email");
  if (todos) {
    todos = JSON.parse(todos);
    list.innerHTML = "";
    todos.forEach(function (data, index) {
      if (data.email === email) {
        var li = `<li>${data.todo} </li>`;
        list.innerHTML += li;
      }
    });
  }
}
showTodos();

var arrOfObjects = [
  {
    cowColor: "red",
    kilo: 500,
    price: 100000,
  },
  {
    cowColor: "brown",
    kilo: 400,
    price: 90000,
  },
  {
    cowColor: "white",
    kilo: 850,
    price: 120000,
  },
  {
    cowColor: "black",
    kilo: 1000,
    price: 150000,
  },
];

var lakhSeKam = arrOfObjects.filter(function (data, ind) {
  return data.price < 100000;
});

console.log("lakhSeKam=>", lakhSeKam);

// var array = ["bilal", "ahmed", "hassan"];

// function saveToLocalStorage() {
//   localStorage.setItem("array", JSON.stringify(array));
// }

// function removeLastItemOfArray() {
//   var arr = localStorage.getItem("array");
//   arr = JSON.parse(arr);
//   arr.pop()
//   console.log("remove function=>", arr);
//   localStorage.setItem("array", JSON.stringify(arr));
// }

// // saveToLocalStorage();
// removeLastItemOfArray()
