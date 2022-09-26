//Стрелочные функции

let summ = (a, b) => a*b;
alert(summ(4, 5));


let double = n => n * 2;
// примерно тоже что и: let double = function(n) { return n * 2 }
alert( double(4) ); // 6



let sayHello = () => alert("Hello Gorynych");
sayHello();



let age = prompt("А Сколько Вам Лет?", 18);
let welcome = (age<18) ? 
() => alert("Привитули!") : 
() => alert("Здрасте!");
welcome();



let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
	let result = a + b;
	return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
 };
 
 alert( sum(1, 2) ); // 3


function ask (question, yes, no) {
	if (confirm(question)) yes()
	else no();
}

ask ("И Вы согласны???",
() => alert ("Вы согласились!"),
() => alert ("Вы отменили заказ!")
);