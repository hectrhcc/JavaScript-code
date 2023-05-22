//alert('Hola mundo!!!');
/*La principal diferencia entre var y let es que var tiene un alcance de función,
mientras que let tiene un alcance de bloque. Esto significa que si declaras una variable
con var dentro de una función, la variable estará disponible en cualquier parte de la función,
incluso fuera de los bloques de código que la contienen. 
En cambio, si declaras una variable con let dentro de un bloque de código, 
la variable solo estará disponible dentro de ese bloque y no podrá ser accedida desde fuera.
En resumen, se recomienda el uso de let en lugar de var en JavaScript 
porque let ofrece un alcance de bloque más seguro y predecible, lo que puede evitar errores
en el código y hacerlo más fácil de entender y mantener.
*/

let nombre= "Javascript"; //si no le agrego las comillas no aparece
let numero =101010;

let frase1="Este script es externo pero";
let frase2="esta en el body";
//document.write(nombre);

document.write("Este script es externo y esta en el head ahora comentado");

//var concat= nombre + " " + numero;
let concatenar= frase1 + " " + frase2;

//document.write(concat)

let identificador = document.getElementById("identificador");
	identificador.innerHTML = concatenar;


let id = document.getElementById("ide");
	id.innerHTML = `
		<h1> Hola soy Template String </h1>
		<h2> mi nombre es: ${nombre}</h2>
		<h3> numero:${numero}</h3>
	`;


if(numero>=10){
	id.innerHTML +='<h1> estoy en un condicional if</h1>'; //comilla simple no template string
}else{													  //+= para no sobreescribir y agregar
	id.innerHTML +='<h1> estoy en un condicional else</h1>';
}

for (let i = 10; i >= 0; i--) {
	id.innerHTML +="<h2> Esto es un for:"+i;
}

function NombreMiFuncion(nombre,numero){ //declaración de la función
	let id = document.getElementById("ide");
	id.innerHTML += `
		<h1> Hola soy Template String otra vez</h1>
		<h2> mi nombre es: ${nombre}</h2>
		<h3> mi numero es:${numero}</h3>
	`;

}

NombreMiFuncion("John Doe", 10101100100); //invocacion a la función


function MisDatos(nombre,numero){
	let datos=`
		<h1> Hola soy Template String otra vez</h1>
		<h2> mi nombre es: ${nombre}</h2>
		<h3> mi numero es:${numero}</h3>
	`;

	return datos;
}

function Imprimir(){
	let id = document.getElementById("ide");
	id.innerHTML+=MisDatos("Juan Perez", 10101)
}

Imprimir();

// Arrays

let nombres = ['alvaro','emerson','mario','jose','hector'];
alert(nombres)

document.write('<h1>Lista de nombres</h1>')
for (let i =0; i<nombres.length ; i++ ) {
	document.write(nombres[i] +	'<br/>');
}

//Otra manera
//funcion callback es una funcion que se ejecuta dentro de otra
/*forEach es un método que se utiliza en JavaScript para iterar
sobre los elementos de un arreglo y ejecutar una función para cada uno de ellos.
Este método es una forma más elegante y legible de realizar un bucle for en un arreglo.*/
document.write('<h1>Lista de nombres 2</h1>')
nombres.forEach(function(nombre){
	document.write(nombre+ '<br/>');
});

//funcion de flecha


document.write('<h1>Lista de nombres 3</h1>')
nombres.forEach((nombre)=>{
	document.write(nombre+ '<br/>');
});
