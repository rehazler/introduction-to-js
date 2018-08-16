//Day 1 (Take Home)
//Log out into the console a string stating what I desire from
//this class and one of my favorite hobbies._
/*
console.log("I love programming but have had a handful of hiccups in my journey to becoming a skilled developer." + 
			"In this class I hope to rekindle my love for programming, have a better understanding of JavaScript, " + 
			"and get to network with a lot of other people in the tech community. \n" +
			"My favorite hobby, as of late, has been studying music theory, learning to read music, and learning to play " +
			"the ocarina. I find it to be very relaxing and mentally stimulating.");
*/


//Day 2 (In Class) - Variables and Console.log

///////
//ES5//
/////// 
//Create string variable myName and store my name in it
//var myName = "Robert";

//Create number variable myAge and store my age in it
//var myAge = 28

//Log name and age message to console
//console.log("Hello, " + myName + "! You are " + myAge + "years old.");


///////
//ES6//
///////
//Create string variable myName and store my name in it
const myName = "Robert";

//Create mu,ber variable myAge and store my age in it
let myAge = 28

//Log name and age message to console
console.log(`Hello, ${myName}! You are ${myAge} years old.`);


//Day 2 (In Class) - Date
//Create variable to store date
const today = new Date();

//Get current day of the month from the today variable
let day = today.getDate();

//Get current month from the today varaible
let month = today.getMonth() + 1;

//Get current full year from the today varaible
let year = today.getFullYear();

//Get current hour from the today varaible
let hour = today.getHours();

//Get current minute from the today varaible
let minute = today.getMinutes();

//Log current date and time to console
console.log(`${month} / ${day} / ${year}, ${hour}:${minute}`);


//Day 2 (In Class) - Math
//Create variable to store random number
//Generate random number between 1 and 10 by using Math.random() to get
//a number between 0 and 1, multiply it by 10, and add 1 to prevent a 0
//outcome, then round down.
const rand = Math.floor((Math.random() * 10) + 1);

//Log rand variable contents to console
console.log(rand);

//Popup alert rand variable contents
alert(rand);

//Confirm rand variable contents with the user
confirm(rand);

//Prompt rand variable contents and take user input
prompt(rand);