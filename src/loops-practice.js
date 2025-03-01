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

const players = [
	{ name: "Soap", kills: 10, deaths: 0 },
	{ name: "Ghost", kills: 20, deaths: 3 },
	{ name: "Price", kills: 15, deaths: 12 },
];
for (let i = 0; i < players.length; i++) {
	const player = players[i];
	const killDeathRatio = player.kills / Math.max(1, player.deaths);
	console.log(
		` ${player.name}: ${player.kills} Kills, ${player.deaths}deaths, K/D Ratio: ${killDeathRatio.toFixed(2)}`,
	);
}
// I used Math.max(1, player.deaths) to prevent division by zero and ensure the K/D ratio is calculated correctly.
