const { describe } = require('yargs');

// PACKEGE YARGS
const argv = require('yargs')  
// uno puede poner antes del = yargs o como en este caso, el producto que necesita propiamente // este argv es muy pareceido al de process.argv
                .option('b',{  // el primer argumento representa el alias
                    alias: 'base',  // ahora cada vez que llamo a la banderilla --base, me aparecera la base y el alias con el valor que le mando. Funciona igual si solo mando -b 5
                    type:'number', // ese es el tipo que me va a salir en el alias
                    demandOption:true, // esto me va a permitir que si o si la persona me tiene que mandar un valor en la banderilla 
                    describe:'Es la base de la tabla de multiplicar'
                } )
                .option('l', { // este listar nos va a permitir que en la consola se enliste o no nuestra tabla. Si no se pide la bandera pues solo se crea un archivo, pero si se pide la bandera -l ahi si se lista en la consola
                    alias: 'listar',
                    type:'boolean',
                    default: false, // como tiene un valor por defecto que es false, no necesita ser requerida en el demandOption
                    describe:'Muestra la tabla en consola'
                })
                .option('h',{  
                    alias: 'hasta',  
                    type:'number', 
                    demandOption:true, 
                    describe:'Es el indicador de hasta donde va la lista'
                })
                // el check me permite si nuestras condiciones han sido aplicadas correctamente 
                .check((argv, options) => { // la options  me da las explicaciones adicionales
                    //console.log('yargs',argv) // me da un objeto donde puedo hacer todas las verificaciones sobre el comando antes de jecutar el programa, y que en caso de que haya un error deternerlo 
                    if(isNaN( argv.base)) { // se esta diciendo que si la base es un NaN, le arrojara un error que dice que la base debe ser un numero 
                        throw 'la base tiene que ser un número'
                    }
                    return true //si no hay ningun error tenemos que devolver el true (que es lo acertado, es decir en este caso el numero)
                
                })
                    .argv; //.argv es lo ultimo que va. Todo lo que se le puede introducir a YARGS es despues del require

// Necesitamos exportarlo para que funcione desde app.js
module.exports = argv; //ojo aca no se esta exportando un objeto {} propiamente hablando. Pero internamente se sbe que es un objeto 