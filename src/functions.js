const order = {
	price: 10,
	quantity: 2,
};
function calculateTotal(order) {
	return order.price * order.quantity;
}
console.log(calculateTotal(order));

const name = {
	first: "John",
	last: "Doe",
};
function formatUsername(firstName, lastName) {
	return `${lastName}, ${firstName}`;
}
console.log(formatUsername("John", "Doe"));
