//Tipos de datos
string = "Cadena de texto";
number = 12;
boolean = true; // o false

//Casos especiales
undefined; //Variable sin valor, existe pero no tiene valor
null; //Variable sin valor. Es un valor asignado a una variable para indicar que no tiene valor
NaN; //Not a Number. Es un valor que indica que una operación matemática no es válida

//Variables
var variable = "Soy una variable"; // var es global y local (ya no se usa) 

let variableLet = "Soy una variable let"; // let es local (solo se usa en bloques) y puede cambiar su valor

const constante = "Soy una constante"; // const es local y no cambia su valor. Es contante y no se puede cambiar su valor
//constante = "Nuevo valor"; //Da error porque no se puede cambiar el valor de una constante
//El scope de las variables se refiere a su alcance, es decir, donde se pueden usar

//El hoisting es un comportamiento de JavaScript que consiste en que las declaraciones de variables y funciones se mueven a la parte superior de su contexto antes de que se ejecute el código.
//Esto significa que se pueden usar variables y funciones antes de que se declaren en el código.

//Prompt sirve para pedir un valor al usuario por teclado en una ventana emergente y lo guarda en una variable

//Operadores de asignación
let numero = 10; //Asignación simple
numero += 5; //Suma y asigna
numero -= 3; //Resta y asigna
numero *= 2; //Multiplica y asigna
numero /= 4; //Divide y asigna
numero %= 3; //Módulo (restante de la división, lo que falta para llegar) y asigna
numero **= 2; //Exponente y asigna

//Operadores aritméticos
numero1 = 10;
numero2 = 5;
suma = numero1 + numero2; //Suma
resta = numero1 - numero2; //Resta
multiplicacion = numero1 * numero2; //Multiplicación
division = numero1 / numero2; //División
modulo = numero1 % numero2; //Módulo (restante de la división, lo que falta para llegar)
exponente = numero1 ** numero2; //Exponente

//Operadores de comparación
igual = numero1 == numero2; //Igualdad (compara solo el valor)
identico = numero1 === numero2; //Identidad (compara valor y tipo de dato)
distinto = numero1 != numero2; //Distinto (compara solo el valor)
noIdentico = numero1 !== numero2; //No idéntico (compara valor y tipo de dato)
mayor = numero1 > numero2; //Mayor que
menor = numero1 < numero2; //Menor que
mayorIgual = numero1 >= numero2; //Mayor o igual que
menorIgual = numero1 <= numero2; //Menor o igual que

//Sumar numeros sin usar comillas y concatenar con texto
numero3 = 10;
numero4 = 5;
frase = "" + numero3 + numero4; //Concatena como texto

//Otra forma de concatenar con texto
frase2 = `La suma de ${numero3} + ${numero4} es ${numero3 + numero4}`; //Concatena como texto con template literals (plantillas de texto: ``)
//Las template literals permiten incluir expresiones dentro de una cadena de texto usando ${}

//Operadores lógicos
and = (numero1 > numero2) && (numero1 < 20); //AND (y) Devuelve true si ambas condiciones son veraderas
or = (numero1 > numero2) || (numero1 < 5); //OR (o) Devuelve true si una de las condiciones es verdadera
not = !(numero1 > numero2); //NOT (no) Invierte el valor de la condición
//El operador && tiene mayor precedencia que el ||, es decir, se evalúa primero el && que el ||

//Operador ternario
resultado = (numero1 > numero2) ? "Número 1 es mayor" : "Número 2 es mayor"; //Si la condición es verdadera devuelve el primer valor, si es falsa devuelve el segundo valor
//Es una forma corta de escribir un if-else

//Condicionales (ejecutar código según una condición)

if (10 > 5) {
    //Código a ejecutar si la condición es verdadera
} else if (10 < 5) {
    //Código a ejecutar si la condición es falsa y se cumple esta otra condición
}