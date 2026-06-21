// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */


// @ts-ignore
export function Size(width, height){
    this.width = width;
    this.height = height;
}

export function Point(){
    this.x = 0;
    this.y = 0;
}

export class ProgramWindow {
    constructor(){
        this.screenSize = {
            width: 800,
            height: 600
        }
    }
}

// @ts-ignore
Size.prototype.resize = function(width, height){
    this.width = width;
    this.height = height;
}

// @ts-ignore
Point.prototype.move = function(x, y){
    this.x += x;
    this.y += y;
}