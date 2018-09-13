

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
// let myFavoriteMovies = [];
//Store favorite movies title and their release date in three different arrays
// let firstFavorite = ['BlahBlah', '1970'];
// let secondFavorite = ['NotRealMovie', '1989'];
// let thirdFavorite = ['FakeFilm', '1990'];

//Put all favorite movies into the myFavoriteMovies array
// myFavoriteMovies.push(firstFavorite, secondFavorite, thirdFavorite);

//Create array to store the movie release dates
// let movieYears = [];
//Push years from myFavoriteMovies to movieYears
//movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1]);

//Create for loop to push years from myFavoriteMovies to movieYears
// for(let i = 0; i < myFavoriteMovies.length; i++)
// {
// 	movieYears.push(myFavoriteMovies[i][1]);
// }


// console.log(movieYears);


/*
/////////////////////
//Day 4 (Take home)//
/////////////////////

//Create todo list array
let todoList = [];

//Generate random number(between 3 and 5) for the number of things to do
let numberOfTasks = Math.floor((Math.random() * 3) + 3);

//Create for loop to continue equal to the number stored in numberOfTasks
for (let i = 0; i  < numberOfTasks; i++)
{
	//Prompt user for a task and the number of days required to complete that task.
	//Push the task and the time, in an array, required into the todoList array.
	todoList.push([prompt(`Enter todo task #${i + 1}.`), parseInt(prompt("How many days will it take?"))]);

	//Loop if entered number of days is not just an integer. Get a new value from the user
	while(!Number.isInteger(todoList[i][1]))
	{
		todoList[i][1] = parseInt(prompt(`That was not a valid number. How many days will it take to complete "${todoList[i][0]}?"`));
	}
}

//Create counter to track loop number in while loop
let counter = 0;

//Store index of longest task
let longestTaskIndex = 0;

//Loop through array items using while loop
while(counter < todoList.length)
{
	//If current array list item takes longer than the previously
	//longest task, save current counter as new longestTaskIndex
	if(todoList[longestTaskIndex][1] < todoList[counter][1])
	{
		//Save loop count as new longest index
		longestTaskIndex = counter;
	}

	//Increment loop count
	counter++;
}

//Reset counter for use with do while loop
counter = 0;

//Log to console message indication of longest tasks
console.log("Longest Task(s): ")

//Loop through each array item
do
{
	//If less days are required to complete a task add "easy-peasy" to that tasks array
	if(todoList[counter][1] < todoList[longestTaskIndex][1])
	{
		todoList[counter].push("easy-peasy");
	}
	//Else if the time required is equal to that of the longest task, log it to the console
	//This will handle the case of multiple tasks being tied for the longest task
	else if(todoList[counter][1] == todoList[longestTaskIndex][1])
	{
		//Log tasks with the most amount of required days to log
		console.log(todoList[counter][0]);
	}

	//Increment loop counter
	counter++;
} while(counter < todoList.length)

//Find all tasks that include "easy peasy" in their array
let easyPeasy = [];
todoList.forEach(function(item,index)
{
	//If tasks have more than two coloumns, store the task name.
	if(item.length > 2){
		easyPeasy.push(item[0]);
	}
});

//Alert the easy peasy labeled tasks.
alert("Easy Peasy Tasks: \n" + easyPeasy.join("\n"));
*/

/////////////////////
//Day 5 (Functions)//
/////////////////////

//Hoisting - JS runs and gets all var declarations prior to running any other code.

//Anonymous Functions
// function(name, age) {
// 	return `My name is ${name} and I am ${age} years old.`;
// }


// //Named Functions
// function getTodos(question){
// 	todos.push(prompt(question));
// }


// //Function declarations also get hoisted
// nameThatBand("Coldplay");

// function nameThatBand(bandName){
// 	return alert(`${bandName} is overrated`);
// }



// //Recursive function
// function nameThatBand(bandName){
// 	if(i < 5)
// 	{
// 		alert(`${bandName} is overrated`);
// 		i++;
// 		nameThatBand("Coldplay");
// 	}
// 	else
// 	{
// 		return;
// 	}
// }


