const initialPrice = document.querySelector('#initial-price');
const stocksQuantity = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
const submitBtn = document.querySelector('#submit-btn');
const outputBox = document.querySelector('#output-box');
const initial_price_error = document.querySelector('#initial_price_error');
const quantity_error = document.querySelector('#quantity_error');
const current_price_error = document.querySelector('#current_price_error');

let ip = '';
let qty = '';
let curr = '';

initialPrice.addEventListener('input', e => {
	ip = Number(e.target.value);
	if (ip === 0 || ip === null) {
		initial_price_error.innerHTML = `Initial Price can not be Zero`;
	} else if (ip < 0) {
		initial_price_error.innerHTML = `Initial Price can not be negative`;
	} else {
		initial_price_error.innerHTML = '';
	}
});

stocksQuantity.addEventListener('input', e => {
	qty = Number(e.target.value);
	if (qty === 0 || qty === null) {
		quantity_error.innerHTML = `stocks Quantity can not be Zero`;
	} else if (qty < 0) {
		quantity_error.innerHTML = `stocks Quantity can not be negative`;
	} else {
		quantity_error.innerHTML = '';
	}
});

currentPrice.addEventListener('input', e => {
	curr = Number(e.target.value);

	if (curr === 0 || curr === null) {
		current_price_error.innerHTML = `Current Price can not be Zero`;
	} else if (curr < 0) {
		current_price_error.innerHTML = `Current Price can not be negative`;
	} else {
		current_price_error.innerHTML = '';
	}
});

submitBtn.addEventListener('click', e => {
	e.preventDefault();

	if (
		current_price_error.innerHTML === '' &&
		initial_price_error.innerHTML === '' &&
		quantity_error.innerHTML === '' &&
		ip !== '' &&
		qty !== '' &&
		curr !== ''
	) {
		console.log('ok');
		calculateProfitAndLoss(ip, qty, curr);
	} else {
		if (ip === '') {
			initial_price_error.innerHTML = 'Initial Price can not be Empty';
		}
		if (qty === '') {
			quantity_error.innerHTML = 'stocks Quantity can not be Empty';
		}
		if (curr === '') {
			current_price_error.innerHTML = 'Current Price can not be Empty';
		}
	}
});

function calculateProfitAndLoss(initial, quantity, current) {
	if (initial > current) {
		const loss = (initial - current) * quantity;
		const lossPercentage = (current - initial) / initial * 100;

		showOutput(
			`Hey, the loss is  ${Math.round(loss)} and the percent is ${Math.round(
				lossPercentage
			)}% `
		);
	} else if (current > initial) {
		const profit = (current - initial) * quantity;
		const profitPercentage = (current - initial) / initial * 100;

		showOutput(
			`Hey, the profit is ${Math.round(profit)} and the percent is ${Math.round(
				profitPercentage
			)}%`
		);
	} else {
		showOutput(`No Gain`);
	}
}

function showOutput(message) {
	outputBox.innerHTML = message;
}
