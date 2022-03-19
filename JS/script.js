document.getElementById("btm_registrarse").addEventListener("click", register);




var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario_register");
var container_login_register = document.querySelector(".container_login-register");
var caja_trasera_login = document.querySelector(".caja_trasera-login");
var caja_trasera_register= document.querySelector(".caja_trasera-register");

function register(){
    formulario_register.style.display = "block";
    container_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";

}
