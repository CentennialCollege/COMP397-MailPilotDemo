module states {
    // GAME CLASS
    export class Game extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private _ocean: objects.Ocean;
        private _island: objects.Island;
        private _plane: objects.Plane;
        private _collision: managers.Collision;

        private _clouds: objects.Cloud[] = [];

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {
            //add ocean to scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            
            //add island to scene
            this._island = new objects.Island();
            this.addChild(this._island);
            
            //add plane to scene
            this._plane = new objects.Plane();
            this.addChild(this._plane);
            
            //add cloud to scene
            for (var cloud = 0; cloud < 3; cloud++) {
                this._clouds[cloud] = new objects.Cloud();
                this.addChild(this._clouds[cloud]);
            }

            // instantiate collision manager
            this._collision = new managers.Collision();

            stage.addChild(this);
        }

        // update the scene every frame
        public update(): void {
            this._ocean.update();
            this._island.update();
            this._plane.update();
            
            //update each cloud
            for (var cloud = 0; cloud < 3; cloud++) {
                this._clouds[cloud].update();
                this._collision.update(this._plane, this._clouds[cloud]);
            }

            this._collision.update(this._plane, this._island);
            
        }
    }
} 