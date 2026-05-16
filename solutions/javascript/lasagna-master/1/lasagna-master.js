 
/// <reference path="./global.d.ts" />
// @ts-nocheck

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time){
    if(time === 0){
        return "Lasagna is done."
    } else if(time > 0){
        return "Not done, please wait."
    } else if(time === undefined) {
        return "You forgot to set the timer."
    }
}

export function preparationTime(layers, time=2){
    let totalTime = layers.length * time;
    return totalTime;
}

export function quantities(layers){
    return {
        'noodles': layers.filter(item => item === 'noodles').length*50,
        'sauce': layers.filter(item => item === 'sauce').length*0.2
    }
}

export function addSecretIngredient(friendsList, myList){
    let lastItem = friendsList.length - 1;
    myList.push(friendsList[lastItem]);
    return;
}

export function scaleRecipe(recipe, numberOfPortions){
    let scale = {}
    for(let key of Object.keys(recipe)){
        scale[key] = (recipe[key]/2)*numberOfPortions;
    }
    return scale;
}