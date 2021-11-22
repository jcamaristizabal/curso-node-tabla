
//const { argv } = require('process');
//const { demandOption } = require('yargs');
const {crearArchivoTabla} = require('./helpers/multiplicar'); 
//const colors = require('colors'); // Esto es para que podamos jugar con los colores que ya lo instalamos y lo sabemos porque estan en las dependencias // parece que no estuviese activa pero si lo esta 
const argv = require('./config/yargs');

require('colors'); // este es el mismo require que esta arriba solo que es mas sencillo y se hace cuando se ha instalado y esta en las dependencias 

console.clear();

//console.log(process.argv); 
//console.log(argv); // A diferencia del process.argv que aparece el --base=5 en un string dentro de la informacion, el argv de YARGS me vota ese la base como numero y lo reconoce como tal 
// por ende con YARGS no necesito hacer un split ni todas las maromas que aparecen atras 
// para adquirir la base simplemente necesito esto
//console.log('base:yargs', argv.base); // Yargs me permite no solo utilizar el --base=5 sino tambien sin el igual, es decir --base 5, y me da el mismo resultado. Pero si estuviera con el process.argv me estaria dando dos argumentos lo que hace mas complicado su split y su destructuracion 
                                      //igualmente le puedo enviar otra bandera como --listar, lo cual me lo manda como true porque yo no le puso ningun valor. Igualmente funciono si solo le pongo la ele (--l), me dara el mismo valor 
                                     // Tambien una opcion importante es --help. Me permite ver la informacion de todos los comandos que mi aplicacion que en este caso de consola app.js puede hacer 

crearArchivoTabla (argv.base, argv.h, argv.l) //puede ser argv.base o argv.b, o argv.l o argv.listar
  .then( nombreArchivo => console.log(nombreArchivo.rainbow))
   .catch( err => console.log(err));

//HISTORIA DE COMO CREAMOS UN CODIGO QUE NOS PERMITA DESESTRUCTURAR SIN LA UTILIZACION DE YARGS

// const {crearArchivoTabla} = require('./helpers/multiplicar'); //aca estoy importando de multiplicar.js con un desestructurador que es lo que esta en {}

//console.clear(); // Esto me permite limpiar automaticamente la consola 

// En los siguientes ejercicos se intenta destructurar para que desde la consola (terminal) podamos enviar la base y el programa la ejecute
//console.log(process.argv); // ese argv significa de los argumentos que vienen la de la consola 
// si le damos en la consola flecha hacia arriba y enter, vamos a ver que el primer path es donde esta ubicada la aplicacion. Y el segundo es donde se encuentra ubicada la aplicacion que yo acabo de ejecutar 
// al darle despues node app.js --base=5 y enter, aparece ese base como otro argumento dentro de la consola donde aparece la base=5

// como destructuramos para que nos aparezca aca desde el terminal? de la siguiente manera, vamos a desutructurar 
// me interesa el tercer argumento que sale en la consolo, por ende voy utilizar arreglo para destructurarlo y lo sacamos de process.argv que es donde estan los argumentos
//const [ , ,arg3='base=5'] = process.argv;
// luego lo imprimimos con console.log, y me debe aparece en consola destructurado. Anuqe la ventaja de la destructuracion es que podemos mandarle valores por dejectos tal y como aparece en la linea anterior 
// ahora me interesa destructurar mas y lo que me interesa es lo que hay despues del igual
//const [ ,base=5 ]= arg3.split('=');// aca lo que estoy diciendo es que tengo dos argumentos base y 5. El primer argumento no me interesa, solo el 5, que se llamara base. Con esto vamos y comentamos la linea donde prograbamos aqui la base 
// En vez e imprimir el arg3, imprimimos la nueva base 
//console.log(arg3);
//console.log(base); // para que no salga undefined se le pone a lado de la base un numero determinado
//const base =9;
//AL FINAL EL PROFESOR CONCLUYE QYE ESTO ES MAS DE UN MODO DIDACTICO, PORQUE LO QUE SE ACABA DE HACER ES BASATNTE PROBLEMATICO, PORQUE AHI EN PRINCIPIO NODE ESTA TOMANDO POSICIONES SIN IMPORTAR QUE PALABRA LE ESTEMOS INCLUYENDO Y POR ENDE PUEDE ENVIAR MENSAJES EQUIVOCADOS
// Por lo anterior ella dice que hay algo llamado YARGS que son paquetes que nos evitaran todo estos problemas