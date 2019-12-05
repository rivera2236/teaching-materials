let temp = 85;
let precipitation = false;
let indoors = true;

console.log(`The temperature is ${temp} degrees`);

//Your code here

if(temp > 80 && precipitation == false){
	console.log("time to swim");
} else if(indoors){
	console.log("time to swim");	
}

let number = 55;

let fizz = "Fizz"
let buzz = "Buzz"


if(number%3 == 0){
	console.log("Fizz")
}

if(number%5 == 0){
	console.log("Buzz")
}

if (number%3 == 0 && number%5 == 0){
	console.log(fizz + " " + buzz);
}

let result = "";


if(number%3 == 0){
	console.log("Fizz")
}

if(number%5 == 0){
	console.log("Buzz")
}

if (number%3 == 0 && number%5 == 0){
	console.log(fizz + " " + buzz);
}

console.log(result);
