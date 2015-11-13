module states {
    // MENU CLASS
    export class Menu extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private _ocean: objects.Ocean;
        private _mailPilotLabel: objects.Label;
        private _startButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {
            // add ocean
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);

            // hello label
            this._mailPilotLabel = new objects.Label("MAIL PILOT", "80px Consolas", "#FFFF00", 320, 140, true);
            this.addChild(this._mailPilotLabel); // add label to the stage

            // start button
            this._startButton = new objects.Button("StartButton", 320, 340);
            this._startButton.on("click", this._clickStartButton, this); // event listener
            this.addChild(this._startButton);

            stage.addChild(this);
        }


        public update(): void {
            this._ocean.update();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Start Button Click
        private _clickStartButton(event: createjs.MouseEvent): void {
            changeState(config.PLAY_STATE);
        }

    }


}