for (let i = 1; i <= 10; i++) {
	console.log(i);
}

let j = 1;
while (j < 11) {
	console.log(j);
	j++;
}
// I used <= 10 in the for loop and < 11 in the while loop to show that they can be used for the same result.
const games = [
	"Minecraft",
	"Super Mario",
	"Call of Duty",
	"Pokemon",
	"Stardew Valley",
];
for (let i = 0; i < games.length; i++) {
	console.log(`Game ${i + 1}: ${games[i]}`);
}
// I started with i = 0 because thats where arrays begin and used i < games.length to make sure it loops through the entire array without going over.
