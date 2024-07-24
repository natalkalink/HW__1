//Задача 2. 
//Дано рік народження(дата: 1 січня) та поточний рік. 
//Знайти кількість років.

let birthYear = parseInt(prompt('Введіть ваш рік народження', '1990'));
let currentYear = parseInt(prompt('Введіть поточний рік', '2024'));

let ageSum = currentYear - birthYear;

document.write(`Вам зараз ${ageSum} роки`);