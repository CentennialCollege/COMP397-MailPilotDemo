var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // OVER CLASS
    var Over = (function (_super) {
        __extends(Over, _super);
        // CONSTRUCTOR
        function Over() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Over.prototype.start = function () {
            // add ocean
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            // game over label
            this._gameOverLabel = new objects.Label("Game Over", "60px " + config.FONT_FAMILY, config.FONT_COLOUR, 320, 140, true);
            this.addChild(this._gameOverLabel); // add game over label to the stage
            // score label
            this._scoreLabel = new objects.Label("Score: " + scoreboard.getScore(), "60px " + config.FONT_FAMILY, config.FONT_COLOUR, 320, 240, true);
            this.addChild(this._scoreLabel); // add score label to the stage
            // back button
            this._restartButton = new objects.Button("RestartButton", 320, 340);
            this._restartButton.on("click", this._clickRestartButton, this); // event listener
            this.addChild(this._restartButton);
            stage.addChild(this);
        };
        Over.prototype.update = function () {
            this._ocean.update();
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Back Button Click
        Over.prototype._clickRestartButton = function (event) {
            changeState(config.PLAY_STATE);
        };
        return Over;
    })(objects.Scene);
    states.Over = Over;
})(states || (states = {}));
//# sourceMappingURL=over.js.map