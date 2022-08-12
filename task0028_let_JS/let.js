"use strict";

let message='HELLO !';
alert(message);

let hello = 'Hello world!';
let message2;

// копируем значение 'Hello world' из переменной hello в переменную message
message2 = hello;

// теперь две переменные содержат одинаковые данные
alert(hello); // Hello world!
alert(message2); // Hello world!

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...когда нам нужно выбрать цвет
let color = COLOR_ORANGE;
alert(color); // #FF7F00


let name = 'Джон';
let admin = name;
alert(admin);

let ourPlanetName = 'Земля';
let currentUserName = 'Sasha';
alert(ourPlanetName);
alert(currentUserName);