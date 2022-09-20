// Параметры по умолчанию
function showMessage (name, age=26) {
	alert (name + ' ' + age);
}
showMessage("Gorynych");


function showMessage2(text) {
	// ...
	if (text === undefined) { // если параметр отсутствует
	  text = 'пустое сообщение';
	}
	alert(text);
 }
 showMessage2(); // пустое сообщение

 function showCount(count) {
	// если count равен undefined или null, показать "неизвестно"
	alert(count ?? "неизвестно");
 }
 showCount(0); // 0
 showCount(null); // неизвестно
 showCount(); // неизвестно


 // RETURN
 function summ (a, b) {
	return a*b;
 }
 let result = summ (4, 5);
 alert(result); //20

 //ПРИМЕР

function takeAge (age) {
	if (age>=18) {
		return true;
	} else {
		return false;
	}
}
let age = prompt("А сколько вам лет?", 18);
if (takeAge(age)) {
	alert("Доступ разрешен!");
} else {
	alert("Нееее, доступ закрыт!");
}
