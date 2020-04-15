function grosspay(hours, payperhour) {
	return hours * payperhour;
}

function emptax(grosspay, taxRate) {
	return grosspay * taxRate;
}

function netpay(grosspay, emptax) {
	return grosspay - emptax;
}

function overtime(hours, payperhour) {
	return 40 * payperhour + (hours - 40) * (payperhour * 1.5);
}

function display() {
	let name = document.getElementById('name');
	let hours = document.querySelector('#hours');
	let payRate = document.querySelector('#payRate');
	let taxRate = document.querySelector('#taxRate');
	let h1 = document.createElement('h1');
	let h2Gross = document.createElement('h2');
	let h2Tax = document.createElement('h2');
	let h2Net = document.createElement('h2');

	document.getElementById('submit-button').addEventListener('click', (e) => {
		e.preventDefault();

		if (hours.value > 40) {
			h2Gross.innerHTML = `Gross Pay $${overtime(hours.value, payRate.value)}`;
			let grossPayment = overtime(hours.value, payRate.value);
			h1.innerHTML = `Payroll for ${name.value}`;
			h2Tax.innerHTML = `Total Tax $${emptax(grossPayment, taxRate.value / 100)}`;
			let totalTax = emptax(grossPayment, taxRate.value / 100);
			h2Net.innerHTML = `Net Pay $${netpay(grossPayment, totalTax)}`;
		} else {
			h1.innerHTML = `Payroll for ${name.value}`;
			h2Gross.innerHTML = `Gross Pay $${grosspay(hours.value, payRate.value)}`;
			grossPayment = grosspay(hours.value, payRate.value);
			h2Tax.innerHTML = `Total Tax $${emptax(grossPayment, taxRate.value / 100)}`;
			let totalTax = emptax(grossPayment, taxRate.value / 100);
			h2Net.innerHTML = `Net Pay $${netpay(grossPayment, totalTax)}`;
		}

		document.body.appendChild(h1);
		document.body.appendChild(h2Gross);
		document.body.appendChild(h2Tax);
		document.body.appendChild(h2Net);
		name.value = '';
		hours.value = '';
		payRate.value = '';
		taxRate.value = '';
	});
}

display();