// nameThatBand("Coldplay");


//"FAT" Arrow functions
//() => (); //Pointlesss basic function;

// let i = 0;
// () => { //No argument arrow function
// 	incrementor ++;
// 	if(i < 5){
// 		callFunction();
// 	}
// }

// pasta => { //single argument arrow function
// 	alert(`My favorite pasta is ${pasta}`);
// }

// pasta => (pasta.toUpperCast())

// (car, house) => {
// 	//Call an API to save this data...
// 	return `The returned info is ${data}.`
// }



// Accept 1 argument (age of the dog in years).
// Return the age of the dog using the conversion rate of 1 year to 7 "dog" years.
// Alert the answer.
// Make sure you're checking for edge-cases!
// function askDogsAge()
// {
// 	let dogsAge = parseInt(prompt("How old is your dog? (In human years)"));
// 	let dogsAgeInDogYears = 0;

// 	if(!isNaN(dogsAge))
// 	{
// 		return dogAgeConverter(dogsAge);
// 	}
// 	else
// 	{
// 		alert("You entered a value that was not a number.");
// 		askDogsAge();
// 	}
// }

// function dogAgeConverter(dogAge)
// {
// 	return dogAge * 7;
// }


// let dogsConvertedAge = askDogsAge();

// alert(dogsConvertedAge);

/*
/////////////////////
//Day 5 (Take Home)//
/////////////////////


//Prompts for user inputs. Use an argument to changed desired prompts and functions to be invoked
function userInfoCollector(taskType = "string")
{
	let userInput;
	//If taskType is number
	if (taskType == "number")
	{
		let squaredNum;
		//Prompt the user for a number and parse a a float
		userInput = parseFloat(prompt("Enter a number: "));

		//If the value is a number
		if(!isNaN(userInput))
		{
			//Store the returned results of squareNumbers().
			squaredNum = squareNumbers(userInput);
		}
		//If not a number (this does include undefined)
		else
		{
			//Alert NaN to let the user know they entered an invalid number
			alert("NaN");
			//Reinvoke userInfoCollector() for a number.
			squaredNum = userInfoCollector("number");
		}

		//Return the newly squared number
		return squaredNum;
	}
	//If taskType is sentence
	else if (taskType == "sentence")
	{
		//Ask user to enter a sentence to capitalize the first letter and add a period ot the end
		userInput = invalidPromptChecker(prompt("Enter a sentence:"), "sentence");
		//Return value returned from completeSentenceizer
		return completeSentenceizer(userInput);
	}
	else if (taskType == "palindrome")
	{
		//Ask user to enter any value to test if it is a palindrome
		userInput = invalidPromptChecker(prompt("Enter anything to test if it is a palindrome:"), "palindrome");
		//Pass input to palindromeChecker function
		palindromeChecker(userInput);
	}
	//All other cases (which should be a string by default of prompt)
	else
	{
		//Prompt user for any input
		userInput = invalidPromptChecker(prompt("Enter anything:"));
		//Pass inpt to string swapper
		return stringSwapper(userInput);
	}
}

//invalidPromptChecker() tests a prompt and reinvokes the userInfoCollector() with the appropriate type
//if the user hits cancel or ok without entering a value or somehow enters a null or unidentified value.
function invalidPromptChecker(input, type = "string")
{
	if(!input)
	{
		alert(`${input} is not a valid entry, please try again.`)
		return userInfoCollector(type);
	}
	else
	{
		return input;
	}
}

//Squares the num argument and returns the results
function squareNumbers(num) 
{
	return Math.pow(num,2);
}

//Attempts to capitalize the first character and add a period to the end if necessary.
function completeSentenceizer(sentence)
{
	//Store sentence length
	let sentenceLength = sentence.length;
	//Store capitalized first letter of the sentence argument
	let newSentence = sentence.substring(0, 1).toUpperCase();

	//If the last character is not a period
	//(I only did this based on the intructions stating to add a period to the end if there is not one)
	//(Technically if it ended with an ! or ? it would not be proper to add a . to the end)
	if(!sentence.substring(sentenceLength - 1, sentenceLength).includes("."))
	{
		//Add period to the end of sentence
		sentence += ".";
		//Increase sentence length by one for the new period.
		sentenceLength += 1;
	}


	//Remove the first character of the sentence argument
	sentence = sentence.substring(1, sentenceLength);

	//Combine the new capitalized first character of the original sentence and the altered sentence's contents.
	newSentence += sentence;

	//Return newSentence
	return newSentence;

}

//Swap the first and second half of a string
function stringSwapper(stringValue)
{
	//Store stringValue length
	let stringValueLength = stringValue.length;
	//Slice out the first half of the string
	let firstHalfString = stringValue.slice(0, stringValueLength/2);
	//Slice out the second half of the string
	let secondHalfString = stringValue.slice(stringValueLength/2, stringValueLength);

	//Return the second then first half of the original string, combined.
	return secondHalfString + firstHalfString;
}

//Test if a string is a palindrome
function palindromeChecker(originalString)
{
	//This is possibly not necessary and not the right way to handle this I am sure but there was an error stating .split() can't
	//be used on undefined, whenever the user would press "ok" despite have the invalidPromptChecker() reprompt them for an input.
	//After the invalidPromptChecker() reprompted the user, it would get the value, check it correctly and let you know if it was a
	//palindrome but it would also pop up in the console that .split() can't be used with undefined. This if just prevents the error.
	if(originalString){
		//Reverse the original string
		let reversedString = originalString.split("").reverse().join("");

		//Check if the original string and the reversed string are the same.
		if(originalString === reversedString)
		{
			//If they are the same, alert that the string is a Palindrome
			alert(`${originalString} is a Palindrome!`);
		}
		else
		{
			//If they are not the same, alert that the string is not a Palindrome
			alert(`${originalString} is not a Palindrome!`);
		}
	}
}


console.log(userInfoCollector("number"));

console.log(userInfoCollector("sentence"));

console.log(userInfoCollector());

userInfoCollector("palindrome");
*/



