module states {
    // OVER CLASS
    export class Over extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private _ocean: objects.Ocean;
        private _gameOverLabel: objects.Label;
        private _scoreLabel: objects.Label;
        private _restartButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {
            // add ocean
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            
            // game over label
            this._gameOverLabel = new objects.Label("Game Over", "60px " + config.FONT_FAMILY ,config.FONT_COLOUR, 320, 140, true);
            this.addChild(this._gameOverLabel); // add game over label to the stage

            // score label
            this._scoreLabel = new objects.Label("Score: " + scoreboard.getScore(), "60px " + config.FONT_FAMILY ,config.FONT_COLOUR, 320, 240, true);
            this.addChild(this._scoreLabel); // add score label to the stage

            // back button
            this._restartButton = new objects.Button("RestartButton", 320, 340);
            this._restartButton.on("click", this._clickRestartButton, this); // event listener
            this.addChild(this._restartButton);

            stage.addChild(this);

        }


        public update(): void {
            this._ocean.update();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Back Button Click
        private _clickRestartButton(event: createjs.MouseEvent): void {
            changeState(config.PLAY_STATE);
        }


    }


}  