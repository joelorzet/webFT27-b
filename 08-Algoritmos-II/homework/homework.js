'use strict';
// No cambies los nombres de las funciones.

function quickSort(array) {
	// Implementar el método conocido como quickSort para ordenar de menor a mayor
	// el array recibido como parámetro
	// Devolver el array ordenado resultante
	// Tu código:

	if (array.length < 1) {
		return array;
	}

	const left = [];
	const right = [];
	let pivote = array[0];

	for (let i = 1; i < array.length; i++) {
		if (array[i] <= pivote) {
			left.push(array[i]);
		}
		if (array[i] > pivote) {
			right.push(array[i]);
		}
	}

	return quickSort(left).concat(pivote).concat(quickSort(right));
}

function mergeSort(array) {
	// Implementar el método conocido como mergeSort para ordenar de menor a mayor
	// el array recibido como parámetro
	// Devolver el array ordenado resultante
	// Tu código:
	//return array.sort((a, b) => a - b);
	if (array.length <= 1) {
		return array;
	}

	const middle = Math.floor(array.length / 2);
	const left = array.splice(0, middle);
	const right = array;

	return sortArray(mergeSort(left), mergeSort(right));
}

function sortArray(left, right) {
	const newArray = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			newArray.push(left.shift());
		} else {
			newArray.push(right.shift());
		}
	}
	return newArray.concat(left).concat(right);
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
	quickSort,
	mergeSort,
};
