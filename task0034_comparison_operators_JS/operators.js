alert(11>4);
alert(12==4);
alert(4!=7);

let result=34>6;
alert(result);

alert( 'Я' > 'А' ); // true
alert( 'Коты' > 'Кода' ); // true
alert( 'Сонный' > 'Сон' ); // true

alert("A">"a"); //false

alert( '25' > 2 ); // true, строка '25' становится числом 25
alert( '04' == 4 ); // true, строка '04' становится числом 4

alert( true == 1 ); // true
alert( false == 0 ); // true

let a = 0;
alert( Boolean(a) ); // false
let b = "0";
alert( Boolean(b) ); // true
alert(a == b); // true!

alert( 0 == false ); // true
alert( '' == false ); // true

alert( 0 === false ); // false, так как сравниваются разные типы

alert( null === undefined ); // false
alert( null == undefined ); // true
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

alert("TASKA");

alert(6>4); //true
alert("ананас">"яблоко"); //false
alert("2">"12"); //true!!!
alert(undefined==null); //true
alert(undefined===null); //false
alert(null=="\n0\n"); //false
alert(null=== +"\n0\n"); //false