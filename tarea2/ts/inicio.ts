let formulario: any = document.getElementById("formulario");

let nombre: any = document.getElementById("Nombre");
let apellido: any = document.getElementById("Apellidos");
let rut: any = document.getElementById("RUT");
let correo: any = document.getElementById("CorreoElectronico");
let fono: any = document.getElementById("Fono");

let lenguajes: any = document.getElementsByName("lenguaje");

let mensaje: any = document.getElementById("mensaje");

let radio: any = document.getElementsByName("años");

let rango: any = document.getElementById("rango");

let rango2: any = document.getElementById('rango2');

let descripcion: any = document.getElementById("descripcion");

let limpiarbutton: any = document.getElementById("Limpiar");

formulario.addEventListener("submit",function(evento:any){
    if(/^\d{7,8}[-][0-9kK]{1}$/.test(rut.value)==false){
        alert("RUT invalido :(");
        return;
    }

    if(fono.value.length != 9){
        alert("Telefono Invalido :(");
        return;
    }


    let aux = false;
    for(let i = 0; i < lenguajes.length; i++){
        if(lenguajes[i].checked == true){
            aux = true;
        }
    }
    if(aux == false){
        alert("Seleccione al menos un lenguaje");
        return;
    }

    formulario.style.display = "none";
    mensaje.style.display = "block";
    mensaje.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted :)";
    mensaje.style.color = "black";

    evento.preventDefault();
});

limpiarbutton.onclick = function(evento:any){
    nombre.value = defaultStatus;
    apellido.value = defaultStatus;
    rut.value = defaultStatus;
    correo.value = defaultStatus;
    fono.value = defaultStatus;

    for(let i = 0; i < lenguajes.length; i++){
        lenguajes[i].checked = defaultStatus;
    }

    for(let i = 0; i < radio.length; i++){
        radio[i].checked = defaultStatus;
    }

    rango2.value = "25";

    rango.value = "25";

    descripcion.value = defaultStatus;
}