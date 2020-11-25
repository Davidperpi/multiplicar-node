const fs = require('fs'); // nativos de node
// const fs = require('express'); no nativos de node
// const fs = require('./fs'); de nuestro directorios
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            // console.log(`${ base } * ${ i } = ${ i * base }`);
            data += `${ base } * ${ i } = ${ i * base } \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

            if (err) reject(err)
            else
                resolve(`tabla-${ base }.txt`);
        });

    });
}

let listarTabla = (base, limite = 10) => {

    console.log("=========");
    console.log(`tabla del ${ base }`.green);
    console.log("=========");

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ i * base } \n`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}