///////////////////
//Day 6 (THE DOM)//
///////////////////

// function domSelector(selector, name){

// 	let selectorReturn;

// 	switch (selector){

// 		case "ElementByTag":
// 			selectorReturn = document.getElementsByTagName(name);
// 			break;
// 		case "ElementByClass":
// 			selectorReturn = document.getElementsByClassName(name);
// 			break;
// 		case "ElementById":
// 			selectorReturn = document.getElementById(name);
// 			break;
// 		case "querySelector":
// 			selectorReturn = document.querySelector(name);
// 			break;
// 		case "querySelectorAll":
// 			selectorReturn = document.querySelectorAll(name);

// 	}

// 	return selectorReturn;


// }

// console.log(domSelector(prompt("enter selector", "ElementByTag"), prompt("enter name", "body")));


// let button = document.querySelectorAll('button');
// let div = document.querySelectorAll('.red_div');
// let h1 = document.querySelectorAll('h1');

// button[0].addEventListener('click', () => 
// {
// 	alert("YOU DARE TO PUSH ME!?");
// })

// div[0].addEventListener('mouseover', () => 
// {
// 	div[0].style.backgroundColor = "white";
// })

// document.addEventListener('keyup', (key) => 
// {
// 	h1[0].style.color = "green";
// })

// document.addEventListener('click', (event) => 
// {
// 	location.replace("https://www.facebook.com/")
// })




/////////////////////
//Day 6 (Take Home)//
/////////////////////

