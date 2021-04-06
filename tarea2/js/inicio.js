"use strict";
var formulario = document.getElementById("formulario");
var nombre = document.getElementById("Nombre");
var apellido = document.getElementById("Apellidos");
var rut = document.getElementById("RUT");
var correo = document.getElementById("CorreoElectronico");
var fono = document.getElementById("Fono");
var lenguajes = document.getElementsByName("lenguaje");
var mensaje = document.getElementById("mensaje");
var radio = document.getElementsByName("años");
var rango = document.getElementById("rango");
var rango2 = document.getElementById('rango2');
var descripcion = document.getElementById("descripcion");
var limpiarbutton = document.getElementById("Limpiar");
formulario.addEventListener("submit", function (evento) {
    if (/^\d{7,8}[-][0-9kK]{1}$/.test(rut.value) == false) {
        alert("RUT invalido :(");
        return;
    }
    if (fono.value.length != 9) {
        alert("Telefono Invalido :(");
        return;
    }
    var aux = false;
    for (var i = 0; i < lenguajes.length; i++) {
        if (lenguajes[i].checked == true) {
            aux = true;
        }
    }
    if (aux == false) {
        alert("Seleccione al menos un lenguaje");
        return;
    }
    formulario.style.display = "none";
    mensaje.style.display = "block";
    mensaje.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted :)";
    mensaje.style.color = "black";
    evento.preventDefault();
});
limpiarbutton.onclick = function (evento) {
    nombre.value = defaultStatus;
    apellido.value = defaultStatus;
    rut.value = defaultStatus;
    correo.value = defaultStatus;
    fono.value = defaultStatus;
    for (var i = 0; i < lenguajes.length; i++) {
        lenguajes[i].checked = defaultStatus;
    }
    for (var i = 0; i < radio.length; i++) {
        radio[i].checked = defaultStatus;
    }
    rango2.value = "25";
    rango.value = "25";
    descripcion.value = defaultStatus;
};
