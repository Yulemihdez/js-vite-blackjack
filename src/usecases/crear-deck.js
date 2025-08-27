
import _ from 'underscore';

//export const miNombre= 'Yulemi'; //esto es una exportación individual

/** Todo esto sirve para espeficicar con que tipos de dtos estamos trabajndo
 * Esta función crea un nuevo deck
 * el "*" significa que que es any 
 * @param {Array<String>} tiposDeCarta  Ejemplo: ['C','D','H','S']  
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<string>} retorna un nuevo deck de cartas 
 */


export const crearDeck = (tiposDeCarta, tiposEspeciales) => { //la palabra reservada export nos apoya a exportar una funcion 

    if (!tiposDeCarta || tiposDeCarta.length ===0)
    throw new Error ('TiposDeCarta es obligatorio como un arreglo de string'); //estos me sirven como validaciones 
   
     if (!tiposEspeciales|| tiposEspeciales.length ===0)
    throw new Error ('TiposEspeciales es obligatorio como un arreglo de string'); //estos me sirven como validacione

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
} // con scoope se refiere a lo que esta dentro de las llaves 

//export default crearDeck; //se usa el default cuando quermos usr la expotacion por defecto 