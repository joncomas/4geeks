var mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];

var initialValue = Math.round(mySampleArray.length / 2);
var stopValue = mySampleArray.length;
var increasingValue = 1;

for(var i = initialValue; i<stopValue; i = i + increasingValue)
{
	console.log(mySampleArray[i]);
}

var mySampleArray = ['Esmeralda','Kiko','Ruth','Lebron','Pedro','Maria','Lou','Fernando','Cesco','Bart','Annie'];

//your code here

var mySampleArray = ['Esmeralda','Kiko','Ruth','Lebron','Pedro','Maria','Lou','Fernando','Cesco','Bart','Annie'];

//your code here
let switcher = mySampleArray[2] + mySampleArray[4];
mySampleArray.splice(0,0,switcher);
mySampleArray.splice(1,0,"Steven");
mySampleArray.pop();
mySampleArray.push("Pepe");
mySampleArray.splice(2,2);
mySampleArray.reverse(mySampleArray);
console.log(mySampleArray);