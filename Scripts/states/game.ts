module states {
    // GAME CLASS
    export class Game extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private _ocean: objects.Ocean;
        private _island: objects.Island;
        private _plane: objects.Plane;

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


            stage.addChild(this);
        }
        
        // PRIVATE METHODS
        
        /**
         * Private Utility Method - Distance - returns distance between to points in pixels
         */
        private _distance(p1: createjs.Point, p2: createjs.Point): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }


        private _checkCollision(object:objects.GameObject): void {
            // check the distance between plane and other object
            if (this._distance(this._plane.getPosition(), object.getPosition()) <
                (this._plane.getHalfHeight() + object.getHalfHeight())) {
                        
                // Check if plane is not already colliding
                if (!object.getIsColliding()) {
                    
                    switch(object.getName()) {
                        case "island":
                            console.log("Island Hit");
                        break;
                        case "cloud":
                            console.log("Cloud Hit");
                        break;
                    }
                    object.setIsColliding(true);
                }
            } else {
                object.setIsColliding(false);
            }

        }


        // update the scene every frame
        public update(): void {
            this._ocean.update();
            this._island.update();
            this._plane.update();
            
            //update each cloud
            for (var cloud = 0; cloud < 3; cloud++) {
                this._clouds[cloud].update();
                this._checkCollision(this._clouds[cloud]);
            }

            this._checkCollision(this._island);
            

        }


    }


} 