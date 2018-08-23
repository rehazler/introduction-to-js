

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
// let myNum = 1;
// myNum += 3; //4
// myNum -= 10; //-6
// myNum *= 5; //-30
// myNum /= 12; //-2.5
// console.log(myNum);



/*/////////////////////
//Day 3 (Take Home)//
/////////////////////

//Prompt user for their name and store it for later use
let usersName = prompt("What is your name?");

//Create bool for color choice validity testing
let validColor = false;

//Prepare string variables for color and alert message
let color = new String();
let message = new String();

//Check if the user does not enter a name
if(!usersName)
{
	//Set users name because they are a rebel who
	//didn't set their name.
	usersName = "NoNamePerson";
	alert(`You didn't enter a proper name so ${usersName} is your name now!`)
} 

//Create loop to prompt user for a specific color
//Continue loop if color doesn't exist.
while(!validColor){
	color = prompt("Of the following, which is your favorite color: \n"
   					+ "Red, Orange, Yellow, Green, Blue, Pink, Purple, Black, White, Grey");

	//If color is not null or undefined make color
	//contents lowercase to prevent case sensitivity
	if(color)
	{
		color = color.toLowerCase();
	}

	//Use switch to check color variable contents
	switch(color)
	{
		//Create case for each possible color.
		//Set message to user based on color chosen.
		case "red":
			validColor=true;
			message = `${usersName} wears RED so his enemies can't see him bleed.`;
			break;
		case "orange":
			validColor=true;
			message = `${usersName}, ORANGE you glad that I didn't say banana?`;
			break;
		case "yellow":
			validColor=true;
			message = `YELLOW, ${usersName} long time no see.`;
			break;
		case "green":
			validColor=true;
			message = `${usersName}, GREEN is not a creative color.`;
			break;
		case "blue":
			validColor=true;
			message = `${usersName}, really? You just BLUE my mind!`;
			break;
		case "pink":
			validColor=true;
			message = `${usersName}, what do you PINK you are doing?!`;
			break;
		case "purple":
			validColor=true;
			message = `${usersName}, it's PURPLE? Maybe you should get that looked at.`;
			break;
		case "black":
			validColor=true;
			message = `${usersName}, you chose BLACK? That is dark, man.`;
			break;
		case "white":
			validColor=true;
			message = `${usersName}, WHITE is not bad, but it pales in comparison.`;
			break;
		case "grey":
			validColor=true;
			message = `${usersName}, GREY you say? I am indifferent.`;
			break;
		default:
			//Mark invalid color if the entry doesn't match any of the above colors.
			//Set message to inform the user of the invalid choice.
			validColor = false;
			message = `${usersName}, "${color}" was not an option, please try again.`
	}

	//Popup alert the users with the message
	//based on the color chosen
	alert(message);
}*/



//////////////////
//Day 4 (Arrays)//
//////////////////

//Create an array of colors
//let myArray = ['Red', 'Blue', 'Green', 'Purple', 'Black', 'Gray', 'White'];

//Store array's red value in variable
// let red = myArray[0];

//Log array item to console
// console.log(myArray[1]);

//Log number of stored array values of the console
// console.log(myArray.length);

//Create an array with information of different datatypes
// let about = ['Robert', 28, 'He is human', true]

//Log all about contents to the console
// console.log(about);

//Create array of numbers from 1 to 9
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Log to console results of check if nums is an array
// console.log(Array.isArray(nums))

//Insert 10 onto the end of the nums array
// nums.push(10);

//Insert 0 onto the beginning of the nums array.
// nums.unshift(0);

//Removes last item in the array
//nums.pop();

//Removes first item in the array
// nums.shift();

//Removes everything from the specified index and on
// nums.splice(6);

//Removes specified number of items after specified index
// nums.splice(6,1);

//Creates and returns a new array starting at a specified index
// let slice = nums.slice(3);
// console.log(slice);

//Creates and returns a new array with items between the specified indices
// let sliceTwo = nums.slice(3, 6);
// console.log(sliceTwo);

//Log index of specific item in array to console
// console.log(myArray.indexOf('Green'));

//Store index of item in array to variable
// let colorIndex = myArray.indexOf('Green');

//Log item at colorIndex from array to console.
// console.log(myArray[colorIndex]);

//Store green index in a variable then remove it from the 
//array of collors and log the remaining array to console
// let color = myArray.indexOf('Green');
// myArray.splice(color,1);
// console.log(myArray);

//Log new nums contents to the console
//console.log(nums);

//Find the index of the last existing matching item in the array.
// let lastIndex = myArray.lastIndexOf("Red");
// console.log(lastIndex);

//Use reverse() to log the contents of the myArray in reverse.
//console.log(myArray.reverse());

//Use sort() on array to alphabetize its contents
//console.log(myArray.sort());



/////////////////
//Day 4 (Loops)//
/////////////////

//While, for, do while, for each, for of, for in//


//Create a while loop that increments num after every loop
// let num = 0
// while(num < 10) 
// {
// 	num++;
// }
//Log num's finaly contents to the console
// console.log(num); //10

//Create a for loop that counts to 10 and print
//something at each loop
// for(let i = 0; i < 10; i++)
// {
// 	console.log(i);
// }

//Create a do while loop to log a count to 10 in the console
// let num = 0;
// do 
// {
// 	num++;
// 	console.log(num);
// } while (num < 10);

//Create for loop that logs all of the contents in my array
//to the console, one at a time.
//let myColors = ['Red', 'Blue', 'Green', 'Purple', 'Black', 'Gray', 'White'];
// for (let i = 0; i < myColors.length; i++)
// {
// 	console.log(myColors[i]);
// }

//Create empty array to store favorite movies.
let myFavoriteMovies = [];
//Store favorite movies title and their release date in three different arrays
let firstFavorite = ['BlahBlah', '1970'];
let secondFavorite = ['NotRealMovie', '1989'];
let thirdFavorite = ['FakeFilm', '1990'];

//Put all favorite movies into the myFavoriteMovies array
myFavoriteMovies.push(firstFavorite, secondFavorite, thirdFavorite);

//Create array to store the movie release dates
let movieYears = [];
//Push years from myFavoriteMovies to movieYears
//movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1]);

//Create for loop to push years from myFavoriteMovies to movieYears
for(let i = 0; i < myFavoriteMovies.length; i++)
{
	movieYears.push(myFavoriteMovies[i][1]);
}


console.log(movieYears);