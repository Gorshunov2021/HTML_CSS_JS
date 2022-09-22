let couter=5;
couter++;
alert(couter);

let couter2=11;
couter2--;
alert(couter2);

let counter3 = 1;
let a = ++counter3; // (*)
alert(a); // 2

let counter4 = 1;
let b = counter4++; // (*) меняем ++counter на counter++

alert(b); // 1

let counter5 = 7;
counter5++;
++counter5;
alert( counter5 ); // 2, обе строки сделали одно и то же

let counter6 = 1;
alert( 2 * ++counter6 ); // 4

let counter7 = 1;
alert( 2 * counter7++ ); // 2, потому что counter++ возвращает "старое" значение

//Лучше использовать стиль «одна строка – одно действие»:
let counter8 = 100;
alert( 2 * counter8 );
counter8++;

let a5 = "1"; // prompt("Первое число?", 1);
let b5 = "2"; // prompt("Второе число?", 2);
alert(a5 + b5); // 12

let a7 = prompt("Первое число?", 1);
let b7 = prompt("Второе число?", 2);

alert(+a7 + +b7); // 3

