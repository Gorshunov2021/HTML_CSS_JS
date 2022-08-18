let value=true;
alert(typeof value);

value=String(value);
alert(typeof value);

alert("10" / "3");// 3.3333333, строки преобразуются в числа

//Мы можем использовать функцию Number(value), чтобы явно преобразовать value к числу:

let str="123";
alert(typeof str); //string

let num=Number(str); //становится числом 123  !!!
alert(typeof num);

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // пробел это тоже true (любая непустая строка это true)