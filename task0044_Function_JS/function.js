//Зато У функции есть доступ к внешним переменным, например:

let userName = 'Gorynych';
function myMessage () {
	let message2 = `Hello, ${userName}`;
	alert(message2);
}
myMessage();

function showMessage () {
	alert("Hello everybody!!!");
}
showMessage();
showMessage();
// Функции служат для избавления дублирования кода!!!

//локальные переменные
function localshow () {
	let message = "Приветули! Я JS!";
	alert(message);
}
localshow();
alert(message); // <-- будет ошибка, т.к. переменная видна только внутри функции


let userName2 = 'Вася';
function showMessage2() {
  userName2 = "Петя"; // (1) изменяем значение внешней переменной
  let message = 'Привет, ' + userName2;
  alert(message);
}
alert( userName2 ); // Вася перед вызовом функции
showMessage2();
alert( userName2 ); // Петя, значение внешней переменной было изменено функцией






