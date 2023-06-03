//TODO Comienza un nuevo proyecto con npm init, instalando los paquetes moment y lodash
//TODO Revisa la documentación para saber cómo requerirlos en tu programa. Asegúrate de
//TODO utilizar la palabra clave constant.
const _ = require("lodash");

//TODO Importa el objeto en tu archivo index.js, utilizando la desestructuración de objetos.
const miCelular = require("./celular");

//TODO Crea una función que muestre por pantalla la descripción de tu celular, utilizando
//TODO template literals, y las variables recogidas del objeto importado desde el archivo
//TODO celular.js
const celular = ({ marca, modelo, ram, almacenamiento, resolucion, fecha }) => {
	const descripcion = `El celular ${marca} modelo ${modelo} posee ${ram} de ram y ${almacenamiento} de almacenamiento, 
    junto con una resolucion de ${resolucion}. Ultima actualizacion ${fecha}.`;
    console.log(descripcion);
}
celular(miCelular.miCelular);

//TODO Crea una copia del objeto en celular.js, y actualiza dos de sus propiedades utilizando el
//TODO spread operator. 
const celularActualizado = {...miCelular.miCelular, ram: '8 GB', almacenamiento: '256 GB'};

//TODO Escribe un ejemplo de función de callback (puedes utilizar las revisadas en el primer y
//TODO segundo CUE), pero esta vez utilizando la sintaxis de función de flecha.
const funcion = ((celularActualizado, callback) => {
    console.log(celularActualizado);
    callback();
})
funcion(celularActualizado, callback);

function callback() {
    console.log("callback");
}