/*
//Form validation function
function validateForm(){
	//If the user has not entered a temperature value
    if(!temperature_input.value)
    {
    	//Alert the user to enter a valid temperature value
        alert("Please enter a valid number");
    }
}

//Function that converts celcius to fahrenheit and fahrenheit to celcius
function convertUnit(temperature, scale)
{
	//Stores the temperature after it has been converted
	let convertedTemperature;
	
	//If the scale is set to celcius
	if(scale === "celcius")
	{
		//Convert and store the temperature to fahrenheit
		convertedTemperature = (temperature * 1.8) + 32;
		//Set the current to fahrenheit
		currentScale = 'fahrenheit';
	}
	else
	{
		//Convert and store the temperature to celcius
		convertedTemperature = (temperature - 32) / 1.8;
		//Set the current to celcius
		currentScale = 'celcius';
	}

	//Parse the converted temperature to a float and round to the nearest 2 significate figures
	convertedTemperature = Math.round(parseFloat(convertedTemperature*100))/100;
	//Set <h3> tag to state the previous temperature and show the value it has been converted to.
	convertion_display.innerHTML = `${temperature} degrees ${scale} is ${convertedTemperature} degrees ${currentScale}`;

	//Return the converted temperature for later conversion
	return convertedTemperature;
}

//Store necessary DOM elements to be used
let celcius_button = document.querySelector("#celcius_button");
let fahrenheit_button = document.querySelector("#fahrenheit_button");
let convertion_display = document.querySelector("#convertion_display");
let temperature_input = document.querySelector("#temperature_input");
//Storage for temperature value
let currentTemperature;
//Storage for temperature scale
let currentScale = "";

//Event listener for celcius button click
celcius_button.addEventListener("click", (event) => 
{
	//If the user has entered a temperature value
	if(temperature_input.value)
	{
		//Set current scale to celcius
		currentScale = "celcius";
		//Invoke convertUnit() with the form temperature from the user and the scale being celcius
		//Then set current temperature equal to the returned value of converted temperature
	 	currentTemperature = convertUnit(temperature_input.value, currentScale);
	}
})

//Event listener for fahrenheit button click
fahrenheit_button.addEventListener("click", (event) => 
{
	//If the user has entered a temperature value
	if(temperature_input.value)
	{
		//Set current scale to fahrenheit
		currentScale = "fahrenheit";
		//Invoke convertUnit() with the form temperature from the user and the scale being fahrenheit
		//Then set current temperature equal to the returned value of converted temperature
	 	currentTemperature = convertUnit(temperature_input.value, currentScale);
	}
})

//Event listener for <h3> click
convertion_display.addEventListener("click", (event) => 
{
	//If a current temperature is set
	if(currentTemperature || currentTemperature == 0){
		//Invoke convertUnit() with temperature from the previous conversion and the scale being the previously converted scale
		//Then set current temperature equal to the returned value of converted temperature
	 	currentTemperature = convertUnit(currentTemperature, currentScale);
	}
})
*/


/////////////////////
//Day 6 (THE DOM 2)//
/////////////////////

/*//Altering the text content here is possible
document.getElementById("para").textContent = "more text";

//Altering the text content here is possible too but the text is stored in the variable and can't be changed using "text"
//Gets only the text content of an element
let text = document.getElementById("para").textContent;
console.log(text);

//However, the actual text is saved at this point and cannot be altered via the text variable.
text = "nope";
console.log(text);*/

/*
//Get HTML content of an element
let text = document.getElementById("para").innerHTML;
//Log it to the console/
console.log(text);
*/

/*
//store "content" element in content variable
let content = document.getElementById("content");
//Creating a paragraph tag
let myPTag = document.createElement("p");

//Set p tag text content
myPTag.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ipsa voluptates molestias, dignissimos debitis ut perspiciatis id temporibus culpa possimus fugiat, consequuntur beatae aperiam officia ratione maiores similique, optio vitae.";
//Append child of content div
content.appendChild(myPTag);
//Append to content div. (Not supported by internet explorer)
// content.append(myPTag);

//Create a button and adding a class.
let myButton = document.createElement("button");
//Set class of element
myButton.className = "btn btn-primary";
//Set id of element
myButton.id = "myButtonID";
//Set text of element
myButton.textContent = "Click dis!";
//Removes class from element
myButton.classList.remove("btn-primary");
//Adds class to element
myButton.classList.add("btn-primary");
//Appent child of element
content.appendChild(myButton);
//Log class list of element to the console
console.log(document.getElementById("myButtonID").classList);


//Using setAttribute
let myImg = document.createElement("img");
//Add alt to image element
myImg.setAttribute("alt", "Add attribute from JS");
//Add image source to image element
myImg.setAttribute("src", "https://pbs.twimg.com/profile_images/584025370036314112/0maBx-gf_400x400.jpg");
//Append image to page
content.appendChild(myImg);

//Log the source url to the console
console.log(myImg.getAttribute("src"));
*/

