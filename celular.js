//TODO Crea un nuevo archivo llamado celular.js, que contenga y exporte un objeto. El objeto
//TODO debe tener como contenido pares llave - valor de, por lo menos, cinco características de
//TODO tu celular, más un sexto ítem que contenga una fecha generada por moment. 

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
