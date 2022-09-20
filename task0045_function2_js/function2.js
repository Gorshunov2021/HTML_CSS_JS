let userName = "Gorynych";
function showMessage () {
	userName="Pete"; // let userName="Pete";   !!!!! Видим только локальную переменную!!!

	let message = "Hello, " + userName;
	alert(message);
}
alert (userName);
showMessage();
alert(userName); //Pete

//Мы можем передать внутрь функции любую информацию, используя параметры (также называемые аргументами функции).
//В нижеприведённом примере функции передаются два параметра: from и text.
function nameAndLastName (name, lastname) {
	alert (name + ' ' + lastname);
}
nameAndLastName ("Ann", "Protasova");
nameAndLastName ("Sasha", "Pokimonow");


function showMessage2(from, text) {

	from = '*' + from + '*'; // немного украсим "from"
 
	alert( from + ': ' + text );
 }
 
 let from = "Саня";
 
 showMessage2(from, "Привет"); // *Саня*: Привет
 
 // значение "from" осталось прежним, функция изменила значение локальной переменной
 alert( from ); // Саня