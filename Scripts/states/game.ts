module states {
    // GAME CLASS
    export class Game extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private _ocean: objects.Ocean;
        private _plane: objects.Plane;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {
            //add ocean to scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            
            //add plane to scene
            this._plane = new objects.Plane();
            this.addChild(this._plane);
           

            stage.addChild(this);
        }


        public update(): void {
            this._ocean.update();
            this._plane.update();
        }


    }


} 