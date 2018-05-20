/**
 * Mini quiz covering JS1 module (week-1, week-2, week-3) material.
 * Please read the instructions below carefully.
 * Answer questions directly here.
 */

console.log("=============Question 1=============");
// Write a function that returns the average of three numbers.
// Call it and print the result to console.
function average(x,y,z){
  let sum = x +y+z;
  let ave = sum/3;
  return ave;
}
console.log("the avarerage of the three nubers are :", average(24,45,89));

console.log("=============Question 2=============");
// The following code works, but there are some problems.
// Make the appropriate corrections, and describe what was wrong.
var x = 3;
function double(number) {
  return number * 2;
}
var x = double(x);
console.log("x is now", x);
console.log("When I double it again, x is", double(6));

// <Write description of what was wrong and how you fixed it here.>

console.log("=============Question 3=============");
// Write down the order of function calls and their parameters in the code below.
// 1. add(4,1)
// 2. multiply(4,1)
// 3. multiply(multiply(3, 7), add(4, 1)), 6)
// 4. add(multiply(multiply(3, 7), add(4, 1)), 6))
// 5. format(add(multiply(multiply(3, 7), add(4, 1)), 6))
var result = format(add(multiply(multiply(3, 7), add(4, 1)), 6));
console.log(result);

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function format(num) {
  return "£" + num.toFixed(2);
}

console.log("=============Question 4=============");
var array = ["a", "b", "c", "d", "e", "f", "g"];
// Output to console the first, fourth, and the last elements of an array.
console.log("the first element: "+array[0],"the fourth element is:  "+array[3],"the last element is: "+array[array.length-1]);
// Now, output to console a new array made up of the last four elements of the array.
console.log("the new array is: "+array.slice(4));
// Lastly, change the second to last element to uppercase.
var uppercaseArr = array.slice(2,7).map(function(item){
  return item.toUpperCase();
;});
console.log("the new capitalised array is: "+uppercaseArr);

console.log("=============Question 5=============");
// The following code doesn't work.
// Make the appropriate corrections, and describe what was wrong.
var names = ["Jonny", "Martyna", "Will", "German"];

function startsWithM(name) {
  if ((name.charAt(0) == "M")) {
    return true;
  } else {
    return false;
  }
}
console.log("Found a name that starts with M:", names.find(startsWithM));

// <Write description of what was wrong and how you fixed it here.>
//the way of referral withing the (if condition) was not SVGComponentTransferFunctionElement. It was used the item of the array rather then using the name if the array and the it referring to the first element inthe array rather than the first chrarecter of the element
console.log("=============Question 6=============");
// Write a function that will capitalize all vowels (a, e, i, o, u) in given text.
// Call the function and output result to console.
var text = "code your future!"; // ==> "cOdE yOUr fUtUrE!".


console.log("=============Question 7=============");
// Write a function that counts how many numbers in a given array satisfy ALL of the following:
// 1. positive
// 2. multiple of 3 (e.g. 3, 6, 9, 12 ...)
// 3. doesn't end with 0.
// Call the function and output result to console.
var numbers = [-3, 4, 8, -6, 90, 33, -5, 6, 18, 300]; // Should output 3.
function arraysatisfyngElements(numbers){
  return numbers.forEach((numbers,i,number)=>{
    var satisfiedArr;
    if (numbers[i] && numbers[i]%3 == 0 && numbers[i] ==! 0){
     satisfiedArr = satisfiedArr.push(number);
    }
    return satisfiedArr;
  });
   
}
console.log("the new array with satisfying element: "+arraysatisfyngElements(numbers));
// Now filter out numbers that do not satisfy the conditions from the array.
// Print each of the resulting numbers on a separate line, in ascending order.

/**
 * Expected output:
 *
 * Count: 2
 * 6
 * 18
 * 33
 */
