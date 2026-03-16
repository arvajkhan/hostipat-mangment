function validateLogin(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === "admin" && pass === "1234"){
alert("Login Successful");
return true;
}
else{
document.getElementById("message").innerText="Invalid Username or Password";
return false;
}

}