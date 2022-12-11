//Function Expression

let message = function() {
	alert("Hello");
};
message();


function sayHi () {
	alert("Hello Gorynych");
}
let func=sayHi; //Обратите внимание (ещё раз): нет круглых скобок после sayHi.

func();
sayHi();

//Аргументы Ok и Cancel функции ask называются функциями-колбэками или просто колбэками.
function ask (Question, Yes, No) {
	if (confirm(Question)) Yes()
	else No();
}

function OK() {
	alert("Вы Согласны.");
}

function CANCEL() {
	alert("Вы отменили выполнение.");
}

ask("Вы согласны это выполнить?", OK, CANCEL);

//Мы можем переписать этот пример значительно короче, используя Function Expression:
function ask2 (Question, Yes, No) {
	if (confirm(Question)) Yes()
	else No();
}
// анонимные функции
ask2 ("Вы согласны это выполнить?", function() {alert("Вы Согласны.")}, function(){alert("Вы отменили выполнение.");}
);


let age = 15; // возьмём для примера 16

if (age < 18) {
  welcome();               // \   (выполнится)
                           //  |
  function welcome() {     //  |
    alert("Привет!");      //  |  Function Declaration доступно
  }                        //  |  во всём блоке кода, в котором объявлено
                           //  |
  welcome();               // /   (выполнится)

} else {

  function welcome() {
    alert("Здравствуйте!");
  }
}

// здесь фигурная скобка закрывается,
// поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.

welcome(); // Ошибка: welcome is not defined



// через Тернарный оператор
let age3 = prompt("Сколько Вам лет?", 18);

let welcome2 = (age3 < 18) ?
  function() { alert("Привет!"); } :
  function() { alert("Здравствуйте!"); };

welcome2(); // теперь всё в порядке




