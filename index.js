// Iteration 1: Names and Input
let hacker1 = "Manolo";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Steven";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops


// 3.1
let hacker1spaced = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1spaced += `${hacker1[i].toUpperCase()} `};
hacker1spaced = hacker1spaced.slice(0, hacker1spaced.length - 1);
console.log(hacker1spaced);

// 3.2
hacker2reversed = "";
for (let i = 1; i <= hacker2.length; i++) {
  hacker2reversed += hacker2[hacker2.length - i];
};
console.log(hacker2reversed);

// 3.3
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1 == hacker2) {
  console.log("What?! You both have the same name?");
}