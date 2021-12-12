// function signup(e){
//   event.preventDefault();
//
//   var email=document.getElementById("email").value;
//   var name=document.getElementById("name").value;
//   var pass=document.getElementById("password").value;
// }
//
// var user ={
// email: email,
// name: name,
// password: pass,
// };
//
// var json = JSON.stringify(user);
// localStorage.setItem(username, json);
// console.log("user added");
//
// }
//
// function loginFunction(e){
//   event.preventDefault();
//
//   var email=document.getElementById("email").value;
//   var pass=document.getElementById("password").value;
//   var result = document.getElementbyId("result");
//
//   var user = localStorage.getItem(email);
//   var data = JSON.parse(user);
//   console.log(data);
// }

// Name and Password from the register-form

var name = document.getElementById('name');
var pw = document.getElementById('pw');



// storing input from register-form
// function store() {
//     localStorage.setItem('email', name.value);
//     localStorage.setItem('password', pw.value);
//
//     var user ={
//     email: name,
//     password: pw,
//     };
//
//     console.log(user)
// }



//checking
// function check(){
//     var storedName = localStorage.getItem('name');
//     var storedPw = localStorage.getItem('pw');
//
//     var userName = document.getElementById('userName');
//     var userPw = document.getElementById('userPw');
//     var userRemember = document.getElementById("rememberMe");
//
//     if(userName.value == storedName && userPw.value == storedPw){
//         alert('You are logged in.');
//     }else{
//         alert('Error on login');
//     }
// }
