//Задача 3. 
//Дано вартість одиниці товару і кількість.
//Знайти загальну вартість та ПДВ(5 % від загальної вартості). 

let priceUnit = parseFloat(prompt('Введіть вартість одиниці товару (грн)','123.50'));

let quantity = parseInt(prompt('Введіть кількість товару','3'));

let totalSum = priceUnit * quantity;

let totalProcent = totalSum * (5 / 100);

document.write(`
	Вартість одиниці товару: ${priceUnit.toFixed(2)} грн. <br>
	Загальна вартість : ${totalSum.toFixed(2)} грн. <br>
	Кількість товару : ${quantity} шт. <br>
	5 % ПДВ від загальної вартості: ${totalProcent.toFixed(2)} грн.
`);