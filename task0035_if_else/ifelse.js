'use strict';
let year=prompt("Угадайте, сколько мне лет?" , " ");
if(year==33) {
	alert("Вы правы!");
} else {
	alert("А вот и не правильно!");
}

let Kevin=prompt("Сколько лет Кевину?", "");
if(Kevin<4) {
	alert("Нее, он постарше!");
} else if(Kevin>4) {
	alert("Нее, многовато!");
} else {
	alert("Точно, Вы правы!");
}

//тернарный оператор!!! ООООчень круто! для двух условий
let age=prompt("Сколько вам лет?");
let accessAllowed=(age>18) ? ("Да, это правда") : ("Нет, это ложь");
alert(accessAllowed);

let AGE=prompt("Какой Ваш возраст?", "18");
let message=(AGE<4) ? "Привет малыш!" : 
				(AGE<17) ? "Привет студент!" :
				(AGE<30) ? "Ты вечный студент!" : 
				(AGE<55) ? "Наконец-то ты уже не учишься!!!" : "Странный у тебя возраст!!!";
			alert(message);

//данный код не читабельный, но правильный			
let company = prompt('Какая компания создала JavaScript?', '');
(company == 'Netscape') ?
alert('Верно!') : alert('Неправильно.');			

//А это более читабельный!!! //Лучше писать код именно так!
let company2 = prompt('Какая компания создала JavaScript?', '');

if (company2 == 'Netscape') {
  alert('Верно!');
} else {
  alert('Неправильно.');
}

let value = prompt('Какое "официальное" название JavaScript?', '');

if (value == 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете? ECMAScript!');
}

//Простая задача!
let value2 = prompt('Введите число', 0);
if (value2 > 0) {
  alert( 1 );
} else if (value2 < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

let res=(a+b<4) ? "Мало" : "Много";

let message5 = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';
