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

export function Point(x = 0, y = 0){
    this.x = x;
    this.y = y;
}

export class ProgramWindow {
    constructor(){
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Point();
    }

    // @ts-ignore
    resize(newSize){
        this.size.resize(newSize.width, newSize.height);
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