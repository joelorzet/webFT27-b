'use strict';

function BinarioADecimal(num) {
	// tu codigo aca
	const binary = String(num);
	let exponent = 0;
	let decimalNumber = 0;

	for (let i = binary.length; i > 0; i--) {
		if (binary[i - 1] === '1') {
			decimalNumber += 2 ** exponent;
		}
		exponent += 1;
	}

	return decimalNumber;
}

function DecimalABinario(num) {
	// tu codigo aca
	let binario = '';
	let newNum = num;

	while (newNum > 0) {
		binario += newNum % 2;

		newNum = Math.floor(newNum / 2);
	}

	return binario.split('').reverse().join('');
}

module.exports = {
	BinarioADecimal,
	DecimalABinario,
};
