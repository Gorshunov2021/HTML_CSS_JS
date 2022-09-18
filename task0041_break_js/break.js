let sum=0;
while (true) {  //while(true) - это бесконечный цикл
	let value = +prompt("Введите число", '');
	if (!value) break;
	sum +=value;
}
alert ('Сумма всех чисел: ' + sum);

for (let i=0; i<11; i++) {
	if (i % 2 == 0 ) continue;
	alert (i);
}

//Это МЕТКИ!!! outer Позволят прыгать куда угодно!!! Но только внутри кода!
outer:
for (let i = 0; i < 3; i++) {

	for (let j = 0; j < 3; j++) {
 
	  let input = prompt(`Значение на координатах (${i},${j})`, '');
 
	  if (!input) break outer;
	  // Что если мы захотим перейти к Готово (ниже) прямо отсюда?
	}
 }
 
 alert('Готово!');


let num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}