/*
//Generate a page using only JavaScript
const script = document.querySelector("script");
const body = document.querySelector("body");

let newP = document.createElement("p");
let newH1 = document.createElement("h1");
let newFooter = document.createElement("footer");
let footerLink = document.createElement("a");
let newHeader = document.createElement("header");
let newUl = document.createElement("ul");


// Creates an li for the DOM.
// Expect a list of classes (string) and a string of text.
// Returns newElement appended to the nav.
function createLi(classArray, linkText) {
  let newLink = document.createElement("li");
  let aTag = document.createElement("a")
  aTag.setAttribute("href", "#");
  aTag.textContent = linkText;
  newLink.appendChild(aTag);
  for(let i = 0; i < classArray.length; i++) {
    newLink.classList.add(classArray[i]);
  };
  newUl.appendChild(newLink);
};
createLi(["pull-left"], "Home");
createLi(["pull-right"], "Contact");
createLi(["pull-right"], "About");

newUl.classList.add("nav", "nav-pills");

newHeader.appendChild(newUl);
body.insertBefore(newHeader, script);

let newDiv = document.createElement("main");
newDiv.classList.add("col-sm-6", "col-sm-offset-3", "text-center");

function createTextElement(elementType, text) {
  let newElement = document.createElement(elementType);
  newElement.textContent = text;
  return newElement;
};

let h1 = createTextElement("h1", "Hello World!");
let p = createTextElement("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

newDiv.appendChild(h1);
newDiv.appendChild(p);
body.insertBefore(newDiv, script);

footerLink.textContent= "Check me out";
footerLink.setAttribute("href","https://www.google.com/");
footerLink.setAttribute("target","blank");
newFooter.appendChild(footerLink);
newFooter.classList.add("text-center", "footer");
body.insertBefore(newFooter, script);

*/
//This examples
/*function printer()
{
	let stuff = {
		firstName: "Robert",
		lastName: "Hazler",
		id: 1234,
		fullName: () => {
			return this.firstName + " " + this.lastName;
		},
	};
	// console.log("thisPrinter:");
	// console.log(this);
	return stuff;
}


console.log(this.printer)
console.log(this.printer().fullName());
*/
// console.log("global this:");
// console.log(this)

/*
function fizzBuzz()
{
	let container = document.createElement("div")
	container.classList.add("col-sm-6", "col-sm-offset-3", "text-center", "container");
	let list = document.createElement("ol");
	for (let i = 1; i <= 100; i++)
	{
		let listItem = document.createElement("li");
		if(i % 15 == 0)
		{
			console.log("FizzBuzz");
			listItem.textContent = "FizzBuzz";
		}
		else if (i % 3 == 0) 
		{
			console.log("Fizz");
			listItem.textContent = "Fizz";
		}
		else if (i % 5 == 0)
		{
			console.log("Buzz");
			listItem.textContent = "Buzz";
		}
		else
		{
			console.log(i);
			listItem.textContent = i;
		}
		list.appendChild(listItem)
	}
	container.appendChild(list);
	body.insertBefore(container,script);
}
fizzBuzz();
*/


/////////////////////
//Day 7 (Take Home)//
/////////////////////

