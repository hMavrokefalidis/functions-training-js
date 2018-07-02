// 1. Write a function called 'multiply' that multiplies two numbers and returns the result
function multiply (num1,num2) {
  var result = num1 * num2
  return result;
}

// 2. Write a function called 'addThree' that adds three numbers together and returns the result
function addThree (num1,num2,num3){
  var result = num1 + num2 +num3;
  return result;
}
// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers
function smallestNumber(num1, num2){
  if (num1 > num2) {
    return num2;
  }else{
    return num1;
  }
}

// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers
function maxOfThree(num1,num2,num3){
  var result = Math.max(num1,num2,num3);
  return result;
}


// 5. Write a function called 'reverseString' that returns the reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// 6. Write a function called 'disemvowel' that returns the vowels from the string parameter
function disemvowel(justaString){
  return justaString.replace(/[aeiou]/gi, '');
}
// 7. Write a function called 'removeOdd' that removes all ODD number from an array
function removeOdd(arrayOfNumbers){
  var newArray = [];
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    if (!(arrayOfNumbers[i] % 2)) {
      newArray.push(arrayOfNumbers[i])
    }
  }
  return newArray;
}
// 8. Write a function called 'removeEven' that removes all EVEN number from an array
function removeEven(arrayOfNumbers){
  var newArray = [];
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2) {
      newArray.push(arrayOfNumbers[i])
    }
  }
  return newArray;
}
// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length
function longestString(arrayOfStrings){
  var result;
  for (var i = 1; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].length > arrayOfStrings[i-1].length) {
      result = arrayOfStrings[i];
    }else {
      result = arrayOfStrings[i-1];
    }
  return result;
  }
}
// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array,
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]
function allElementsExceptFirstThree(aRandomArray){
  for (var i = 0; i < 3; i++) {
      aRandomArray.shift();
    }
    return aRandomArray;
}
//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}
function convertArrayToAnObject(makeItAnObject){
  var object = {};
  for (var i = 0; i < makeItAnObject.length; i++) {
    if (i == 0 ||  i % 2) {
      object[i] = makeItAnObject[i]
    }else {
      object[i-1] = makeItAnObject[i]
    }
  }
  return object;
}
