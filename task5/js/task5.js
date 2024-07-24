//Задача 5.
//Дано кількість секунд, що пройшла від початку доби. 
//Визначити скільки це годин і хвилин.

let secs = parseInt(prompt('Введiть кількість секунд', '200'));

let minutes = secs / 60;
let hours = secs / 3600;

document.write(`
	Кількість секунд = ${secs}<br>
	Кількість хвилин = ${minutes.toFixed(3)}<br>
	Кількість годин = ${hours.toFixed(3) }
`);

