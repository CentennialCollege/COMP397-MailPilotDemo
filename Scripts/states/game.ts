module states {
    // GAME CLASS
    export class Game extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private _plane: objects.Plane;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {
            
            this._plane = new objects.Plane();
            this.addChild(this._plane);
           

            stage.addChild(this);
        }


        public update(): void {
            this._plane.update();
        }


    }


} 