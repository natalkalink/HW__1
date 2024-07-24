//Задача 1. Знайти суму, добуток та частку двох дійсних чисел.
//Результат вивести у формі таблиці

let number1 = parseFloat(prompt('Введiть дiйсне число','1.2'));
let number2 = parseFloat(prompt('Введiть дiйсне число', '2.4'));

let sum = number1 + number2;
let total = number1 * number2;
let div = number1 / number2;

document.write(`
	<table border=2px >
		<thead >
			<tr>
				<th>Дія</th>
				<th>число-1</th>
				<th>число-2</th>
				<th>Результат</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Сума</td>
				<td>${number1}</td>
				<td>${number2}</td>
				<td>${sum.toFixed(3)}</td>
			</tr>
			<tr>
				<td>Добуток</td>
				<td>${number1}</td>
				<td>${number2}</td>
				<td>${total.toFixed(3)}</td>
			</tr>
			<tr>
				<td>Частка</td>
				<td>${number1}</td>
				<td>${number2}</td>
				<td>${div.toFixed(3)}</td>
			</tr>
		</tbody>
	</table>
`);


