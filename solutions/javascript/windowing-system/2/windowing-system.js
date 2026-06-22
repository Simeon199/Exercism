// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */


// @ts-ignore
export function Size(width = 80, height = 60){
    this.width = width;
    this.height = height;
}

export function Position(x = 0, y = 0){
    this.x = x;
    this.y = y;
}

export class ProgramWindow {
    constructor(){
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    // @ts-ignore
    resize(newSize){
        // if(newSize.width < 1 || newSize.height < 1){
        //     newSize.width = 1;
        //     newSize.height = 1;
        // }

        const maxWidth = this.screenSize.width - this.position.x;
        const maxHeight = this.screenSize.height - this.position.y;
        
        this.size.resize(
            Math.min(Math.max(newSize.width, 1), maxWidth),
            Math.min(Math.max(newSize.height, 1), maxHeight)
        );
    }

    // @ts-ignore
    move(newPosition){
        // if(newPosition.x < 0 || newPosition.y < 0){
        //     newPosition.x = 0;
        //     newPosition.y = 0;
        // }
        const maxX = this.screenSize.width - this.size.width;
        const maxY = this.screenSize.height - this.size.height;
        this.position.move(
            Math.min(Math.max(newPosition.x, 0), maxX), 
            Math.min(Math.max(newPosition.y, 0), maxY)
        );
    }
}

// @ts-ignore
Size.prototype.resize = function(width, height){
    this.width = width;
    this.height = height;
}

// @ts-ignore
Position.prototype.move = function(x, y){
    this.x = x;
    this.y = y;
}

// @ts-ignore
export function changeWindow(programWindow){
    programWindow.size.width = 400;
    programWindow.size.height = 300;
    programWindow.position.x = 100;
    programWindow.position.y = 150;
}