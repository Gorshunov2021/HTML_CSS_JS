//Переопределение
let message="Hello";
message=23598;
alert(message);

//NUMBER
let n = 4354545;
n = 12.4345;
alert(n);

alert( 1 / 0 ); // Infinity
alert(Infinity); //Задали явно!!!

alert("not number"/2);

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "не число" / 2 - 1 ); // NaN

// символ "n" в конце означает, что это BigInt
//поддержка кроме IE
const bigInt = 1234567890123456789012345678901234567890n;
alert(bigInt);

//SRING
let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

let name = "Иван";
// Вставим переменную
alert( `Привет, ${name}!` ); // Привет, Иван!

// Вставим выражение. Такое делает только обратные ковычки!!!
alert( `результат: ${1 + 5}` ); // результат: 6

//Такое делает только обратные ковычки!!!
let gor="Gorynych !!!";
alert(`Hello, ${gor}`);