var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // GAME CLASS
    var Game = (function (_super) {
        __extends(Game, _super);
        // CONSTRUCTOR
        function Game() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Game.prototype.start = function () {
            //add ocean to scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            //add plane to scene
            this._plane = new objects.Plane();
            this.addChild(this._plane);
            stage.addChild(this);
        };
        Game.prototype.update = function () {
            this._ocean.update();
            this._plane.update();
        };
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
//# sourceMappingURL=game.js.map