module states {
    // GAME CLASS
    export class Game extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private _ocean: objects.Ocean;
        private _island: objects.Island;
        private _plane: objects.Plane;
        private _clouds: objects.Cloud[] = [];
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        
        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {
            //reset scoreboard
            scoreboard.setLives(5);
            scoreboard.setScore(0);
            console.log(scoreboard.getLives());
            console.log(scoreboard.getScore());
            
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

            // Score Label
            this._scoreLabel = new objects.Label("Score: ", "40px " + config.FONT_FAMILY ,config.FONT_COLOUR,5, 5,false);
            this.addChild(this._scoreLabel);
            
            // Lives Label
            this._livesLabel = new objects.Label("Lives: ", "40px " + config.FONT_FAMILY ,config.FONT_COLOUR,350, 5,false);
            this.addChild(this._livesLabel);

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
            this._updateScore();
            
            if(scoreboard.getLives() < 1) {
                this._plane.engineOff();
                changeState(config.OVER_STATE);
            }
            
        }
        
        private _updateScore():void {
            this._scoreLabel.text = "Score: " + scoreboard.getScore();
            this._livesLabel.text = "Lives: " + scoreboard.getLives();
        }
    }
} 