const form = document.forms.form;
const price_today = form.price_today;
const cash = form.cash;

form.addEventListener("submit", function(event) {
	if (!price_today.value || !cash.value) {
		alert("Enter all values");
	} else if (isNaN(parseFloat(price_today.value)) || isNaN(parseFloat(cash.value))) {
		alert("Enter correct values (numbers)");
	} else {
		const total = (parseFloat(cash.value) / parseFloat(price_today.value)).toFixed(7);
		const newElement = document.createElement('p');
		newElement.innerHTML = `You can buy ${total} BTC`;
		form.append(newElement);
		event.preventDefault();
	}
});