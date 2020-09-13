var myArray = ["man","woman","girl","boy"];
console.log(myArray);
myArray.push("Vincent");
console.log(myArray)
myArray.pop();
console.log(myArray)
myArray[1] = "chrisbone";
console.log(myArray)
myArray.splice(0,0,"kwame")
console.log(myArray)
myArray.splice(3,0,"clement")
console.log(myArray)
myArray.splice(3,1)
console.log(myArray)
myArray.splice(3,0,"clement")
console.log(myArray)
var mySecondArray = ['edem','joan','stephen','Yaw'];
var allArray = myArray.concat(mySecondArray)
allArray.sort()
console.log(allArray)
allArray.reverse()
console.log(allArray)