/*
//Prompts for user inputs. Use an argument to changed desired prompts and functions to be invoked
function userInfoCollector(promptType)
{
	let userInput;
	//If promptType is title
	if (promptType == "title")
	{
		//Prompt user for a title for their blog post
		userInput = prompt("Enter a title for this blog post: ");
	}
	//If promptType is sentence
	else if (promptType == "color")
	{
		//Prompt user for color for the background of their blog post
		userInput = prompt("Of the following, which is your favorite color: \n"
   					+ "Red, Orange, Yellow, Green, Blue, Pink, Purple, Black, White, Grey");
	}
	//All other cases (which should be a string by default of prompt)
	else
	{
		//Prompt user for a blog entry
		userInput = prompt("Enter a your daily blog entry:");
	}

	return invalidPromptChecker(userInput, promptType);
}

//invalidPromptChecker() tests a prompt and reinvokes the userInfoCollector() with the appropriate type
//if the user hits cancel or ok without entering a value or somehow enters a null or unidentified value.
function invalidPromptChecker(input, type)
{
	if(!input)
	{
		alert(`${input} is not a valid entry, please try again.`)
		return userInfoCollector(type);
	}
	else if(type === "color")
	{
		//If input is valid and type is color verify that the color is valid
		return validColorChecker(input);
	}
	else
	{
		return input;
	}
}

//Check for a valid color
function validColorChecker(favoriteColor)
{
	//If the color is in the list return it
	if(["red", "orange", "yellow", "green", "blue", "pink", "purple", "black", "white", "grey"].includes((favoriteColor.toLowerCase())))
	{
		return favoriteColor;
	}
	//Else tell the user it is invalid and ask them again
	else
	{
		alert("That was an invalid color, please choose one from the list.")
		return userInfoCollector("color");
	}
}

//Create an html text element
function createTextElement(elementType, text) {
	//Store new element
	let newElement = document.createElement(elementType);
	//Set text content equal to the entered value in the text argument
	newElement.textContent = text;
	//Return newly created elemtn
	return newElement;
}

//Generate a page using only JavaScript
const script = document.querySelector("script");
const body = document.querySelector("body");

//Create main div
let mainDiv = document.createElement("main");
//Add classes to center main div
mainDiv.classList.add("col-sm-6", "col-sm-offset-3", "text-center");
//Create a button
let createPostButton = document.createElement("button");
//Set class of button
createPostButton.className = "btn btn-primary";
//Set id of button
createPostButton.id = "createPostButtonID";
//Set text of button
createPostButton.textContent = "Create Your First Post!";

//Add button to div
mainDiv.appendChild(createPostButton);
//Insert div into page before script
body.insertBefore(mainDiv, script);


//Store button element
let button = document.querySelector('#createPostButtonID');

button.addEventListener('click', () => 
{
	//Create h1 to write title
	let titleH1 = createTextElement("h1", userInfoCollector("title"));
	//Create p of what the user did today
	let whatUserDidP = createTextElement("p", userInfoCollector("blog"));
	//Set background of p to users favorite color
	let favoriteColor = userInfoCollector("color");
	//Store current timestamp
	let currentTimeStamp = new Date().toLocaleString(undefined, {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	});
	//Create p for timestamp
	let newTimeStamp = createTextElement("p", `Posted on: ${currentTimeStamp}`);
	//Change text on button
	createPostButton.textContent = "Create Another New Post";
	//Add h1 to div
	mainDiv.insertBefore(titleH1, createPostButton);
	//Add timestamp for post
	mainDiv.insertBefore(newTimeStamp, createPostButton);
	//Add p to div
	mainDiv.insertBefore(whatUserDidP,createPostButton);
	//Insert div into page before script
	body.insertBefore(mainDiv, script);
	//Set p tag text alighment to justify
	whatUserDidP.style.textAlign = "justify";
	//Set p tag to users favorite color
	whatUserDidP.style.backgroundColor = favoriteColor;
})
*/

/////////////////
//Day 8 (Forms)//
/////////////////

//Generate a page using only JavaScript
// const script = document.querySelector("script");
// const body = document.querySelector("body");

