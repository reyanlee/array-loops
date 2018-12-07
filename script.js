var colors = ["red", "orange", "yellow", "green", "blue"];

console.log(colors[0]);

console.log(colors[2]);

colors[4] = "ultraviolet";

var fourthColor = colors[3];

colors.push("pink");

colors.unshift("purple");

console.log(colors.length);

colors.pop();
console.log(colors.length);

for (var i = 0; i < 6; i++) {
	console.log(colors[i]);
};

for (var i = 0; i < 6; i++) {
	console.log(colors[i] + " " + i)
};

var lastColor = colors[colors.length - 1];
console.log(lastColor);
