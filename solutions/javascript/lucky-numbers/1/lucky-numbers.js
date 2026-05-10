// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let number1 = Number(String(array1).replace(/[,]/g, ''));
  let number2 = Number(String(array2).replace(/[,]/g, ''));
  return number1 + number2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let palindrome = Number(String(value).split('').reverse().join(''))
  if(value === palindrome){
    return true;
  }
  return false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(input === '' || input === null || input === undefined){
    return 'Required field';
  } else if(Number(input) === 0 || isNaN(Number(input))){
    return 'Must be a number besides 0';
  } else {
    return '';
  }
}
