const initialPrice = document.querySelector('#initial-price');
const stocksQuantity = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
const submitBtn = document.querySelector('#submit-btn');
const outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
	const ip = Number(initialPrice.value);
	const qty = Number(stocksQuantity.value);
	const curr = Number(currentPrice.value);

	calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
	if (initial > current) {
		const loss = (initial - current) * quantity;
		const lossPercentage = loss / initial * 100;

		showOutput(
			`Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
		);
	} else if (current > initial) {
		const profit = (current - initial) * quantity;
		const profitPercentage = profit / initial * 100;

		showOutput(
			`Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
		);
	} else {
		showOutput(`No Gain`);
	}
}

function showOutput(message) {
	outputBox.innerHTML = message;
}
