// @ts-nocheck
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

// @ts-ignore
import { type } from 'node:os';
import { ElectronicDevice } from './lib.js';

/**
 * Checks if input is a boolean.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a boolean
 */
export function isBoolean(value) {
  if(value === true || value === false){
    return true;
  };
  return false;
}

/**
 * Checks if input is a finite number or bigint.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a finite number or bigint
 */
// @ts-ignore
export function isNumber(value) {
  let valueType = typeof value;
  if((valueType === 'number' && isFinite(value)) || typeof value === 'bigint'){
    return true;
  }
  return false;
}

/**
 * Checks if a value is an object.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an object.
 */
// @ts-ignore
export function isObject(value) {
  if(value !== null){
    if(typeof value === 'object'){
      return true;
    } else {
      return false;
    }
  };
  return false;
}

/**
 * Checks if a value is a numeric string.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a numeric string.
 */
// @ts-ignore
export function isNumericString(value) {
  return Number.isFinite(Number(value));
}

/**
 * Checks if an object is an instance of the `ElectronicDevice` class or one of its children.
 *
 * @param {object} object
 * @returns {boolean} whether the object is an instance of the `ElectronicDevice` class or one of its children.
 */
// @ts-ignore
export function isElectronic(object) {
  throw new Error('Remove this line and implement the isElectronic function');
}

/**
 * Checks if a value is a non empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a non empty array.
 */
// @ts-ignore
export function isNonEmptyArray(value) {
  throw new Error(
    'Remove this line and implement the isNonEmptyArray function',
  );
}

/**
 * Checks if a value is an empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an empty array.
 */
// @ts-ignore
export function isEmptyArray(value) {
  throw new Error('Remove this line and implement the isEmptyArray function');
}

/**
 * Checks if a value has a "type" property or method.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a "type" property or method.
 */
// @ts-ignore
export function hasType(object) {
  throw new Error('Remove this line and implement the hasType function');
}

/**
 * Throws an error if an object is missing an "id" property or method.
 *
 * @param {object} object
 * @returns {never|void} undefined if the input has an "id" property or method, otherwise throws an error.
 */
// @ts-ignore
export function assertHasId(object) {
  throw new Error('Remove this line and implement the assertHasId function');
}

/**
 * Checks if a value has an "id" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has an "id" property.
 */
// @ts-ignore
export function hasIdProperty(object) {
  throw new Error('Remove this line and implement the hasIdProperty function');
}

/**
 * Checks if a value has a defined "type" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a defined "type" property.
 */
// @ts-ignore
export function hasDefinedType(object) {
  throw new Error('Remove this line and implement the hasDefinedType function');
}
