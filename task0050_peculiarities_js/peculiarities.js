'use strict';
// Инструкции разделяются точкой с запятой!
alert("Hello JS");
alert("I love JS!");

//Как правило, перевод строки также интерпретируется как разделитель, так тоже будет работать: но лучше ПОСТАВИТЬ!!!
alert("Hello Gorynych")
alert("Gorynych loves JS!")

let username = prompt("Введите имя", "Alisa");
alert("Посетитель: " + username);

let tea = confirm("Do you some tea?");
alert("tea: " + tea);

alert( '1' + 2 ); // '12', строка
alert( 1 + '2' ); // '12', строка

let a = prompt("Введите число");
let b = prompt("Введите второе число");
let summ = function(a, b) {
	let result = a * b;
	alert(a + " * " + b + " = " + result);
}
summ(a, b);
