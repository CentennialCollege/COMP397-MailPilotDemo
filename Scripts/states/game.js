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
            this._clouds = [];
        }
        // PUBLIC METHODS
        Game.prototype.start = function () {
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
        };
        // update the scene every frame
        Game.prototype.update = function () {
            this._ocean.update();
            this._island.update();
            this._plane.update();
            //update each cloud
            for (var cloud = 0; cloud < 3; cloud++) {
                this._clouds[cloud].update();
                this._collision.update(this._plane, this._clouds[cloud]);
            }
            this._collision.update(this._plane, this._island);
        };
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
//# sourceMappingURL=game.js.map