// function fizzBuzz(count, value1, value2)
// {
// 	const value3 = value1 * value2;
// 	let container = document.createElement("div")
// 	container.classList.add("col-sm-6", "col-sm-offset-3", "text-center", "container");
// 	let list = document.createElement("ol");
// 	for (let i = 1; i <= count; i++)
// 	{
// 		let listItem = document.createElement("li");
// 		if(i % value3 === 0)
// 		{
// 			listItem.textContent = "FizzBuzz";
// 		}
// 		else if (i % value1 === 0) 
// 		{
// 			listItem.textContent = "Fizz";
// 		}
// 		else if (i % value2 === 0)
// 		{
// 			listItem.textContent = "Buzz";
// 		}
// 		else
// 		{
// 			listItem.textContent = i;
// 		}
// 		list.appendChild(listItem)
// 	}
// 	container.appendChild(list);
// 	body.insertBefore(container,script);
// }
// fizzBuzz(50, 2, 5);

// //Store specific form in the messageForm variable. The html form can either be fetched by name or by id
// let messageForm = document.forms.messageForm;
// //Store the specific message input by using the array brackets to choose which input in the form by name or id
// let message = messageForm["msg"];
// //Store the value in the input of the mesage form from above
// let messageValue = message["value"];

// console.log(messageForm);
// console.log(message);
// console.log(messageValue);

// //Catches input submit events
// messageForm.addEventListener("submit", event =>
// {
// 	event.preventDefault();
// 	console.log(event.target.msg.value);
// })

//!!!Do not do this!!!!
// function submitForm()
// {
// 	console.log(document.getElementById("message").value);
// }

// //Generate a page using only JavaScript
// const script = document.querySelector("script");
// const body = document.querySelector("body");

// let name = "Robert";
// var myName = "robert";
// let age = 28;
// let currentClass = "JavaScript";

// console.log(this.name);
// naming();

// function naming(name, myName)
// {
// 	name = "not robert";
// 	myName = "also not robert";

// 	console.log("in")
// 	console.log(this.name);
// 	console.log(name);
// 	console.log(myName);
// 	console.log(this.myName);
// }

// console.log("out");
// console.log(this.name);
// console.log(name);
// console.log(myName);
// console.log(this.myName);


/*function aboutMe() 
{
	let me = {
		firstName: "Robert",
		lastName: "Hazler",
		age: 28,
		currentClass: "JavaScript",
		fullName: function () { return `${this.firstName} ${this.lastName}`}
	}

	//console.log(`${me.firstName} ${me.lastName}`);
	console.log(me.fullName());

}

aboutMe();*/

//Generate a page using only JavaScript
/*const script = document.querySelector("script");
const body = document.querySelector("body");


//Store specific form in the messageForm variable. The html form can either be fetched by name or by id
let messageForm = document.forms.messageForm;
//Store the specific message input by using the array brackets to choose which input in the form by name or id
let message = messageForm["msg"];
//Store the value in the input of the mesage form from above
let messageValue = message.value;

//Catches input submit events
messageForm.addEventListener("submit", event =>
{
	event.preventDefault();
	let list = document.querySelector("#list");
	let newMessage = document.createElement("li");
	let message = event.target["msg"].value;

	newMessage.textContent = message;
	list.appendChild(newMessage);
	messageForm.reset();

})

function generateList(){
	let fullList = 
	[
		'First',
		'Second',
		'Third',
		'Fourth'
	];

	let list = document.getElementById("list");

	for (var i = 0; i < fullList.length; i++) 
	{
		let msg = document.createElement("li");
		msg.textContent = fullList[i];
		msg.id = `item-${i+1}`;
		list.appendChild(msg);
	}	
}


generateList();
*/
// function createLi(classArray, linkText) {
//   let newLink = document.createElement("li");
//   let aTag = document.createElement("a")
//   aTag.setAttribute("href", "#");
//   aTag.textContent = linkText;
//   newLink.appendChild(aTag);
//   for(let i = 0; i < classArray.length; i++) {
//     newLink.classList.add(classArray[i]);
//   };
//   newUl.appendChild(newLink);
// };


///////////////////
//Day 9 (Objects)//
///////////////////


// let string = new String("string");
// console.log(Object.getPrototypeOf(string));

// let num = new Number(1);
// console.log(Object.getPrototypeOf(num));

// let thing1 = 1;
// console.log(Object.getPrototypeOf(thing1));

// let thing2 = "1";
// console.log(Object.getPrototypeOf(thing2));


