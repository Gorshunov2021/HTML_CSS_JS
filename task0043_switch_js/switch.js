let a=3+5;

switch(a) {
	case 2:
	alert("Маловато!!!");
	break;
		case 6:
		alert("нуууу, почти!!!");
		break;
			case 8:
			alert("Точно!");
			break;
				case 11:
				alert("Перебор!");
				break;
				default:
					alert("Нет таких значений.");
}

//Вариант группировки

let x=6-2;

switch (x) {
	case 10:
		alert("неправильно");
		break;

		case 4:
			//break отсутствует, поэтому будет выводить два alert!!!
		case 6:
			alert("Bingo!");
			alert("Да вы просто математик!")
			break;

			default:
				alert("Странноватый результат!");
}

//TASK:
let browser="Safari";
if (browser=="Edge") {
	alert( "You've got the Edge!" )

} else if  (browser=="Crome" || browser=="Firefox" || browser=="Safari" || browser=="Opera") {
	alert( 'Okay we support these browsers too' )
} else {
	alert( 'We hope that this page looks ok!' );
}

//TASK2:

const number= +prompt("Введите число от 0 до 3", '');
switch (number) {
	case 0:
		alert("Вы ввели число 0");
		break;

		case 1:
			alert("Вы ввели число 1");
			break;

			case 2:
			case 3:
				alert("Вы ввели число 2, а может и 3");
				break;

				default:
					alert("Вы че? Только числа от 0 до 3!!!");
}