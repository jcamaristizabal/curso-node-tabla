
//LO QUE ESTA NEGRILLA FUE CORTADO PARA PONER EN EL ARCHIVO multiplicar.js

//const fs = require('fs'); // aca estamos requiriendo fileSystem
// en este fs ya se tiene todo lo que se necesita para guardar en ese archivo

const { stripColors } = require('colors');
const fs = require('fs');
const colors = require('colors');

//Nos pidio convertir la aplicacion que teniamos en multiplicar en promesa, yo utilice el async
// volviendola async hago una promesa de manera mas sencilla, Se hace de una manera centralizada, nos permitira reutilizarlo, y tambien tenemos el feedback de si algo sale bien o algo sale mal 
//// me traigo la siguiente informacion de app.js

 const crearArchivoTabla = async (base = 5, hasta =10, listar = false) => { //dentro de estos parentesis es que creo las banderas 
    try{
     
    //let salida, consola  = ''; //Javascript te permite inicializar varias variables de la misma maneram // este consola permite que no salga mal el archivo producto de los colores 
    let salida = '';
    let consola = '';

    for( let i = 1; i <= hasta; i++){
        salida += `${base} x ${i} = ${base*i}\n`; // esto lo que va a la salida, y por ende al archivo. De ahi que no necesitamos ponerle colores 
        consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`; //Esto es especificamente para lo que salga en la consola // aca un ejemplo de como se puede utilizar colors, dentro del template en una parte especifica
    } 
    if (listar){ // aca para aparecer que si listar estar en true debe imprimir esto
        console.log('==================='.green);
        console.log(`   tabla del ${colors.yellow(base)}`.green); // ejemplo de como se utilizaria colors con template strings
        console.log('==================='.green);
        console.log(consola) 
    }
   
      
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); //Esto pemite que los archivos se creen denotro de la ruta definida en la carpeta salida 
    // console.log(`archivo tabla-${base}. txt creada`);
    return `archivo tabla-${base}. txt creada`; //se pone return porque estamos utilizando un async 
   } catch (err) {
       throw err;
   }
}

module.exports = {
    crearArchivoTabla // solo se pone esto y no crearArchivoTabla:crearArchivoTabla, porque seria redundante 
}

// ESTO FUE LA HISTORIA  EN COMO SE CREO LA TABLA DE MULTIPLICAR 
//crearArchivoTabla (base)
  //  .then( nombreArchivo => console.log(nombreArchivo))
  //  .catch( err => console.log(err));

//console.log('===================');
//console.log(`   tabla del ${base}     `);
// console.log('===================');


// se quiere grabar este for para guaradar como archivo de texto, se hace lo siguiente 

//let salida =''; // se inincializa con un string vacio 

// este es el bucle for
//for( let i = 1; i <=10; i++){
//console.log(`${base} x ${i} = ${base*i}`);
    //salida += `${base} x ${i} = ${base*i}\n`; //se quita el console.log por salida y lo vamos a concatenar con el +// concatenar se puede hacer asi o poner salida = salida + los backticks
    // el \n es para que haya un salto de linea, y no se multiple el resultado que vaya saliendo por el i
//}
// para guardarlo necesitamos REQUERIR un paquete. La razon del porque no esta, es para hcer a node mas liviano, sin todos los paquetes

//console.log(salida) // esto es para que mi imprima tambien en la consola

//LA FUNCION fs.writeFile (que parte del paquete File System) NOS AYUDA A LA CREACION DE ARCHIVOS 
// fs.writeFile(`tabla-${base}.txt`, salida, (err) => { // el callback se va a ejecutar cuando todo esto termine 
   // if (err) throw err; // si hay un error, lanza el error. Como por ejemplo que no se tenga acceso para guardar en la carpeta que se quiere.
   // console.log('archivo tabla-5. txt guardada'); // si funciona, quedara guardada y sacara este mensaje 
// })// se le debe poner el path. Si no lo conocemos, va a tomar como base la carpeta donde se esta ejecutando este codigo es decir app.js

// PARA HACER ESTO MAS ORGANIZADO VAMOS A PONER EL fs.writeFileSync

//fs.writeFileSync(`tabla-${base}.txt`, salida); // como se ve aca no se necesita el error // Si sucede un error, necesitamos atraparlo con un try and catch 
//console.log('archivo tabla-5. txt creada');