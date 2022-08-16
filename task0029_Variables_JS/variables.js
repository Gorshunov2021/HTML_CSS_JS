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

//BOOLEAN
let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено

let isGreater = 12 > 1;

alert( isGreater ); // true (результатом сравнения будет "да")

//NULL
let age = null; // значение переменной age неизвестно.

//UNDEFINED - неопределенный!!!
let fruit;
alert(fruit);

let myage=33;
//изменим значение на undefined
myage=undefined;
alert(myage);

//typeof
alert(typeof 34);
alert(typeof (10n));
alert(typeof (true));
alert(typeof ("Gorynych"));
alert(typeof Symbol("id"));
alert(typeof Math);
alert(typeof null);
alert(typeof alert);


let name2 = "Ilya";
// выражение - число 1
alert( `hello ${1}` ); // hello 1

// выражение - строка "name"
alert( `hello ${"name"}` ); // hello name

// выражение - переменная, вставим её в строку
alert( `hello ${name2}` ); // hello Ilya
