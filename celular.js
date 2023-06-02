const moment = require("moment");

const miCelular = {
    marca: 'Samsung',
    modelo: 'A73',
    ram: '6 GB',
    almacenamiento: '128 GB',
    resolucion: '1080x2400',
    fecha: moment().format("DD MMMM YYYY")
}

exports.miCelular = miCelular;
console.log(miCelular);