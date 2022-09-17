let user;
alert (user ?? "sasha"); // sasha (user не существует)

let user2="Teodor";
alert (user2??"sasha"); // Teodor (user2 существует)

let firstname=null
let lastname=null
let nickname="Gorynych"
let polandname="Pan"
// показывает первое значение, которое определено:

alert(firstname ?? lastname ?? nickname ?? polandname ?? "Sasha")
//Например, если  в приведённом выше коде заменить ?? на ||, то будет тот же самый результат!!!!

let height=0;
alert (height || 100); // 100
alert (height??100);

let a=null;
let b=null;
// важно использовать круглые скобки!!!
let area = (null ?? 5) * (null ?? 1000);
alert (area);

let x=(1 && 4) ?? 5;
alert(x);