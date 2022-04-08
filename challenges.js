
console.log("Foundation Challenges: Task #1");

/***************************
*
* @param {boolean[]} booleanArr [true, true, false, false, true]
* @return {boolean[]} [true, true, true]
* ***********/

const removeFalseValues = (booleanArr) => booleanArr.filter((value) => value);

const booleanArrTest = [true, true, false, false, true];
console.log("first length: " + booleanArrTest.length);
//const booleanArr = [1, 2, 3]
//const removeFalseValuesResult = removeFalseValues(booleanArrTest);
//console.log(removeFalseValuesResult);

const removeFalseValuesStrictlyBooleans = (booleanArr) => {
  if (!booleanArr || !booleanArr.length) {
    console.error('you can use this function with booleans only');
    return
  }
  const isArrayOfBooleans = booleanArr
    .map(value => typeof value === 'boolean') // [true, true, true, true, true]
    .reduce((previous, current) => {
      return previous && current
      //if (!acc) return acc;
      // else return val;
    }, true)
  if (!isArrayOfBooleans) {
    console.error('you can use this function with booleans only');
    return
  }
  return booleanArr.filter((value) => value);
  //return booleanArr.filter((value) => value);
}
console.log(removeFalseValuesStrictlyBooleans(booleanArrTest));

console.log("Foundation Challenges: Task #2");
const multiply = value => value * 100;
const convertToString = value => `${value}%`;

const numbersArr = [1, .5, .7, .25];
const numbersArrPercentage = numbersArr
  .map(multiply)
  .map(convertToString);
console.log(numbersArrPercentage);


console.log("Foundation Challenges: Task #3");
/**
* A function that takes an array of possessions and a name.
* The functions needs to create a new array with the name prefixed to each item.
*
* @param {string[]} possessionsArr ["shoes", "jacket", "belt"]
* @param {string} name "disco"
* @return {string[]} ["disco shoes", "disco jacket", "disco belt"]
*/

const possessionsArr = ["shoes", "jacket", "belt"];
const nameInitial = "disco";

const addName = (name, value) => `${name} ${value}`;

const createListOfPoessessions = (possessionsArr, name) => newPossessionsArr = possessionsArr
  .map(value => addName(name, value));
;
console.log(createListOfPoessessions(possessionsArr, nameInitial));

console.log("Intermediate Challenges: Task #1");
/**
 * A function that takes a string of numbers joined with a "+" and returns an array of those numbers.
 * The strings will need to be converted into numbers.
 * e.g 1 instead of "1"
 *
 * @param {string} numberString - "1+2+3+4+5"
 * @return {number[]} [1, 2, 3, 4, 5]
 */

/*export const convertStringToNumbersArray = (numberString) => {
 return;
};*/

const numberString = "1+2+3+4+5";
const parseToInteger = (value => parseInt(value));

const numberStringNew = numberString.split('+')
  .map(parseToInteger);
console.log(numberStringNew);

console.log("Intermediate Challenges: Task #2");

/**
 * A function that takes a string of numbers joined with a "+" and creates a new array based on if the number is even or odd.
 * Every number in the string will need to checked.
 *
 * @param {string} numberString - "1+2+3+4+5"
 * @return {string[]} ['odd', 'even', 'odd', 'even', 'odd']
 */
const defineOddOrEven = value => {
  if (value % 2) return 'odd';
  else return 'even';
}

const createOddEvenArray = numberString => {
  return numberString.split('+')
    .map(parseToInteger)
    .map(defineOddOrEven);
};
console.log(createOddEvenArray(numberString));


console.log("Intermediate Challenges: Task #3");
/**
 * A function that takes an array of book titles and a search term.
 * The function needs fo remove any book titles that do not include the search term.
 *
 * @param {string[]} booksArr ["JavaScript: The Definitive Guide", "JavaScript: The Good Parts", "The Google story", "React for Dummies"]
 * @param {string} - searchTerm - "Google"
 * @return {string[]} - ["The Google story"]
 */

