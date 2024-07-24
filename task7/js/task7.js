//Задача 7.
//Знайти суму випадкового номера місяця(від 1 до 12) 
//та випадкового номера дня(від 0 до 6).

let randomNumber01 = Math.random();
let randomNumber113 = randomNumber01*12 + 1;
let randomMonth = Math.floor(randomNumber113);

console.log('randomNumber01: ', randomNumber01);
console.log('randomNumber113: ', randomNumber113);
console.log('randomMonth: ', randomMonth);

let randomDayNumber01 = Math.random();
let randomDayNumber07 = randomDayNumber01 * 7;
let randomeDay = Math.floor(randomDayNumber07);

console.log('randomDayNumber01: ', randomDayNumber01);
console.log('randomDayNumber07: ', randomDayNumber07);
console.log('randomeDay: ', randomeDay);

let sum = randomMonth + randomeDay;

document.write(`
	Випадкового номера місяця : ${randomMonth} <br>
	Випадкового номера дня : ${randomeDay} <br>
	Сума : ${sum}
`);