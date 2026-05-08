// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let number = 2.5;
  switch(name){
    case 'Pure Strawberry Joy':
      number = 0.5;
      break;
    case 'Energizer':
      number = 1.5;
      break;
    case 'Green Garden':
      number = 1.5;
      break;
    case 'Tropical Island':
      number = 3;
      break;
    case 'All or Nothing':
      number = 5;
      break;
  }
  return number;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  if(wedgesNeeded !== 0){
    let limesCounted = 0;
    let arrayPosition = 0;
    while(limesCounted < wedgesNeeded && arrayPosition < limes.length){
      let size = limes[arrayPosition];
      let wedges = 0;
      switch(size){
        case 'small':
          wedges = 6;
          break;
        case 'medium':
          wedges = 8;
          break;
        case 'large':
          wedges = 10;
          break;
      }
      limesCounted = limesCounted + wedges;
      arrayPosition++;
    }
    return arrayPosition;
  }
  return 0;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timeToMix = 0;
  let index = 0;
  let remainingOrders = [];
  while(timeToMix < timeLeft && index < orders.length){
    let order = orders[index];
    let timeForCocktail = timeToMixJuice(order);
    timeToMix += timeForCocktail;
    index++;
  }
  for(let i = index; i < orders.length; i++){
    remainingOrders.push(orders[i]);
  }
  return remainingOrders;
}