const booksArr = ["JavaScript: The Definitive Guide", "JavaScript: The Good Parts", "The Google story", "React for Dummies"];
const searchTerm = "Google";
const searchByKeyword = (value, searchTerm) => {
  if (value.includes(searchTerm)) return value;
}

const filterBooksBySearch = (booksArr, searchTerm) => {
  return booksArr
    .filter(value => searchByKeyword(value, searchTerm));
};
console.log(filterBooksBySearch(booksArr, searchTerm));

console.log("Advanced Challenges: Task #1");

/**
 * A function that takes a list, cleans each item and joins them with a +.
 * When it "cleans" it remove's whitespace and makes sure the string is lowercase.
 *
 * This function is failing the test's can you figure out why?
 * The bug is within the function, the test's are fine.
 * Can you get it to pass the tests?
 *
 * @param {string[]} stringArr ["  dIsco", " ShOes "]
 * @return {string} "disco+shoes"
 */

const cleanStr = string => string.trim().toLowerCase();

const formatStringArray = (stringArr) => {
  const cleanedArr = stringArr.map(cleanStr);

  const joinedString = cleanedArr.join("+");

  return joinedString;
};

const stringArr = ["  dIsco", " ShOes "];
console.log(formatStringArray(stringArr));

console.log("Advanced Challenges: Task #2");

/**
 * A function that takes a string, cleans it and formats it based on a condition.
 *
 * It will need to remove anything that is NOT a letter from the string.
 * - e.g numbers, punctuation, whitespace.
 *
 * If the index of the letter is even the letter needs to be Uppercase.
 * If the index of the letter is odd the letter needs to be Lowercase.
 *
 * @param {string} string " 22 $$He LL--O!%^& "
 * @return {string[]} [ 'H', 'e', 'L', 'l', 'O' ]
 */
let index = 0;
const inputString = " 22 $$He LL--O!%^& ";

const formatString = (inputString) => {
  const regexp = /[^a-zA-Z]/g;
  const newStr = inputString.replace(regexp, "");
  let finalArray = [];
  const finalString = newStr.split("");
  for (let i = 0; i < finalString.length; i++) {
    if (i%2) finalString[i] = finalString[i].toLowerCase();
    else finalString[i] = finalString[i].toUpperCase();
  }  
  return finalString;
};
console.log(formatString(inputString));

console.log("Expert Challenge");

/**
 * A function that takes an array and FizzBuzzes it.
 *
 * It should remove anything from the given array that is NOT a POSITIVE number or a POSITIVE number as a STRING.
 *
 * If we were given [-1, "disco", "3", 5, "15", 2, 0]
 * We would be left with this ["3", 5, "15", 2]
 *
 * It then needs to create a NEW array from this clean array based on the conditons below:
 *
 * For multiples of three replace the number with "Fizz".
 * For multiples of five replace the number with "Buzz".
 * For numbers which are multiples of both three and five replace the number with "FizzBuzz".
 * All the other numbers need to be strings.
 *
 * @param {*[]} mixedArray [-1, "disco", "3", 5, "15", 2, 0]
 * @return {string[]} [ "Fizz", "Buzz", "FizzBuzz", "2" ]
 */
const mixedArray = [-1, "disco", "3", 5, "15", 2, 0];
const cleanArray = value => {
  if (((typeof value === 'number') && (value > 0)) || ((typeof value === 'string') && (Number(value) > 0))) return value;
}

const changeFizzBuzz = value => {
  if (Number(value)%3 === 0 && Number(value)%5 === 0) return "FizzBuzz";
  else if ((Number(value)%3 == 0)) return "Fizz";
  else if ((Number(value)%5 == 0)) return "Buzz";
  else return value.toString();
}

const fizzBuzz = mixedArray => {
  const cleanedArray = mixedArray
    .filter(cleanArray);

  const finalArray = cleanedArray
    .map(changeFizzBuzz);
  return finalArray;
};
console.log(fizzBuzz(mixedArray));

