/*
Exercise 1:
Variables y Operadores:
    1) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
    2) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
    3) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).
*/

var numberone, numbertwo, total, name, surname, fullname, day, month, number ;
numberone = 5;
numbertwo = 12;
total = numberone + numbertwo;
name = 'Federico';
surname = 'Orlandi';
fullname = name + ' ' + surname;
day = 'Monday';
month = 'March';
number = day.length + month.length;

console.log(total);
console.log(fullname);
console.log(number);

/*
Exercise 2:
Strings
    1) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
    2) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
    3) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
    4) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
    5) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
    6) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

//numberone

var city;
city = 'Buenos Aires';
city.toUpperCase();

console.log(city.toUpperCase());

//numbertwo

var team, shorter;
team = 'Independiente';
shorter = team.substring(0,5);

console.log(shorter);

//numberthree

var country, letters;
country = 'Azerbaijan';
letters = country.substring(7);

console.log(letters);

//numberfour

var carrer, capitalletter, otherletter, lastcareer;
carrer = 'psicopedagogia';
capitalletter = carrer.substring(0,1).toUpperCase();
otherletter=carrer.substring(1).toLowerCase();
lastcareer = capitalletter + otherletter;

console.log(lastcareer);

//numberfive

var capitalcity, spaceblank;
capitalcity = 'Tafi del Valle';
spaceblank = capitalcity.indexOf(" ");

console.log(spaceblank);

//numbersix 
var mycarrer, firstword, secondword, positionblank, result;
mycarrer = 'ingenieria mecanica';
positionblank = mycarrer.indexOf(" ");
firstword = mycarrer.substring(mycarrer.indexOf("i"), mycarrer.indexOf("n")).toUpperCase() + mycarrer.substring(mycarrer.indexOf("n"), mycarrer.indexOf(" ")).toLowerCase();
secondword = mycarrer.substring(mycarrer.indexOf("m", positionblank), mycarrer.indexOf("e", positionblank)).toUpperCase() + mycarrer.substring(mycarrer.indexOf("e", positionblank)).toLowerCase();
result = firstword + " " + secondword;
console.log(firstword);
console.log(secondword);
console.log(result);

/*
Exercise 3:
Arrays
    1) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
    2) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
    3) Agregar un elemento al principio y al final del array (utilizar unshift y push).
    4) Quitar un elemento del principio y del final del array (utilizar shift y pop).
    5) Invertir el orden del array (utilizar reverse)
    6) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
    7) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/

//numberone
var myArray, myOrderArray, myReverseArray, myJoinArray, myfirstarray, copyArray;
myArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(myArray[4], myArray[10]);
myfirstarray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//numbertwo
myOrderArray = myArray.sort();
console.log(myOrderArray);

//numberthree
myArray.push('Ultimo Mes');
myArray.unshift('Primer Mes');
console.log(myArray);

//numberfour
myArray.pop();
myArray.shift();
console.log(myArray);

//numberfive
myReverseArray = myArray.reverse();
myJoinArray = myArray.join("-");
console.log(myJoinArray);

//numbersix
copyArray = myfirstarray.slice(4,11);
console.log(copyArray);

/*
If Else
    Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”
    Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
        “Bebe” si la edad es menor a 2 años
        “Nino” si la edad es entre 2 y 12 años
        “Adolecente” si la edad es entre 13 y 19 años
        “Joven” si la edad está entre 20 y 30 años
        “Adulto” entre 31 y 60 años
        “Adulto mayor” entre 61 y 75 años
        “Anciano” si es mayor a 75 años
*/

//number one

if (Math.random() >= 0.5){
    alert('Greater than 0,5');
} else{
    alert('Lower than 0,5');
}

//number two
var Age;
Age = 61;

if (Age < 2){
    alert('Bebe');
} else if (Age >= 2 && Age <= 12){
    alert('Niño');
} else if (Age >= 13 && Age <= 19){
    alert('Adolescente');
} else if (Age >= 20 && Age <= 30){
    alert('Joven');
} else if (Age >= 31 && Age <=60){
    alert('Adulto');
} else if (Age >= 61 && Age <= 75){
    alert('Adulto Mayor'); 
} else {
    alert('Anciano');
}

/*
For
    Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
    Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
    Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
    Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).
*/
//number one
var i, mySecondArray;
mySecondArray = ['chorizo', 'morcilla', 'vacio', 'matambre', 'costilla'];
for (var i=0; i <=4; i++){
    alert(mySecondArray[i]);
}
//number two
for (var i=0; i <=4; i++){
    alert(mySecondArray[i].substring(0,1).toUpperCase() + mySecondArray[i].substring(1).toLowerCase());
}
//number three
var sentence;
sentence = " ";
for (var i=0; i <=4; i++){
    sentence += mySecondArray[i] + " ";
}
alert(sentence);
// number four
var myThirdArray = [];
for (var i=0; i <=9; i++){
    myThirdArray[i] = i;
}
console.log(myThirdArray);

/*
Funciones
    Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
    A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
    Crear una función validate integer que reciba un número como parámetro y verdadero si es un número entero.
    A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
    Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
*/