// let storageObject = 
// {
// 	movieTitle: "The Matrix",
// 	gameTitle: "Legend of Legaia",
// 	bookTitle: "Cirque Du Freak",
// 	groupGameTitle: {
// 		boardGameTitle: "TI"
// 	}
// }

// console.log(storageObject, storageObject.hasOwnProperty("movieTitle"), storageObject.hasOwnProperty("boardGameTitle"));

// console.log(storageObject.movieTitle, storageObject["gameTitle"], storageObject.groupGameTitle.boardGameTitle);

// let newString = new String("blah blah"), newArray = new Array(["stuff"]), newObject = new Object({name: "Robert"}), newBoolean = new Boolean(true), newNumber = new Number(4);

// console.log(newString, newArray, newObject, newBoolean, newNumber);

// let user = 
// {
// 	id: Integer,
// 	date_created: Date,
// 	password: Hashed String,
// 	user_name: String,
// 	email_address: String,
// 	first_name: String,
// 	last_name: String
// }
/*
function User(email, userName, password)
{
	this.email = email;
	this.user_name = userName;
	this.password = password;
	this.getUserName = function ()
	{
		return this.user_name;
	};
	this.isValidUser = function ()
	{
		if(this.email && this.user_name && this.password)
		{
			return true;
		}
		else
		{
			return false;
		}
	};
}

let email, userName, password;

email = prompt("Enter email address:");
userName = prompt("Enter user name ");
password = prompt("Enter password");

user = new User(email, userName, password);

console.log(user.getUserName());
console.log(`This is a valid user: ${user.isValidUser()}`);
*/


///////////////////////////////////////////////////////////////////
//Day 10 (Timers / LocalStorage / sessionStorage / strict / life)//
///////////////////////////////////////////////////////////////////

/*
function delayAlert(duration) 
{
	duration = duration * 1000
	timer = setTimeout(triggerAlert, duration);
}

function cancelAlert()
{
	clearTimeout(timer);
} 

function delayIntervalAlert(duration) 
{
	duration = duration * 1000
	interval = setInterval(triggerAlert, duration);
}

function cancelIntervalAlert()
{
	clearInterval(interval);
} 

function triggerAlert() 
{
	alert("Timer Complete");
}


let timer, interval;
let button = document.querySelector("#timer-start");
let stopButton = document.querySelector("#timer-stop");
let intervalButton = document.querySelector("#interval-start");
let stopIntervalButton = document.querySelector("#interval-stop");

button.addEventListener("click", event => 
{
	let time = prompt("How many seconds would you like to wait?")
	delayAlert(time);
});

stopButton.addEventListener("click", event => 
{
	cancelAlert();
});

intervalButton.addEventListener("click", event => 
{
	let time = prompt("How many seconds would you like to wait between each loop?")
	delayIntervalAlert(time);
});

stopIntervalButton.addEventListener("click", event => 
{
	cancelIntervalAlert();
});
*/

function timeDigits(i)
{
	if(i < 10)
	{
		return "0" + i ;
	}
	return i;
}

function displatClock()
{
	const clock = document.querySelector("#clock");

	let time, hour, min, sec;
	setInterval(() => {
		time = new Date();
		sec = timeDigits(time.getSeconds());
		if(sec == 0 || !min){
			min = timeDigits(time.getMinutes());
			if(min == 0 || !hour){
				hour = time.getHours();
			}
		}
		clock.textContent = `${hour}:${min}:${sec}`;
	}, 1000);
}


displatClock();


function storeUser(username)
{
	localStorage.setItem("user", username);
}

function getUser()
{
	let username =  document.querySelector("#currentUser");
	username.textContent = localStorage.getItem("user");
}

document.querySelector("#set-username").addEventListener("click", event =>{
	let user = prompt("What is your username?");
	storeUser(user);
})

document.querySelector("#get-username").addEventListener("click", event =>{
	getUser();
})


//IFFE
// let number = 1;
// let getNumber = (function(x)
// {
// 	return function() {
// 		alert(x);
// 	};
// }(number));

// number = 2;

// getNumber();

