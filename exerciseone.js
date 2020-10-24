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
//
var mycarrer, firstword, secondword, positionblank, result;
mycarrer = 'ingenieria mecanica';
positionblank = mycarrer.indexOf(" ");
firstword = mycarrer.substring(mycarrer.indexOf("i"), mycarrer.indexOf("n")).toUpperCase() + mycarrer.substring(mycarrer.indexOf("n"), mycarrer.indexOf(" ")).toLowerCase();
secondword = mycarrer.substring(mycarrer.indexOf("m", positionblank), mycarrer.indexOf("e", positionblank)).toUpperCase() + mycarrer.substring(mycarrer.indexOf("e", positionblank)).toLowerCase();
result = firstword + " " + secondword;
console.log(firstword);
console.log(secondword);
console.log(result);




