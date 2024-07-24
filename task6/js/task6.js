//Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. 
//Обчислити вартість кожного товару окремо та загальну вартість.
//Вивести чек(як у супермаркеті) використовуючи елементи розмітки.

let productPreiceOne = parseFloat(prompt('Введiть вартість товару - 1', '200.00'));
let productQuantityOne = parseInt(prompt('Введiть кількість товару - 1', '4'));

let productPreiceTwo = parseFloat(prompt('Введiть вартість товару - 2', '100.23'));
let productQuantityTwo = parseInt(prompt('Введiть кількість товару - 2', '1'));

let productPreiceThree = parseFloat(prompt('Введiть вартість товару - 3', '350.05'));
let productQuantityThree = parseInt(prompt('Введiть кількість товару - 3', '2'));

let totalItemOne = productPreiceOne * productQuantityOne;
let totalItemTwo = productPreiceTwo * productQuantityTwo;
let totalItemThree = productPreiceThree * productQuantityThree;

let totalCost = totalItemOne + totalItemTwo + totalItemThree;

document.write(`
	<hr>
	<h3><i>Магазин "Соняшник"</i></h3>
	<h4>Фiскальний чек</h4>
	<p>Касир: Хоменко Надiя</p>
	<p>Дата покупки : 23.07.2024</p>
	<table border=1px >
		<thead >
			<tr>
				<th>Товар</th>
				<th>кiлькiсть</th>
				<th>цiна</th>
				<th>сума</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Товар - 1</td>
				<td>${productQuantityOne}</td>
				<td>${productPreiceOne}</td>
				<td>${totalItemOne.toFixed(2)}</td>
			</tr>
			<tr>
				<td>Товар - 2</td>
				<td>${productQuantityTwo}</td>
				<td>${productPreiceTwo}</td>
				<td>${totalItemTwo.toFixed(2)}</td>
			</tr>
			<tr>
				<td>Товар - 3</td>
				<td>${productQuantityThree}</td>
				<td>${productPreiceThree}</td>
				<td>${totalItemThree.toFixed(2)}</td>
			</tr>
		</tbody>
	</table>
	<h3>Загальна вартiсть: ${totalCost.toFixed(2)} грн. </h3>
	<hr>
`);