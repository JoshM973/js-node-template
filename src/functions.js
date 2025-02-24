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

const strings = {
	str1: "Hello",
	str2: "World",
};
function combineStrings(str1, str2) {
	return `${str1} ${str2}`;
}
console.log(combineStrings("Hello", "World"));

const cart = {
	price: 100,
	tax: 0.07,
};
function calculateTotal2(cart) {
	return cart.price + cart.price * cart.tax;
}
console.log(calculateTotal2(cart));

const nameinfo = {
	firstName: "John",
	lastName: "Doe",
};
function formatFullName(firstName, lastName) {
	return `${firstName} ${lastName}`;
}
console.log(formatFullName("John", "Doe"));

const character = {
	name: "Hero",
	weapon: "Sword",
	level: 1,
};
function createCharacterDescription(character) {
	return `Level ${character.level} ${character.name} is wielding a ${character.weapon}.`;
}
console.log(createCharacterDescription(character));
