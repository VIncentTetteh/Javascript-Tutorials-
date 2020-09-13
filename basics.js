//variables
console.clear();
var numOne = 25;
var numTwo = 30;
var sum = numOne + numTwo;
// console.log(sum);
// console.log(typeof(sum)); 


//system math functions

var strNum1 = 10;
var strfloat = 10.23566;
var strNum2 = "15.25";

// using number functions
// console.log(strNum1.toString());
// console.log(strfloat.toFixed(4));
// console.log(parseFloat(strNum2));
// console.log(parseInt(strNum2));
// console.log(toString(500));
// console.log(parseInt(10));

//javascript strings and string functions

// var firstName = "Vincent";
// var secondName = "Tetteh";
// console.log(firstName.toLocaleUpperCase());
// console.log(firstName.toLocaleUpperCase() + " " + secondName + " is a javascript developer");
// console.log(firstName.length);
// console.log(secondName.substr(2));
// console.log(firstName.slice(0,7));
// console.log(secondName.indexOf('t'));
// console.log(secondName.lastIndexOf('nt'));
// for (let name = 0; name < firstName.length; name++) {
//     for (let name2 = 0; name2 < secondName.length; name2++) {
//         const element = secondName[name2];
//         const element2 = firstName[name];
//         console.log(`${element2} is maped to ${element}`);
        
//     }
    
// }

//binary search algorithm 
// function binary(value, list) {
//     let first = 0;
//     let last = list.lenght - 1;
//     let position = -1;
//     let found = false;
//     let middle;
//     while (found === false && first <= last) {
//         middle = Math.floor((first + last)/ 2);
//         if (list[middle] == value) {
//             found = true;
//             position = middle;
//         }
//         else if (list[middle] > value) {
//             last = middle -1;
//         }
//         else{
//             first = middle + 1;
//         }
//         return position;
//     }
   
    
// }

// console.log(binary(5,[1234567890]));

//string funtions continue: split,concat,+,trim
// var myStrings = "hello world is every programmer first code";
// console.log(myStrings.split(" "));

// var yourStrings = "         how do you do sweetheart";
// console.log(yourStrings.trim());

// var firstName = "Vincent";
// var secondName = "Tetteh";

// console.log(firstName.concat(" ",secondName));
// console.log(`your first name is ${firstName} and you second name is ${secondName}`)
// console.log(((firstName == secondName)? firstName.concat(secondName) : `${firstName} is not your name`));

//null and undefined
var myvar; //this is undefined
myvar = null; //this is null
 