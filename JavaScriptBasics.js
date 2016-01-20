/*alert("hello world");

function change() {
	document.getElementById('example').innerHTML = "hello world";
}

/*Alerts , Comments*/

//alert("What Will Be Displayed In the Alert");

/*Data Types
String- "Hello World"
Number- 5,10,15,20 
Boolean- true, false
Undefined- (no value) (also contains undefined/null/NaN)
*/

/*Debug*/

/*alert();
console.log();
document.getElementById("some-name").innerHTML = "NEW Text";

/*Variables*/

/*var x = 5
var y = 10
var result = x + y;

console.log(result); /*what gets displayed on the console*/

/*Boolean*/

//(5 > 3) //returns true

/*var x = 100;
var y = 200;

console.log(x<y);

/* Arrays -already in an order */

//used to hold a collection of data, can be numbers or words

//["Soccer" , "Football" , "Tennis"];
//["Baseball" , "Hockey" , 10 , 20]; can include multiple data types

/*var dog = ["brittany", "boxer", "pug"];
var size = ["small", "medium" , "large"];
console.log var dogs = [dog, size];

/*Assigning String to Variable*/

/*var noun = "dog";
var verb = "runs";
var sentence = noun + verb + "fast."; //can have an array inside an array (multidemintional array)

console.log(sentence)

//Objects- does not maintain an order

var brian { firstname: "Brian" , lastname: "Altman" , birthday: "04/09/1990" , interests: ["soccer", "skiing"]};

console.log(brian.firstname, brian.lastname, brian.birthday)
console.log(brian.interests[1]); /*will display skiing, starts at [0]*/


/*var password = "chicken";

is (password === "duck") {

}

//over 21

var age = 11;

if (age >= 21) {
	console.log("welcome to site");
}
else {
	console.log("Sorry");
}

*/
//Exercises in Class Powerpoint

/*var number = 8;

if (number < 10) {
	alert("Congrats Your Number is Less Than 10");
}
else {
	alert("Your number is greater than 10");
}
EXERCISES

function alertName(somePersonsName, adjective) {
	return alert(somePersonsName + "is" + adjective);
}
alertName("Zach", "Cool");*/

// function alertName(name){
// 	return alert("Hello" + name);
// }
// alertName("Brian");

// function noarguement () {
// 	return alert("BlahBlahBlah");
// }
// noarguement();

// function opendoor (door) {
// 	if (door === 1) {
// 		return alert("you won a pizza");
// 	} else if (door === 3){
// 		return alert("you won a coffee");
// 	} else {
// 		return alert("you are a loser!")
// 	}
// alert(opendoor(1));

beers = ["Lagunitas" , "Peak"]
for(var i= 0; i< beers.lengh; i++) {
	console.log(beers[i])
}

//Returns: "Lagunitas" "Peak"

