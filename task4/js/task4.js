//Задача 4. 
//Дано довжину у сантиметрах.
//Визначати скільки це метрів і кілометрів.

let lengthInCm = parseInt(prompt('Введiть число у сантиметрах', '200'));

let lengthInM = lengthInCm / 100;

let lengththInKm = lengthInCm / (100 * 1000);

document.write(`
	Довжина у сантиметрах = ${lengthInCm} <br>
	Довжина у метрах = ${lengthInM} <br>
	Довжина у кiлометрах = ${lengththInKm}
`);

//console.log("Довжина у сантиметрах: " + lengthInCm);
//console.log("Довжина у метрах: " + lengthInM);
//console.log("Довжина у кiлометрах: " + lengththInKm);


