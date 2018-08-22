

/////////////////////
//Day 1 (Take Home)//
/////////////////////

//Log out into the console a string stating what I desire from
//this class and one of my favorite hobbies._
/*
console.log("I love programming but have had a handful of hiccups in my journey to becoming a skilled developer." + 
			"In this class I hope to rekindle my love for programming, have a better understanding of JavaScript, " + 
			"and get to network with a lot of other people in the tech community. \n" +
			"My favorite hobby, as of late, has been studying music theory, learning to read music, and learning to play " +
			"the ocarina. I find it to be very relaxing and mentally stimulating.");
*/





/*
////////////////////////////////////////////////
//Day 2 (In Class) - Variables and Console.log//
////////////////////////////////////////////////


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




///////////////////////////
//Day 2 (In Class) - Date//
///////////////////////////

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
*/




///////////////////////////
//Day 2 (In Class) - Math//
///////////////////////////

//Create variable to store random number
//Generate random number between 1 and 10 by using Math.random() to get
//a number between 0 and 1, multiply it by 10, and add 1 to prevent a 0
//outcome, then round down.
//const rand = Math.floor((Math.random() * 10) + 1);

//Log rand variable contents to console
//console.log(rand);

//Popup alert rand variable contents
//alert(rand);

//Confirm rand variable contents with the user
//confirm(rand);

//Prompt rand variable contents and take user input
//prompt(rand);


/*
/////////////////////
//Day 2 (Take Home)//
/////////////////////

//Create variable and store results from prompt that 
//asks the users for their last name
let firstName = prompt("Please enter your first name.");

//Create variable and store results from prompt that 
//asks the users for their last name
let lastName = prompt("Please enter your last name.");

//Log users first name to the console.
console.log(`Your first name is ${firstName}`);

//Popup alert the users entered last name
alert(`Your last name is ${lastName}`);

//Create birthday variable to store date object
let birthday = new Date()

//Prompt user for their birthday
birthday = prompt("Please enter your birthday.");


//Loop birthday prompt if user does not enter a value, if 
//value is null, or if the user clicks the cancel button.
while(!confirm(`Your birthday is on ${birthday}.`) || !birthday)
{
	birthday = prompt("Please re-enter your birthday.");	
}

//Popup alert to display the users accepted birthday
alert(`${birthday} is your birthday`);
alert("Bye bye!");
*/




///////////////////////////////////////////////
//Day 3 (Conditionals & Comparison Operators)//
///////////////////////////////////////////////

//=== Strictly comparison - matches datatype and value
//== Loosely comparison - not value sensitive
//! is not
//!== Strict not comparison
//!= Loose not comparison
//> Greater than comparison
//< Less than comparison
//>= Greater than or equal to comparsion
//<= Less than or equal to comparison

//const myNumber = "1";
// const userInput = prompt('Please enter a number:')
// if(1 == userInput) 
// {
// 	console.log("IF only that were true!");
// 	// console.log(!true);

// } 
// else
// {
// 	console.log("What ELSE could happen?!");
// }


/////////////////////////////
//Day 3 (Logical Operators)//
/////////////////////////////


//|| Logical or operator
//&& Logical and operator
//! Logical not operator

///////////
//OR test//
///////////

// const userInput = prompt('Please enter a number:');
// if(userInput == 1 || userInput == 5) 
// {
// 	console.log("What IF God was one of us?");

// } 
// else
// {
// 	console.log("This had better work, or ELSE!");
// }

////////////
//AND test//
////////////

// const userInput = prompt('Please enter a number:');
// if(userInput > 5 && userInput < 10) 
// {
// 	console.log("What IF this code did not exist?");

// } 
// else
// {
// 	console.log("Where ELSE would we be?");
// }

///////////////////
//Day 3 (If/Else)//
///////////////////

// const userInput = prompt('Please enter a number:')
// if(userInput > 5) 
// {
// 	console.log("To IF or not to IF?");
// }
// else if(userInput === '' || userInput === null)
// {
// 	console.log("ELSE IF you too lazy to enter anything.");
// } 
// else if(userInput < 5)
// {
// 	console.log("ELSE IF that is not the question, what is?");
// }
// else if(userInput === '5')
// {
// 	console.log("ELSE IF, this is not creative.");
// } 
// else
// {
// 	console.log("ELSE is the answer.")
// }



// //////////////////
// //Day 3 (Switch)//
// //////////////////

// //Store number value day from date function for
// //today in a variable
// const today = new Date().getDay();

// //Use swith to check the value in the today variable
// //and print a string output of the corresponding day
// switch (today) 
// {
// 	case 0:
// 		console.log("Sunday");
// 		break;
// 	case 1:
// 		console.log("Monday");
// 		break;
// 	case 2:
// 		console.log("Tuesday");
// 		break;
// 	case 3:
// 		console.log("Wednesday");
// 		break;
// 	case 4:
// 		console.log("Thursday");
// 		break;
// 	case 5:	
// 		console.log("Friday");
// 		break;
// 	case 6:
// 		console.log("Saturday");
// 		break;
// }




////////////////
//Day 3 (Math)//
////////////////

//Create variables and store each math opperation
// const addition = 1 + 1;
// const subtraction = 2 - 1;
// const multiplication = 2 * 2;
// const division = 10 / 2;
// const modulo = 11 % 3;

// //Log the results of each math opperation to the console.
// console.log(addition);
// console.log(subtraction);
// console.log(multiplication);
// console.log(division);
// console.log(modulo);

// //Print all even numbers less than 100
// let num = 0;
// while(num <= 100)
// {
// 	if((num % 2) == 0)
// 	{
// 		console.log(num);
// 	}
// 	num++;
// }

//++ increments by 1
//-- decrements by 1
// let myNum = 1;
// myNum++;
// console.log(myNum);

//+= add value to currently stored value in a variable
//-= subtract value from currently stored value in a variable
//*= multiply value by currently stored value in a variable
///= divide value by currently stored value in a variable
let myNum = 1;
myNum += 3; //4
myNum -= 10; //-6
myNum *= 5; //-30
myNum /= 12; //-2.5
console.log(myNum);

