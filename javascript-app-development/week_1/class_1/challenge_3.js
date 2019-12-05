//Write your code here

// let x = 0;

// while(x < 10){

// }

// let x = 0;

// do{
	
// }while(x < 10);

// ////////////////////////////////////////////////////////////////////////////////////////////

// let grade = Math.floor(Math.random() * 100) + 1;
// let result = "";

// if (grade >= 90){
// 	result = "A";
// } else if (grade >= 80){
// 	result = "B";
// } else if (grade >= 70){
// 	result = "C";
// } else if (grade >= 60){
// 	result = "D";
// } else if (grade >= 50){
// 	result = "E";
// } else if (grade >= 40 || grade <= 40 && grade > 0){
// 	result = "F";
// } else {
// 	result = null;
// };

// console.log("The grade was " + grade + " so your score id " + result +".")

// ////////////////////////////////////////////////////////////////////////////////////////////

let result = "";
let number = 3;

if(number%3 === 0){
	result += "Fizz"
}

if(number%5 === 0){
	result += "Buzz"
}

console.log(result);


let grade = Math.floor(Math.random() * 100) + 1;
let result = "";

if (grade >= 90){
	result = "A";
} else if (grade >= 80){
	result = "B";
} else if (grade >= 70){
	result = "C";
} else if (grade >= 60){
	result = "D";
} else if (grade >= 50){
	result = "E";
} else {
	result = "F";
};

console.log("The grade was " + grade + " so your score id " + result +".")










